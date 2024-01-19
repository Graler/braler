import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagePerson } from './page/page-person.model';
import { API } from '../app.api';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getPagePersons(page: number, name: string, ageStart: number, ageEnd: number, sex: string): Observable<PagePerson> {

    if (name == undefined || name == null || name.trim().length == 0) {
      name = "";
    }

    if (sex == undefined || sex == null || sex.trim().length == 0) {
      sex = "";
    }

    if (ageStart == undefined || ageStart == null || Number.isNaN(Number(ageStart)) == true) {
      ageStart = 0
    }

    if (ageEnd == undefined || ageEnd == null || Number.isNaN(Number(ageEnd)) == true) {
      ageEnd = 0
    }


    let params = new HttpParams();
    params = params.append('pagina', (page - 1).toString())
    params = params.append('porPagina', "12")
    params = params.append('faixaIdadeInicial', ageStart.toString())
    params = params.append('faixaIdadeFinal', ageEnd.toString())
    params = params.append('status', "DESAPARECIDO")
    params = params.append('nome', name);
    params = params.append('sexo', sex)

    return this.http.get<PagePerson>(`${API}/pessoas/aberto/filtro`, { params: params });
  }

  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(`${API}/pessoas/${id}`);
  }
}


