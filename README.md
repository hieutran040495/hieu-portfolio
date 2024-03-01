# Hieu-Porfolio

## Project Require

- [Node v10.13.0](https://nodejs.org/en/)  >= v10.13.0
- [Yarn v1.22.4](https://yarnpkg.com/) >= 1.22.4
- [NPM](https://www.npmjs.com/) >= 6.4.1
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Library using in project

- [Framework Vuejs](https://vuejs.org/)
- [Manage State](https://vuex.vuejs.org/)
- [Encrypted](https://www.npmjs.com/package/vuex-persistedstate)
- [Vuetifyjs](https://vuetifyjs.com/en/)
- [DateTime](https://date-fns.org/)
- [Router](https://router.vuejs.org/)
- [Payment](https://stripe.com/docs/stripe-js)
- [Support JavaScript](https://lodash.com/)

## Install Node, NPM

[How to install nvm](https://github.com/creationix/nvm)

### Run & Build project

```bash
# clone environment with env and update correct variable environment
cp -f .env.example .env

# Install the dependencies
yarn install
```

### Run project with development mode

#### Compiles and hot-reloads for development run with mode dev

```bash
yarn serve:dev
```

### Build project

#### Update correct variables corresponding environment

#### Compiles and minifies for production run with mode: dev, prod, stag

```bash
yarn build:<env>
# example
yarn build:dev
```
