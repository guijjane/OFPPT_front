import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  detail: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  getDetails() {
    this.detail=true
  }
}
