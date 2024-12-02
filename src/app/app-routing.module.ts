import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ResidencesComponent } from './residences/residences.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'residences/:id', component: ResidenceDetailsComponent },
  { path: 'add-residence', component: AddResidenceComponent},
  { path: 'apartements', component: ApartmentsComponent},
  { path: 'residences/:id/apartments', component: ApartmentsByResidenceComponent},
  { path: 'add-apartment', component: AddApartmentComponent },
  { path: '', redirectTo: '/apartments', pathMatch: 'full' },
  {
    path: 'residences',
    component: ResidencesComponent
    // children: [
    //   { path: 'wishList', component: WishListComponent },
    //   { path: 'productList', component: ProductComponent },
    // ],
  },
  {path:'residences/:id',component:ResidenceDetailsComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
