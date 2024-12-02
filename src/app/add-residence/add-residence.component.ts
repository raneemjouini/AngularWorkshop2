import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {
  residenceDetails: any = {
    id: null,
    name: '',
    address: '',
    status: 'Disponible',
    image: '',
    description: ''
  };
  isUpdateMode = false;

  constructor(private act: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');
    if (id) {
      this.isUpdateMode = true;
      this.getResidenceDetails(+id); 
    }
  }

  
  getResidenceDetails(id: number): void {
   
    const allResidences = [
      { id: 1, name: 'El Fel', address: 'Borj Cedria', status: 'Disponible', image: 'assets/images/R1.jpg', description: 'Une belle résidence située à Borj Cedria.' },
      { id: 2, name: 'El Yasmine', address: 'Ezzahra', status: 'Vendu', image: 'assets/images/R2.jpg', description: 'Résidence à Ezzahra.' },
      { id: 3, name: 'El Arij', address: 'Rades', status: 'En Construction', image: 'assets/images/R3.jpg', description: 'Résidence en construction.' }
    ];

    this.residenceDetails = allResidences.find(residence => residence.id === id) || this.residenceDetails;
  }

  
  onSubmit(): void {
    if (this.isUpdateMode) {
      alert('Residence mise à jour');
    } else {
      alert('Nouvelle résidence ajoutée');
    }
    this.router.navigate(['/residences']); 
  }
}
