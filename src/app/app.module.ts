import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ManagementComponent } from './management/management.component';
import { ManagementDetailsCardsComponent } from './management-details-cards/management-details-cards.component';
import { AsideUserdetailComponent } from './aside-userdetail/aside-userdetail.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarButtonsFilterComponent } from './toolbar-buttons-filter/toolbar-buttons-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HamburgerComponent,
    UserprofileComponent,
    ManagementComponent,
    ManagementDetailsCardsComponent,
    AsideUserdetailComponent,
    AsideMenuComponent,
    ToolbarComponent,
    ToolbarButtonsFilterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
