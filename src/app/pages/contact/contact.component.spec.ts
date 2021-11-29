import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MockComponents } from 'ng-mocks';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { Overlay } from '@angular/cdk/overlay';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        ContactComponent,
        MockComponents(
          MatError,
          MatLabel,
          MatFormField,
        )
      ],
      providers: [
        MatSnackBar,
        Overlay,
        FormBuilder
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component);
  });

  it('valid input email', () => {
    component.formGroup.patchValue({'email': ''});
    fixture.autoDetectChanges();
    let inputEmail = document.getElementsByClassName('email')
    let matError = inputEmail[0].getElementsByTagName('mat-error')
    expect(matError[0].textContent?.trim()).toEqual('O email é obrigatório');

    component.formGroup.patchValue({'email': 'teste@quickfast'});
    fixture.autoDetectChanges();

    inputEmail = document.getElementsByClassName('email')
    matError = inputEmail[0].getElementsByTagName('mat-error')
    expect(matError[0].textContent?.trim()).toEqual('Email invalido');

    component.formGroup.patchValue({'email': 'teste@quickfast.com'});
    fixture.autoDetectChanges();

    inputEmail = document.getElementsByClassName('email')
    matError = inputEmail[0].getElementsByTagName('mat-error')
    expect(matError.length).toEqual(0);
  })
});
