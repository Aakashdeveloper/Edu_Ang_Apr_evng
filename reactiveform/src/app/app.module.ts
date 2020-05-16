// This import is main import for module
import {NgModule} from '@angular/core';
// To display content on the browser
import {BrowserModule} from '@angular/platform-browser';
// For Http Call
import { HttpClientModule } from '@angular/common/http';

// Main component
import { AppComponent } from './app.component';
// For Forms Element
import { ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './Footer/Footer.component';
import { HeaderComponent } from './Header/Header.component';
import { AppRoutingModule } from './app-routing.module';
import { SurveyComponent } from './survey/survey.component';

// Decorater(matadata)
@NgModule({
    // All module will declare her
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],

    // All component and pipe
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        SurveyComponent
    ],

    // Only and only first/main coomponent
    bootstrap: [
        AppComponent
    ],

    // All service
    providers: []
})



export class AppModule {

}
