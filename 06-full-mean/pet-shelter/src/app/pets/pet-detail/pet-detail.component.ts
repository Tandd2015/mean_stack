import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap} from 'rxjs/operators';

import { Pet } from 'src/app/models';
import { PetService } from '../../services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  @Input()
  pet: Pet;
  isAuthed = false;
  constructor(private petService: PetService, private route: ActivatedRoute, private router: Router) {}
//
  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.petService.getPet(id))
    )
    .subscribe(pet => {
      console.log('Pet from Api ', pet);
      this.pet = pet;
    });
  }

  onDelete(pet: Pet) {
    this.petService.removePet(pet._id)
    .subscribe( deletedPet => {
      console.log('deleted pet ', deletedPet);
      this.router.navigateByUrl('/');
    });
  }

  addLike(pet: Pet) {
    this.route.paramMap
    .pipe(
      map(params => params.get('id')),
      switchMap(id => this.petService.getPet(id))
    )
    .subscribe(pet => {
      this.pet = pet;
      this.pet.likes += 1;
      this.petService.updatePet(this.pet);
      this.isAuthed = true;
    });
  }
}
