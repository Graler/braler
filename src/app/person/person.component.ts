import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';
import Swal from 'sweetalert2';
import { PagePerson } from './page/page-person.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  page: number = 1;
  sex: string = "null";
  name!: string;
  ageStart!: number;
  ageEnd!: number;
  showSpinner: boolean = false;
  pagePerson: PagePerson = new PagePerson();
  displayedColumns: string[] = ['image', 'name', 'age', 'sex', 'details'];
  form = this.formBuilder.group({
    name: new FormControl(''),
    sex: new FormControl(''),
    ageStart: new FormControl(''),
    ageEnd: new FormControl(''),
  });

  constructor(private personService: PersonService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getPagePersons();
  }

  getPagePersons() {
    this.showSpinner = true;
    this.personService.getPagePersons(this.page, this.name, this.ageStart, this.ageEnd, this.sex)
      .subscribe({
        next: (data: PagePerson) => {
          console.log(data);
          this.pagePerson = data;
          this.showSpinner = false;
        },
        error: (error) => {
          this.showSpinner = false;
          Swal.fire({
            text: 'Ocorreu um erro ao buscar pessoas desaparecidas.',
            icon: 'error',
            confirmButtonColor: 'red',
            confirmButtonText: 'Ok'
          });
        }
      });
  }

  search() {
    let valueForm = JSON.parse(JSON.stringify(this.form.value));
    this.name = valueForm.name;
    this.ageStart = valueForm.ageStart;
    this.ageEnd = valueForm.ageEnd;
    this.sex = valueForm.sex;

    if (Number.isNaN(Number(this.ageStart)) == false && Number.isNaN(Number(this.ageEnd)) == false && this.ageEnd.toString().length > 0 && Number(this.ageStart) > Number(this.ageEnd)) {
      Swal.fire({
        text: 'Idade inicial não pode ser maior do que idade final.',
        icon: 'error',
        confirmButtonColor: 'red',
        confirmButtonText: 'Ok'
      });
      return;
    }

    this.getPagePersons();
  }

  getFirstPage() {
    this.page = 1;
    this.getPagePersons();
  }

  getPreviousPage() {
    this.page--;
    this.getPagePersons();
  }

  getNextPage() {
    this.page++;
    this.getPagePersons();
  }

  getLastPage() {
    this.page = this.pagePerson.totalPages;
    this.getPagePersons();
  }

}
