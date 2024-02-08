import {Filiale} from "./filiale.model";
import {ModulePrograme} from "./module-programe.model";
import {Groupe} from "./groupe.model";
import {Stagiaire} from "./stagiaire.model";

export class Professeur {
  id!: number;
  nom!: string;
  prenom!: string;
  age!: number;
  telephone!: string;
  email!: string;
  adress!: string;
  specialite!: string;
  filiale!: Filiale[];
  modulePrograme!: ModulePrograme[];
  groupe!: Groupe[];
  stagiaire!: Stagiaire[];
}
