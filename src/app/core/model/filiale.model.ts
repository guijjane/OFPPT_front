import {Professeur} from "./professeur.model";
import {Groupe} from "./groupe.model";
import {ModulePrograme} from "./module-programe.model";
import {Stagiaire} from "./stagiaire.model";

export class Filiale {
  id!: number;
  nom!: string;
  professeur!: Professeur;
  modulePrograme!: ModulePrograme[];
  groupe!: Groupe[];
  stagiaire!: Stagiaire[];
}
