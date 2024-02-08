import {Professeur} from "./professeur.model";
import {Stagiaire} from "./stagiaire.model";
import {Filiale} from "./filiale.model";
import {Groupe} from "./groupe.model";

export class ModulePrograme {
  id!: number;
  nom!: string;
  professeur!: Professeur;
  groupe!: Groupe[];
  stagiaire!: Stagiaire[];
  filiale!: Filiale[];
}
