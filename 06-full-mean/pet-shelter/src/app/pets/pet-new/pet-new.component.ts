import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../../models';
import { NgForm } from '@angular/forms';

import { PetService } from '../../services';


@Component({
  selector: 'app-pet-new',
  templateUrl: './pet-new.component.html',
  styleUrls: ['./pet-new.component.css']
})
export class PetNewComponent implements OnInit {
  pet = new Pet();
  newErrors: string[] = [];
  constructor(private petService: PetService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.petService.createPet(this.pet).subscribe({
      next: createdPet => {
        console.log('createdPet', createdPet);
        this.pet = new Pet();
        form.reset();
        this.router.navigateByUrl('pets');
      },
      error: error => {
        console.log(error.error);
        this.handleErrors(error.error);
      },
    });
  }
  private handleErrors(errors: string[] | string) {
    this.newErrors = Array.isArray(errors) ? errors : [errors];
  }
}
