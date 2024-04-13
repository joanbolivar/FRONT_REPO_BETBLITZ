import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [FooterComponent]
})
export class ContactComponent {

}
