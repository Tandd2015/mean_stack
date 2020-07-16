// this is the index for the barreling technique of the path routes to the client side routing in Angular
// not express application routes which you do not want to be the same so you do hit them on the
// client side routing
import { PetListComponent } from './pet-list/pet-list.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetNewComponent } from './pet-new/pet-new.component';
import { NavComponent } from '../nav/nav.component';

export const components: any[] = [PetListComponent, PetDetailComponent, PetNewComponent, PetEditComponent, NavComponent];

export * from './pet-list/pet-list.component';
export * from './pet-detail/pet-detail.component';
export * from './pet-new/pet-new.component';
export * from './pet-edit/pet-edit.component';
export * from '../nav/nav.component';
