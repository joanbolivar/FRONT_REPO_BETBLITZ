import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [FooterComponent]
})
export class DashboardComponent{

}
