import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoaderPage } from './loader.page';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { LoginPageForm } from "./loader.page.form";

import {RouterTestingModule} from "@angular/router/testing";

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('LoginPageForm', () => {

    let loginPageForm: LoginPageForm;
    let form: FormGroup;

    beforeEach(() => {
      loginPageForm = new LoginPageForm(new FormBuilder());
      form = loginPageForm.createForm()
    })

    it('shoud create login form empty', () => {

        expect(form).not.toBeNull();
        expect(form.get('email').value).toEqual('');
        expect(form.get('email').valid).toBeFalsy();
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password').value).toEqual('');
        expect(form.get('password').valid).toBeFalsy();
    })

    it('should have email invalid if email is not valid', () => {
      form.get('email').setValue('invalid email');

      expect(form.get('email').valid).toBeFalsy();
    })

    it('should have email valid if email is valid', () => {
      form.get('email').setValue('valid@mail.com');

      expect(form.get('email').valid).toBeTruthy();
    })

    it('should have a valid form', () => {
      form.get('email').setValue('valid@email.com');
      form.get('password').setValue('anyPassword');

      expect(form.valid).toBeTruthy();
    })
  });
});
