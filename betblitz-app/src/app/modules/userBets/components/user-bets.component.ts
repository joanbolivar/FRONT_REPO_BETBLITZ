import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-user-bets',
    standalone: true,
    templateUrl: './user-bets.component.html',
    styleUrl: './user-bets.component.css',
    imports: [FooterComponent]
})
export class UserBetsComponent {

}
