import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-details-cards',
  templateUrl: './management-details-cards.component.html',
  styleUrls: ['./management-details-cards.component.scss'],
})
export class ManagementDetailsCardsComponent {
  manageDetails = [
    { label: 'Vencidas', days: 5 },
    { label: 'Vence próximos 7 días', days: 11 },
    { label: 'Vence próximos 30 días', days: 22 },
  ];
}
