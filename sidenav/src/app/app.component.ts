import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {SideNavComponent} from "./layout/side-nav/side-nav.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import { SidenavService } from './sidenav.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, SideNavComponent, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') public sidenav!: MatSidenav;
  sideNavService = inject(SidenavService);
  title = 'sidenav';


ngAfterViewInit() {
  this.sideNavService.setSideNav(this.sidenav);
}

}
