import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthentificationComponent} from "./component/authentification/authentification.component";
import {ApplicationComponent} from "./component/application/application.component";

import {DemandeRapportPPComponent} from "./component/demande-rapport-pp/demande-rapport-pp.component";
import {ProcessusComponent} from "./component/processus/processus.component";
import {ExcelTableComponent} from "./component/excel-table/excel-table.component";
import {PilotageComponent} from "./component/pilotage/pilotage.component";
import {PanierComponent} from "./component/panier/panier.component";
import {HomeComponent} from "./component/homes/home/home.component";
import {FormstagiaireComponent} from "./component/stagiaire/formstagiaire/formstagiaire.component";
import {FormformateurComponent} from "./component/formateur/formformateur/formformateur.component";
import {FormCalendrierComponent} from "./component/calendrier/form-calendrier/form-calendrier.component";
import {ActionFormsComponent} from "./component/action/action-forms/action-forms.component";

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth', component: AuthentificationComponent,
    children: [
      {path: '', component: AuthentificationComponent}
    ]
  },
  { path: '', redirectTo: 'application', pathMatch: 'full' },
  {
    path: 'application', component: ApplicationComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      /*{path: 'saisieDemande', component: DemandeRapportPPComponent},
      {path: 'processus', component: ProcessusComponent},
      {path: 'excelTable', component: ExcelTableComponent},
      {path: 'pilotage', component: PilotageComponent},
      {path: 'panier', component: PanierComponent},*/
      {path: 'Stagiaire', component: FormstagiaireComponent},
      {path: 'Formateur', component: FormformateurComponent},
      {path: 'form-calendrier', component: FormCalendrierComponent},
      {path: 'Action', component: ActionFormsComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
