import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
private sidenav!: MatSidenav;

public setSideNav(sidenav: MatSidenav) {
  this.sidenav = sidenav;
}

public toggle() {
  return this.sidenav.toggle();
}

}
