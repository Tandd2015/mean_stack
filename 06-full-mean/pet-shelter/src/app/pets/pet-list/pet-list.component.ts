import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  selectedPet: Pet;
  constructor(private readonly petService: PetService) {}


  ngOnInit() {
    this.petService.getPets()
    .subscribe(pets => {
      this.pets = pets;
    });
  }

  onSelect(pet: Pet): void {
    console.log('selecting pet', pet);
    this.selectedPet = this.selectedPet === pet ? null : pet;
  }
  onCreate(pet: Pet): void {
    console.log('creating pet', pet);
    this.petService
      .createPet(pet)
      .subscribe(createdPet => (this.pets = [...this.pets, createdPet]));
  }
  onDelete(pet: Pet): void {
    console.log('deleting pet', pet);
    this.petService.removePet(pet._id).subscribe(deletedPet => {
      console.log('deleted pet', deletedPet);
      this.pets = this.pets.filter(currentPet => currentPet._id !== deletedPet._id);
    });
  }
  onEvent(event: Event): void {
    console.log('event passing');
    event.stopPropagation();
  }
}
