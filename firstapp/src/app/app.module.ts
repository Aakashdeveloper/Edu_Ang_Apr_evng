// This import is main import for module
import {NgModule} from '@angular/core';
// To display content on the browser
import {BrowserModule} from '@angular/platform-browser';


// Main component
import { AppComponent } from './app.component';

import { FooterComponent } from './Footer/Footer.component';
import { HeaderComponent } from './Header/Header.component';
import { ProductComponent } from './product/product.component';

// Decorater(matadata)
@NgModule({
    // All module will declare her
    imports: [
        BrowserModule
    ],

    // All component and pipe
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        ProductComponent
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
