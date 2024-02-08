import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NbWindowControlButtonsConfig, NbWindowService} from "@nebular/theme";
import {InitierFormateurComponent} from "../../initier-formateur/initier-formateur/initier-formateur.component";

@Component({
  selector: 'app-formformateur',
  templateUrl: './formformateur.component.html',
  styleUrls: ['./formformateur.component.css']
})
export class FormformateurComponent implements OnInit {

  files:  undefined | null;
  selectedFile: any;
  totalPages: any;
  currentPage!: number;
  formFormateur: FormGroup;


  constructor(private windowService:NbWindowService,private fb: FormBuilder,private formBuilder: FormBuilder) {
    this.formFormateur = this.fb.group({
      filiale: ['', Validators.required],
      groupe: ['', Validators.required],
      module: ['', Validators.required],
      formateur: ['', Validators.required],
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
      MasseHorraire:['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  onOpenCreateStagaireWindows() {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: true,
      //close: true,
    };
    const nbWindowRef = this.windowService.open(InitierFormateurComponent, {
      title: ` Ajouter nouveaux Formateur`,
      buttons: buttonsConfig,
      // context:{
      //   ref:ref,
      //   source:this.source
      // }
    });
  }

  onSelectFile() {

  }

  goToPage(i: number) {

  }


}
