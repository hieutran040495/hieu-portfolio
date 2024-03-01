#!/usr/bin/env groovy

pipeline {
    agent {
        docker {
            image 'localhost:5000/web-lint'
            label 'master'
            registryUrl 'http://localhost:5000'
        }
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '1', daysToKeepStr: '1'))
        disableConcurrentBuilds()
    }

    stages {
        stage('Notify on starting') {
            steps {
                script {
                    sendMessage('Starting')
                }
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'yarn install --pure-lockfile --no-progress --non-interactive --ignore-scripts --silent'
            }
        }

        stage('Check linting') {
            steps {
                sh 'yarn run full-lint'
            }
        }
    }

    post {
        always {
            sendMessage(currentBuild.currentResult)
        }

        success {
            script {
                if (env.BRANCH_NAME in ['develop']) {
                    build job: '../../dev/user-web', wait: false
                }
            }
        }
    }
}

def sendMessage(String status) {
    def color = '#c72c00'
    def success = true
    def emoji = ':white_sun_rain_cloud:'

    if (status == 'Starting') {
        color = '#a0d4f1'
        emoji = ':fire:'
    } else if (status == 'SUCCESS') {
        color = '#00d213'
        emoji = ':sunny:'
    } else {
        success = false
    }

    // https://wiki.jenkins-ci.org/display/JENKINS/Build+User+Vars+Plugin
    rocketSend(
        attachments: [[
            color: color,
            text: "Status: ${status}\nURL: ${BUILD_URL}console",
            title: "#${env.BUILD_NUMBER} pipeline » user-web » ${env.BRANCH_NAME}",
            collapsed: true
        ]],
        message: success ? '' : "@son.dc @nga.ttt ${status}",
        channel: 'mi-teriyaki-cicd',
        rawMessage: true,
        emoji: emoji
    )
}
