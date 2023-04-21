import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from '@app/_services/account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  public isUserAuthenticated: boolean = false;
  private authListenerSub!: Subscription;

  constructor (
    private accountService: AccountService,
  ) { }

  ngOnInit() {
    this.authListenerSub = this.accountService.getAuthStatusListener()
    .subscribe( isAuthenticated => {
      this.isUserAuthenticated = isAuthenticated;
    });
  }

  public onLogout(): void {
    this.accountService.logout();
  }

  ngOnDestroy(): void {
    this.authListenerSub.unsubscribe();
  }

}
