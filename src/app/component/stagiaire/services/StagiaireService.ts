import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Stagiaire} from "../../../core/model/stagiaire.model";
import {environment} from "../../../../environments/environment";
import {Filiale} from "../../../core/model/filiale.model";
import {Groupe} from "../../../core/model/groupe.model";


@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  private apiUrl = environment.api.url;  // Mettez l'URL de votre API ici

  constructor(private http: HttpClient) { }

  getAllStagiaires(): Observable<Stagiaire[]> {
    return this.http.get<Stagiaire[]>(`${this.apiUrl}/ListStagiaire`);
  }

  getStagiaireById(id: number): Observable<Stagiaire> {
    return this.http.get<Stagiaire>(`${this.apiUrl}/unStagiaire/${id}`);
  }

  saveStagiaire(stagiaire: Stagiaire): Observable<Stagiaire> {
    return this.http.post<Stagiaire>(`${this.apiUrl}/ajout`, stagiaire);
  }

  updateStagiaire(id: number, stagiaire: Stagiaire): Observable<Stagiaire> {
    return this.http.put<Stagiaire>(`${this.apiUrl}/updateStagiaire/${id}`, stagiaire);
  }

  deleteStagiaire(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteStagiaire/${id}`);
  }

  searchStagiaire(nom: string): Observable<Stagiaire[]> {
    return this.http.get<Stagiaire[]>(`${this.apiUrl}/searchStagiaire?nom=${nom}`);
  }


  getFiliales(): Observable<Filiale[]> {
    return this.http.get<Filiale[]>(`${this.apiUrl}/ListFiliale`);
  }


  getGroupes(): Observable<Groupe[]> {
    return this.http.get<Groupe[]>(`${this.apiUrl}/ListGroupe`);
  }
}
