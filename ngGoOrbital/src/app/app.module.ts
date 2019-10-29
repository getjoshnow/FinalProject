import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from './services/message.service';
import { CompaniesService } from './services/companies.service';
import { TripService } from './services/trip.service';
// import { ProviderService } from './services/provider.service';

import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TravelerService } from './services/traveler.service';
import { UserListComponent } from './components/user-list/user-list.component';
import { TravelerListComponent } from './components/traveler-list/traveler-list.component';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';
import { CompaniesComponent } from './components/companies/companies.component';

import { TravelerComponent } from './components/traveler/traveler.component';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FormsModule } from '@angular/forms';
import { HttpInterceptorService } from './services/http-interceptor.service';

import { FooterComponent } from './template/footer/footer.component';
import { ShowAllComponent } from './components/show-all/show-all.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatLineModule, MatRippleModule, MatOption, MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Test1Component } from './components/show-all/test1/test1.component';
import { MatSelectModule, MatCheckboxModule, MatCardModule, MatDialogModule, MatAccordion, MatExpansionModule } from '@angular/material';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule }
from '@angular/material';
import { Table1Component } from './components/show-all/table1/table1.component';
import { ExtensionsComponent } from './components/show-all/extensions/extensions.component';
import { DisclosuresComponent } from './components/show-all/disclosures/disclosures.component';



@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    DetailsComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    SearchComponent,
    ShowAllComponent,
    TripListComponent,
    TravelerListComponent,
    TravelerComponent,
    UserListComponent,
    SidenavComponent,
    Test1Component,
    Table1Component,
    ExtensionsComponent,
    DisclosuresComponent,
  ],
  // tslint:disable-next-line:max-line-length
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, NgbModule, BrowserAnimationsModule,   MatListModule, MatIconModule,

    MatLineModule,
    MatButtonModule, MatSidenavModule, MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatRippleModule,
    MatExpansionModule,
    MatCardModule,
    MatTableModule,
  MatCheckboxModule]
  ,

  providers: [
    TravelerService,
    UserService,
    CompaniesService,
    TripService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
