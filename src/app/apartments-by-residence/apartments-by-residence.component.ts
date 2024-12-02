import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css'],
})
export class ApartmentsByResidenceComponent implements OnInit {
  apartments: any[] = []; // Liste des appartements
  residenceId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.residenceId = +this.route.snapshot.paramMap.get('id')!;
    this.loadApartmentsByResidence(this.residenceId);
  }

  loadApartmentsByResidence(residenceId: number): void {
    // Simuler des données d'appartements spécifiques à la résidence
    const allApartments = [
      { apartNum: 101, floorNum: 1, surface: 120, terrace: true, surfaceterrace: 20, category: 'Luxury', ResidenceId: 1 },
      { apartNum: 102, floorNum: 1, surface: 100, terrace: true, surfaceterrace: 50, category: 'Standard', ResidenceId: 3},
      { apartNum: 201, floorNum: 2, surface: 150, terrace: true, surfaceterrace: 30, category: 'Luxury', ResidenceId: 2 },
    ];

    // Filtrer les appartements par résidence
    this.apartments = allApartments.filter(apartment => apartment.ResidenceId === residenceId);
  }
}
