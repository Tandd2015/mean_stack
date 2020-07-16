import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductNewComponent} from './product-new/product-new.component';
import { NavBarComponent } from '../nav/nav-bar/nav-bar.component';

export const components: any[] = [
  ProductDetailComponent,
  ProductEditComponent,
  ProductListComponent,
  ProductNewComponent,
  NavBarComponent,
];

export * from './product-detail/product-detail.component';
export * from './product-edit/product-edit.component';
export * from './product-list/product-list.component';
export * from './product-new/product-new.component';
export * from '../nav/nav-bar/nav-bar.component';

