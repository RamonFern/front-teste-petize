import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.css']
})
export class CabComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  adicionar = () => {
    this.router.navigate(['adicionar'])
  }

}
