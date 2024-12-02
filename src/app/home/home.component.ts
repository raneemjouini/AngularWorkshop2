import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  residences = [
    { id: 1, name: 'El Fel', address: 'Borj Cedria', status: 'Disponible', image: '../../assets/images/R1.jpg', description: 'Une belle résidence située à Borj Cedria.' },
    { id: 2, name: 'El Yasmine', address: 'Ezzahra', status: 'Vendu', image: '../../assets/images/R2.jpg', description: 'Un appartement moderne à Ezzahra.' },
    { id: 3, name: 'El Arij', address: 'Rades', status: 'En Construction', image: '../../assets/images/R3.jpg', description: 'Projet en développement à Rades.' },
    {
      id: 4,
      name: 'El Anber',
      address: 'inconnu',
      image: '../../assets/images/R4.jpg',
      status: 'En Construction',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
