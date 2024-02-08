import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {StagiaireService} from "../../stagiaire/services/StagiaireService";
import {Stagiaire} from "../../../core/model/stagiaire.model";
import {Filiale} from "../../../core/model/filiale.model";
import {Groupe} from "../../../core/model/groupe.model";

@Component({
  selector: 'app-initier-forms',
  templateUrl: './initier-forms.component.html',
  styleUrls: ['./initier-forms.component.css']
})
export class InitierFormsComponent implements OnInit {

  formFiliales: FormGroup;
  formGroupes: FormGroup;
  formInformations: FormGroup;
  formPiecesJointes: FormGroup;
  stagiaire!:Stagiaire;
  isFileSelected: boolean = false;
  filiales: Filiale[] = [];
  groupes: Groupe[] = [];




  constructor(private fb: FormBuilder,private formBuilder: FormBuilder,private stagiaireService: StagiaireService) {
    this.formFiliales = this.fb.group({
      //filialeId: ['',Validators.required],
      filiale: ['',Validators.required],

    });

    this.formGroupes = this.fb.group({
      //groupeId: ['',Validators.required],
      groupe: ['',Validators.required],
    });

    this.formInformations = this.fb.group({
      cin: [''],
      nom: [''],
      prenom: [''],
      adress: [''],
      telephone: [''],
      email: [''],
      diplome: [''],
      fonction: [''],
    });

    this.formPiecesJointes = this.fb.group({
      cin: [''],
      diplome: [''],
      Attestationtravail: [''],
      quittance: [''],
    });


  }
  ngOnInit(): void {

    this.stagiaireService.getFiliales().subscribe(data => this.filiales = data);
    this.stagiaireService.getGroupes().subscribe(data => this.groupes = data);
  }

  onInvalid() {
    return false;
  }

  onSubmit() {


    // Ajoutez ici la logique de soumission du formulaire
    if (this.formFiliales.valid && this.formGroupes.valid && this.formInformations.valid && this.formPiecesJointes.valid) {
      const formData = {
        ...this.formFiliales.value,
        ...this.formGroupes.value,
        ...this.formInformations.value,
        ...this.formPiecesJointes.value
      };

      };
    this.stagiaire = new Stagiaire();
    //this.stagiaire.filiale = this.formFiliales.value.filiale ? this.formFiliales.value.filiale.nom : null;
    //this.stagiaire.groupe = this.formGroupes.value.groupe ? this.formGroupes.value.groupe.nom : null;

    //this.stagiaire.filiale=this.formFiliales.value.filialeId
    //this.stagiaire.groupe=this.formGroupes.value.groupeId
    this.stagiaire.filiale=this.formFiliales.value.filiale
    this.stagiaire.groupe=this.formGroupes.value.groupe
    this.stagiaire.cin=this.formInformations.value.cin
    this.stagiaire.nom=this.formInformations.value.nom
    this.stagiaire.prenom=this.formInformations.value.prenom
    this.stagiaire.adress=this.formInformations.value.adress
    this.stagiaire.telephone=this.formInformations.value.telephone
    this.stagiaire.email=this.formInformations.value.email
    this.stagiaire.diplome=this.formInformations.value.diplome
    this.stagiaire.fonction=this.formInformations.value.fonction


      this.stagiaireService.saveStagiaire(this.stagiaire).subscribe(response => {

      console.log(response);
      });

    }

  handleFileInput(event: any, fileType: string) {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      // Handle the file based on its type (you can adjust this based on your requirements)
      switch (fileType) {
        case 'cin':
          // this.formPiecesJointes.patchValue({cin: files[0]});
          this.formPiecesJointes.get('cin')?.updateValueAndValidity();

          break;
        case 'diplome':
          //this.formPiecesJointes.patchValue({diplome: files[0]});
          this.formPiecesJointes.get('diplome')?.updateValueAndValidity();
          break;
        case 'attestationTravail':
          //this.formPiecesJointes.patchValue({attestationTravail: files[0]});
          this.formPiecesJointes.get('attestationTravail')?.updateValueAndValidity();
          break;
        case 'quittance':
          //this.formPiecesJointes.patchValue({quittance: files[0]});
          this.formPiecesJointes.get('quittance')?.updateValueAndValidity();
          break;
        default:
          break;
      }

      // Update the variable to track file selection
      this.formPiecesJointes.patchValue({ base64File: files[0] });
      this.isFileSelected = true;
    }
  }


  resetForm() {

  }
}
