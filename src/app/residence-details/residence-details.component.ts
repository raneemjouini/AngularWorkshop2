import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residences = [
    { id: 1, name: 'El Fel', address: 'Borj Cedria', status: 'Disponible', image: '../../assets/images/R1.jpg' },
    { id: 2, name: 'El Yasmine', address: 'Ezzahra', status: 'Vendu', image: '../../assets/images/R2.jpg'},
    { id: 3, name: 'El Arij', address: 'Rades', status: 'En Construction', image: '../../assets/images/R3.jpg' },
    {
      id: 4,
      name: 'El Anber',
      address: 'inconnu',
      image: '../../assets/images/R4.jpg',
      status: 'En Construction',
    },
  ];

  residenceDetails: any;
  idR!: number;

  constructor(private act: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.act.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.idR = +id; 
        this.getResidenceDetails(this.idR);
      }
    });
  }

  getResidenceDetails(id: number): void {
    this.residenceDetails = this.residences.find(residence => residence.id === id);
  }

  goToNextResidence(): void {
    
    const currentIndex = this.residences.findIndex(residence => residence.id === this.idR);

    if (currentIndex >= 0) {
      const nextIndex = currentIndex + 1;

      if (nextIndex < this.residences.length) {
        const nextResidence = this.residences[nextIndex];
        this.router.navigate(['/residences', nextResidence.id]);
      } else {
        alert("C'est la dernière résidence.");
      }
    }
  }
}
