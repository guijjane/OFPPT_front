import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-initier-formateur',
  templateUrl: './initier-formateur.component.html',
  styleUrls: ['./initier-formateur.component.css']
})

export class InitierFormateurComponent implements OnInit {
  formFormateur: FormGroup;
  stagiaires: any[] = [];
  filesForm: FormGroup;

  selectedItemNgModel:any;
  selectedItemFormControl = new FormControl();
  constructor(private fb: FormBuilder,private formBuilder: FormBuilder) {
    this.formFormateur = this.fb.group({
      filiale: ['', Validators.required],
      groupe: ['', Validators.required],
      cin: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      Attestationtravail: ['', Validators.required],
      adresse: [''],
      telephone: [''],
      email: ['', [Validators.required, Validators.email]],
      diplome: [''],
      activite: [''],
      quittance:['', Validators.required],
    });
    this.filesForm = this.formBuilder.group({
      cin: [''],
      diplome: [''],
      attestationTravail: [''],
    });
  }

  ngOnInit(): void {
  }
  onSubmit()
  {
    if (this.formFormateur.valid) {
      const stagiaireInfo = this.formFormateur.value;
      //this.stagiaires.push(stagiaireInfo);
      // Réinitialiser le formulaire après soumission si nécessaire
      this.formFormateur.reset();
    }
  }

  handleFileInput(event: any, fileType: string) {
    const file: File = event.target.files[0];
    if (file) {
      // Handle the file based on its type (CIN, diplome, attestation de travail)
      switch (fileType) {
        case 'cin':
          this.filesForm.patchValue({ cin: file });
          break;
        case 'diplome':
          this.filesForm.patchValue({ diplome: file });
          break;
        case 'attestationTravail':
          this.filesForm.patchValue({ attestationTravail: file });
          break;
        default:
          break;
      }
    }
  }




}
