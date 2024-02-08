import {Professeur} from "./professeur.model";
import {Filiale} from "./filiale.model";
import {Stagiaire} from "./stagiaire.model";
import {ModulePrograme} from "./module-programe.model";

export class Groupe {
  id!: number;
  nom!: string;
  professeur!: Professeur;
  filiale!: Filiale;
  stagiaire!: Stagiaire[];
  modulePrograme!: ModulePrograme[];
}
