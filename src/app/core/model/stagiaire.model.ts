import {Filiale} from "./filiale.model";
import {Groupe} from "./groupe.model";
import {ModulePrograme} from "./module-programe.model";
import {Professeur} from "./professeur.model";

export class Stagiaire {
  id!: number;
  nom!: string;
  prenom!: string;
  age!: number;
  cin!:string;
  telephone!: string;
  email!: string;
  adress!: string;
  diplome!: string;
  fonction!: string;
  filialeId!: number;
  filialenom!:string;
  groupenom!: string;
  modulePrograme!: ModulePrograme[];
  groupeId!: number
  professeur!: Professeur[];

  filiale!: string;
  groupe!:  string ;
  fichier: any;
  base64File!: string;
}
