export default class ValidatorService {
  static setErrors(errors: any): any {
    const validators: any = {};

    Object.keys(errors).map((key) => {
      if (!!errors[key]) {
        const attrKey = key.split('.');
        if (attrKey.length === 2) {
          this.setErrorListIds(validators, errors, key, attrKey[0]);
        }
        validators[key] = errors[key];
      }
    });

    return validators;
  }

  static setErrorListIds(validators: any, errors: any, key: string, newkey: string): void {
    if (validators.hasOwnProperty(newkey)) {
      validators[newkey] = validators[newkey] + ' ' + errors[key];
    } else {
      validators[newkey] = errors[key];
    }
  }
}
