import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { Card } from '../../shared/interfaces/card.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-card-kpi',
  imports: [NgClass, FontAwesomeModule],
  templateUrl: './card-kpi.component.html',
  styleUrl: './card-kpi.component.scss'
})
export class CardKpiComponent {

  data = input<Card>()

}
