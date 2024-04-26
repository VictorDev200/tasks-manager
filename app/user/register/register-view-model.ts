import { Observable, TapGestureEventData } from "@nativescript/core";

export class RegisterViewModel extends Observable {
  username = "";
  password = "";
  passwordVerify = "";
  errorMessage = "";
  error = false;
  emptyFieldsError = 'Debe llenar todos los campos';
  mismatchPasswordFieldError = 'Las contraseñas deben ser iguales';

  onTapRegister(args: TapGestureEventData): void {
    this.error = false;

    const fields = [
      this.username,
      this.password,
      this.passwordVerify,
    ];

    const hasEmptyFields = fields.some((fields) => fields === '');

    if (hasEmptyFields) { 
      this.error = true;
      this.errorMessage = this.emptyFieldsError;
      console.log(this.errorMessage);
      return;
    }

    const samePasswordValidation = this.password === this.passwordVerify;

    if (!samePasswordValidation) {
      this.error = true;
      this.errorMessage = this.mismatchPasswordFieldError;
      return;
    }
  }

  constructor() {
    super();
  }
}
