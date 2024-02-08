import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbFormFieldModule,
  NbButtonModule,
  NbInputModule,
  NbSelectModule,
  NbSidebarModule,
  NbMenuModule,
  NbCardModule,
  NbIconModule,
  NbUserModule,
  NbContextMenuModule,
  NbStepperModule, NbTabsetModule, NbWindowModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AuthentificationComponent } from './component/authentification/authentification.component';
import { ApplicationComponent } from './component/application/application.component';
import { TemplateComponent } from './component/template/template.component';
import {RouterModule} from "@angular/router";
import { DemandeRapportPPComponent } from './component/demande-rapport-pp/demande-rapport-pp.component';
import {CdkTableModule} from "@angular/cdk/table";
import { ProcessusComponent } from './component/processus/processus.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ExcelTableComponent } from './component/excel-table/excel-table.component';
import { ObjectValuesPipe } from './object-values.pipe';
import { PanierComponent } from './component/panier/panier.component';
import { PilotageComponent } from './component/pilotage/pilotage.component';
import { FormformateurComponent } from './component/formateur/formformateur/formformateur.component';
import { FormCalendrierComponent } from './component/calendrier/form-calendrier/form-calendrier.component';
import { ActionFormsComponent } from './component/action/action-forms/action-forms.component';
import { InitierFormsComponent } from './component/initier/initier-forms/initier-forms.component';
import { InitActionFormsComponent } from './component/initierAction/init-action-forms/init-action-forms.component';
import { InitActionGroupeComponent } from './component/initierActionGroupe/init-action-groupe/init-action-groupe.component';
import { InitActionModuleComponent } from './component/initierActionModule/init-action-module/init-action-module.component';
import { InitierFormateurComponent } from './component/initier-formateur/initier-formateur/initier-formateur.component';
import { FormstagiaireComponent } from './component/stagiaire/formstagiaire/formstagiaire.component';
import {HomeComponent} from "./component/homes/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    ApplicationComponent,
    TemplateComponent,
    DemandeRapportPPComponent,
    ProcessusComponent,
    ExcelTableComponent,
    ObjectValuesPipe,
    PanierComponent,
    PilotageComponent,
    FormformateurComponent,
    FormCalendrierComponent,
    ActionFormsComponent,
    InitierFormsComponent,
    InitActionFormsComponent,
    InitActionGroupeComponent,
    InitActionModuleComponent,
    InitierFormateurComponent,
    FormstagiaireComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'corporate'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbFormFieldModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    NbIconModule,
    NbUserModule,
    NbContextMenuModule,
    CdkTableModule,
    NbStepperModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NbTabsetModule,
    NbWindowModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
