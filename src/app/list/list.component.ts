import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  alunos = [
    {
      nome : 'Leon',
      nota: 10
    },
    {
      nome : 'Leones',
      nota: 8
    },
    {
      nome : 'Leonel',
      nota: 5
    },
    {
      nome : 'Leonzera',
      nota: 9
    },
    {
      nome : 'Leonaldo',
      nota: 11
    },
    {
      nome : 'Leonon',
      nota: -1
    },
    {
      nome : 'Leonidas',
      nota: -3
    },
    {
      nome : 'Leoncio',
      nota: -7
    },
    {
      nome : 'LeonLeon',
      nota: 1
    },
    {
      nome : 'Leonto',
      nota: 6
    }, 
  ]
}
