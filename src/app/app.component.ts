import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'highchart-angular';
  chartData=[
    {
        "day-of-week": "Sunday",
        "item-count": 664,
        "total-event-count": 149,
    },
    {
        "day-of-week": "Monday",
        "item-count": 67,
        "total-event-count": 175,
    },
    {
        "day-of-week": "Tuesday",
        "item-count": 803,
        "total-event-count": 938,
    },
    {
        "day-of-week": "Wednesday",
        "item-count": 860,
        "total-event-count": 38,
    },
    {
        "day-of-week": "Thursday",
        "item-count": 283,
        "total-event-count": 835,
    },
    {
        "day-of-week": "Friday",
        "item-count": 485,
        "total-event-count": 683,
    },
    {
        "day-of-week": "Saturday",
        "item-count": 853,
        "total-event-count": 316,
    }
  ]
}
