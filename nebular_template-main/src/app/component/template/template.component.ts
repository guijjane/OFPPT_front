import {ChangeDetectionStrategy, Component, Inject, NgModule, OnInit} from '@angular/core';
import {NB_WINDOW, NbMenuItem, NbMenuService, NbSidebarService} from "@nebular/theme";
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TemplateComponent implements OnInit {
  itemsRightNav = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];
  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link:'home'
    },
    {
      title: 'Saisie de demandes',
      expanded: true,
      icon: 'file-text-outline',
      children: [
        {
          title: 'PM',
          link:'saisieDemande'
        },
        {
          title: 'PP',
          link:'saisieDemande'
        },
        {
          title: 'PP PRO',
          link:'saisieDemande'
        },
      ],
    },
    {
      title: 'Historique de demandes',
      icon: { icon: 'clock-outline', pack: 'eva' },
    },
    {
      title: 'Pilotage',
      icon: 'trending-up-outline',
      link:'pilotage'
    },
    {
      title: 'Gestion de referentiel',
      icon: 'book-open-outline',
    },
    {
      title: 'Gestion d\'utilisateur',
      icon: 'people-outline',
    },
    {
      title: 'Fichier',
      icon: 'home-outline',
      link:'processus'
    },
    {
      title: 'Panier',
      icon: 'home-outline',
      link:'panier'
    }
  ];
  constructor(private service:NbSidebarService,
              private nbMenuService: NbMenuService,
              @Inject(NB_WINDOW) private window:any) { }

  ngOnInit(): void {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => this.window.alert(`${title} was clicked!`));
  }

  toggleSidebar() {
    this.service.toggle(true)
    return false;
  }
}
