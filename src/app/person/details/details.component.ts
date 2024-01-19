import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person.model';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {
  person: Person = new Person();
  showSpinner: boolean = false;
  name = 'ngx-sharebuttons';

  constructor(private personService: PersonService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson() {
    this.showSpinner = true;
    this.personService.getPerson(this.activateRouter.snapshot.params['id'])
      .subscribe({
        next: (data: Person) => {
          console.log(data);
          this.person = data;
          this.showSpinner = false;
          if (this.person == undefined || this.person == null || this.person.id == undefined || this.person.id == null) {
            Swal.fire({
              text: "Pessoa não encontrada!",
              icon: "error",
              showCancelButton: false,
              confirmButtonColor: "#3085d6",
              confirmButtonText: "OK"
            }).then((result) => {
              this.router.navigateByUrl("/pessoas")
            });
          }
        },
        error: (error) => {
          this.showSpinner = false;
          Swal.fire({
            text: 'Ocorreu um erro ao buscar pessoa desaparecidas.',
            icon: 'error',
            confirmButtonColor: 'red',
            confirmButtonText: 'Ok'
          }).then((result) => {
            this.router.navigateByUrl("/pessoas")
          });
        }
      });
  }

}
