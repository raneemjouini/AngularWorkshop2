import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartment = {
    apartNum: 0,
    floorNum: 0,
    surface: 0,
    terrace: false,
    surfaceterrace: 0,
    category: '',
    ResidenceId: 0
  };

  @Output() apartmentAdded = new EventEmitter<any>();

  constructor(private router: Router) {}

  onSubmit() {
    this.apartmentAdded.emit(this.apartment);
    alert('Appartement ajouté avec succès !');

    this.router.navigate(['/apartements']);
  }
}
