import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-init-action-forms',
  templateUrl: './init-action-forms.component.html',
  styleUrls: ['./init-action-forms.component.css']
})
export class InitActionFormsComponent implements OnInit {

  formFiliale: FormGroup;

  constructor(private fb: FormBuilder,private formBuilder: FormBuilder) {
    this.formFiliale = this.fb.group({
      filiale: ['', Validators.required],
      groupe: ['', Validators.required],
      cin: ['', Validators.required],
      nom: ['', Validators.required],
      name: ['', Validators.required],
      prenom: ['', Validators.required],
      Attestationtravail: ['', Validators.required],
      adresse: [''],
      telephone: [''],
      email: ['', [Validators.required, Validators.email]],
      diplome: [''],
      activite: [''],
      quittance:['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onInvalid() {
    return false;
  }
}
