import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SidenavService } from 'src/app/sidenav.service';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  sideNavService = inject(SidenavService);

  sidenavToggle() {
    this.sideNavService.toggle();
  }
}
