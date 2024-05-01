import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from "../../../shared/components/side-bar/side-bar.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-admin-layout',
    standalone: true,
    templateUrl: './admin-layout.component.html',
    styleUrl: './admin-layout.component.css',
    imports: [RouterOutlet, SideBarComponent, FooterComponent]
})
export class AdminLayoutComponent {

}
