import { Component, OnInit } from '@angular/core';
import { Apartment } from '../core/models/Apartment';  // Assurez-vous d'importer votre modèle

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  apartments: Apartment[] = [
    { apartNum: 1, floorNum: 1, surface: 120, terrace: true, surfaceterrace: 20, category: 'Luxury', ResidenceId: 1 },
    { apartNum: 2, floorNum: 2, surface: 100, terrace: true, surfaceterrace: 50, category: 'Standard', ResidenceId: 1 },
    { apartNum: 3, floorNum: 3, surface: 150, terrace: true, surfaceterrace: 30, category: 'Penthouse', ResidenceId: 2 },
  ];
  
  showAddForm = false; 

  constructor() {}

  ngOnInit(): void {}
  addApartment(apartment: Apartment) {
    this.apartments.push(apartment);
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }
}
