import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  user: User;
  userSubscription: Subscription;
  title = 'fullecommerce';
  constructor(private authService: AuthService, private router: Router){
    this.userSubscription = this.authService.user.subscribe(user => (
      this.user = user)
      );
  }
  ngOnDestroy(): void {
    if (this.userSubscription){
      this.userSubscription.unsubscribe();
    }
  }
  logout(): void{
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
