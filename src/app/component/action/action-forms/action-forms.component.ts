import { Component, OnInit } from '@angular/core';
import {NbWindowControlButtonsConfig, NbWindowService} from "@nebular/theme";
import {InitActionModuleComponent} from "../../initierActionModule/init-action-module/init-action-module.component";
import {InitActionFormsComponent} from "../../initierAction/init-action-forms/init-action-forms.component";
import {InitActionGroupeComponent} from "../../initierActionGroupe/init-action-groupe/init-action-groupe.component";

@Component({
  selector: 'app-action-forms',
  templateUrl: './action-forms.component.html',
  styleUrls: ['./action-forms.component.css']
})
export class ActionFormsComponent implements OnInit {

  files:  undefined | null;
  selectedFile: any;
  totalPages: any;
  currentPage!: number;


  constructor(private windowService:NbWindowService) { }

  ngOnInit(): void {
  }

  onOpenCreateFilialeWindows() {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: true,
      //close: true,
    };
    const nbWindowRef = this.windowService.open(InitActionFormsComponent, {
      title: ` Ajouter nouveaux Filiale`,
      buttons: buttonsConfig,
      // context:{
      //   ref:ref,
      //   source:this.source
      // }
    });
  }


  onOpenCreateModuleWindows() {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: true,
      //close: true,
    };
    const nbWindowRef = this.windowService.open(InitActionModuleComponent, {
      title: ` Ajouter nouveaux Module`,
      buttons: buttonsConfig,
      // context:{
      //   ref:ref,
      //   source:this.source
      // }
    });
  }
  onOpenCreateGroupeWindows() {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: true,
      //close: true,
    };
    const nbWindowRef = this.windowService.open(InitActionGroupeComponent, {
      title: ` Ajouter nouveaux Module`,
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

  handleValiderGest() {

  }

  handleRejetGest() {

  }

}
