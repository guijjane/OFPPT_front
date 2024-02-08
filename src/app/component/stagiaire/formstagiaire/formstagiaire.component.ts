import { Component, OnInit } from '@angular/core';
import {NbWindowControlButtonsConfig, NbWindowService} from "@nebular/theme";
import {InitierFormsComponent} from "../../initier/initier-forms/initier-forms.component";
import {Stagiaire} from "../../../core/model/stagiaire.model";
import {StagiaireService} from "../services/StagiaireService";

@Component({
  selector: 'app-formstagiaire',
  templateUrl: './formstagiaire.component.html',
  styleUrls: ['./formstagiaire.component.css']
})
export class FormstagiaireComponent implements OnInit {

  files:  undefined | null;
  selectedFile: any;
  totalPages: any;
  currentPage!: number;
  stagiaires: Stagiaire[] = [];
  selectedStagiaire: Stagiaire = new Stagiaire();






  constructor(private windowService:NbWindowService,private stagiaireService: StagiaireService) {

  }
  ngOnInit(): void {
    this.AllStagiaires();


  }

  onSelectStagiaire(stagiaire: Stagiaire) {
    // Vous pouvez faire quelque chose avec le stagiaire sélectionné (par exemple, afficher les détails)
    console.log('Stagiaire sélectionné :', stagiaire);
    this.selectedStagiaire=stagiaire;
  }
  onEditStagiaire(stagiaire: Stagiaire) {
    // Pré-remplir le formulaire avec les informations du stagiaire pour la mise à jour
    this.selectedStagiaire = { ...stagiaire };
  }

  onEditSelectedStagiaire() {
    // Vérifiez si un stagiaire est sélectionné
    if (this.selectedStagiaire.id) {
      // Utilisez la méthode onEditStagiaire pour pré-remplir le formulaire
      this.onEditStagiaire(this.selectedStagiaire);
    } else {
      console.error('Aucun stagiaire sélectionné pour la modification.');
    }
  }
  AllStagiaires() {
    this.stagiaireService.getAllStagiaires().subscribe(
      data => {
        this.stagiaires = data;
      },
      error => {
        console.error('Erreur lors de la récupération des stagiaires', error);
      }
    );
  }
  onSaveStagiaire() {
    if (this.selectedStagiaire.id) {
      // Si l'ID existe, il s'agit d'une mise à jour
      this.stagiaireService.updateStagiaire(this.selectedStagiaire.id, this.selectedStagiaire).subscribe(
        updatedStagiaire => {
          console.log('Stagiaire mis à jour avec succès :', updatedStagiaire);
          this.resetForm();
          this.AllStagiaires();
        },
        error => {
          console.error('Erreur lors de la mise à jour du stagiaire :', error);
        }
      );
    } else {
      // Si l'ID n'existe pas, il s'agit d'un ajout
      this.stagiaireService.saveStagiaire(this.selectedStagiaire).subscribe(
        newStagiaire => {
          console.log('Nouveau stagiaire ajouté avec succès :', newStagiaire);
          this.resetForm();
          this.AllStagiaires();
        },
        error => {
          console.error('Erreur lors de l\'ajout du nouveau stagiaire :', error);
        }
      );
    }
  }

  onDeleteSelectedStagiaire() {
    // Vérifiez si un stagiaire est sélectionné
    if (this.selectedStagiaire.id) {
      if (confirm('Êtes-vous sûr de vouloir supprimer ce stagiaire ?')) {
        this.stagiaireService.deleteStagiaire(this.selectedStagiaire.id).subscribe(
          () => {
            console.log('Stagiaire supprimé avec succès.');
            this.resetForm();
            this.AllStagiaires();
          },
          error => {
            console.error('Erreur lors de la suppression du stagiaire :', error);
          }
        );
      }
    } else {
      console.error('Aucun stagiaire sélectionné pour la suppression.');
    }
  }
  private resetForm() {
    this.selectedStagiaire = new Stagiaire();
  }



  onOpenCreateStagaireWindows() {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: true,
    };
    const nbWindowRef = this.windowService.open(InitierFormsComponent, {
      title: `Ajouter nouveaux Stagiaire`,
      buttons: buttonsConfig,
      context: {
      },
    });
    nbWindowRef.onClose.subscribe(dataFromModal => {
      console.log('Données reçues de la fenêtre modale:', dataFromModal);
      this.AllStagiaires();

    });
  }




  goToPage(i: number) {

  }




}
