import { Component, OnInit } from '@angular/core';
import {
  NonNullableFormBuilder,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import User from 'src/app/interfaces/registration';
import { regexEmail, regexFN, regexLN, regexPassword } from 'src/utils/regex';
import Validation from 'src/validators/registration';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public hide1: boolean = true;
  public hide2: boolean = true;

  public registrationForm = this.formBuilder.group(
    {
      firstNames: ['', [Validators.required, Validators.pattern(regexFN)]],
      lastNames: ['', [Validators.required, Validators.pattern(regexLN)]],
      genre: ['', Validators.required],
      birth: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(regexEmail)]],
      password: ['', [Validators.required, Validators.pattern(regexPassword)]],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: Validation.match('password', 'confirmPassword'),
    }
  );

  private user!: User;

  constructor(private formBuilder: NonNullableFormBuilder) {}

  public ngOnInit(): void {}

  public onSubmit(formGroupDirective: FormGroupDirective): void {
    const { firstNames, lastNames, genre, birth, email, password } =
      this.registrationForm.getRawValue();

    this.user = {
      id: Date.now(),
      firstNames: firstNames.split(' ').map((e) => e.toLowerCase()),
      lastNames: lastNames.split(' ').map((e) => e.toLowerCase()),
      genre,
      birth: birth.toString(),
      email: email.toLowerCase(),
      password,
    };

    this.registrationForm.reset();
    formGroupDirective.resetForm();

    console.log(this.user); //? preview
  }

  get firstNames() {
    return this.registrationForm.controls.firstNames;
  }

  get lastNames() {
    return this.registrationForm.controls.lastNames;
  }
  get genre() {
    return this.registrationForm.controls.genre;
  }

  get birth() {
    return this.registrationForm.controls.birth;
  }

  get email() {
    return this.registrationForm.controls.email;
  }

  get password() {
    return this.registrationForm.controls.password;
  }
  get confirmPassword() {
    return this.registrationForm.controls.confirmPassword;
  }

  public firstNamesInvalid(): string {
    if (this.firstNames.errors?.['required']) return 'First name is required.';
    return this.firstNames?.errors?.['pattern']
      ? 'Not a valid first name.'
      : '';
  }

  public lastNamesInvalid(): string {
    if (this.lastNames.errors?.['required']) return 'Last name is required.';
    return this.lastNames.errors?.['pattern'] ? 'Not a valid last name.' : '';
  }

  public genreInvalid(): string {
    return this.genre.errors?.['required'] ? 'Genre is required.' : '';
  }

  public birthInvalid(): string {
    return this.birth.errors?.['required'] ? 'Invalid date of birth.' : '';
  }

  public emailInvalid(): string {
    if (this.email.errors?.['required']) return 'Email address required.';
    return this.email.errors?.['pattern'] ? 'Invalid email address.' : '';
  }

  public passwordInvalid(): string {
    if (this.password.errors?.['required']) return 'Password required.';
    return this.password.errors?.['pattern'] ? 'Invalid password.' : '';
  }

  public confirmPasswordInvalid(): string {
    if (this.confirmPassword.errors?.['required'])
      return 'Confirmation required.';
    return this.confirmPassword.errors?.['matching']
      ? 'Passwords do not match'
      : '';
  }
}
