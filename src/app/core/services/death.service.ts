import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeathService {

  constructor(private http: HttpClient) { 

  }

  // Servicio N°9
   findAllDeaths() {
    return this.http.get<any>(`${environment.BREAKING_BAD_API}/deaths/`);
  }

  // Servicio N°10
  findRandomDeath(serie: string) {
    return this.http.get<any>(`${environment.BREAKING_BAD_API}/episodes?series=${serie}`);
  }

  // Servicio N°11
  findEpisodeById(id: number) {
    return this.http.get<any>(`${environment.BREAKING_BAD_API}/episodes?series=${id}`);
  }

}
