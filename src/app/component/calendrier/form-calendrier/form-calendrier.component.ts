import { Component, OnInit } from '@angular/core';
/*interface ScheduleEntry {
  module: string;
  formateur: string;
  hours: number;
}

interface Filiale {
  name: string;
  schedule: {
    [day: string]: ScheduleEntry[];
  };
}*/
interface Schedule {
  module: string;
  formateur: string;
  hours: number;
}

interface Filiale {
  name: string;
  schedule: {
    [key: string]: Schedule[];
  };
}
@Component({
  selector: 'app-form-calendrier',
  templateUrl: './form-calendrier.component.html',
  styleUrls: ['./form-calendrier.component.css']
})
export class FormCalendrierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

  filiales: Filiale[] = [
    {
      name: 'TDI 1ER ANNE GROUPE 1',
      schedule: {
        Lundi: [
          { module: 'Abrab', formateur: 'Formateur X', hours: 2 },
        ],
        Mardi: [
          { module: 'France', formateur: 'Formateur Y', hours: 3 },
        ],
        Mercredi: [
          { module: 'Anglais', formateur: 'Formateur Z', hours: 2 },
        ],
        Jeudi: [
          { module: 'POO', formateur: 'Formateur R', hours: 4 },
        ],
        Vendredi: [
          { module: 'POO', formateur: 'Formateur R', hours: 4 },
        ],
        Samedi: [
          { module: 'java', formateur: 'Formateur K', hours: 5 }
        ],
      }
    },
    // Add more filiales as needed
  ];

}
