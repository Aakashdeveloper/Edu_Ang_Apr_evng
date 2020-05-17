// This import is main import for module
import {NgModule} from '@angular/core';
// To display content on the browser
import {BrowserModule} from '@angular/platform-browser';
// For Http Call
import { HttpClientModule } from '@angular/common/http';

// Main component
import { AppComponent } from './app.component';
// For Forms Element
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './Footer/Footer.component';
import { HeaderComponent } from './Header/Header.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register-form/register.component';
import { LoginComponent } from './login-form/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { RegsiterService } from './register-form/register.service';
import { LoginService } from './login-form/login.service';
import { ProfleService } from './profile/profile.service';

// Decorater(matadata)
@NgModule({
    // All module will declare her
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],

    // All component and pipe
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        RegisterComponent,
        LoginComponent,
        ProfileComponent,
        AdminComponent
    ],

    // Only and only first/main coomponent
    bootstrap: [
        AppComponent
    ],

    // All service
    providers: [
        RegsiterService,
        LoginService,
        ProfleService
    ]
})



export class AppModule {

}
