import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { PetService } from 'src/app/services';
import { Pet } from 'src/app/models';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
  pet: Pet;
  petErrors: string[] = [];
  constructor(
    private readonly route: ActivatedRoute,
    private readonly petService: PetService,
    private readonly router: Router,
  ) { }
  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('id')),
        switchMap(id => this.petService.getPet(id)),
      )
      .subscribe(pet => {
        console.log('pet from api', pet);
        this.pet = pet;
      });
  }
  onSubmit(event: Event, form: NgForm) {
    console.log('editing pet', {...form.value, _id: this.pet._id});
    this.petService.updatePet({ ...form.value, _id: this.pet._id})
    .subscribe({
      next: updatePet => {
      console.log(updatePet);
      this.router.navigate(['/pets', updatePet._id]);
      },
      error:  error => this.handleErrors(error.error)
    });
  }
  private handleErrors(errors: string[] | string) {
    this.petErrors = Array.isArray(errors) ? errors : [errors];
  }
}
