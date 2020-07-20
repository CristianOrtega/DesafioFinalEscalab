import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authSvc: AuthService) { 

  }

  ngOnInit() {

  }

  onLogout(): void {
    this.authSvc.logout();
  }

}