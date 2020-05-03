// This import is main import for module
import {NgModule} from '@angular/core';
// To display content on the browser
import {BrowserModule} from '@angular/platform-browser';

// Main component
import { AppComponent } from './app.component';
// For Forms Element
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './Footer/Footer.component';
import { HeaderComponent } from './Header/Header.component';
import { ProductComponent } from './product/product.component';
import { MyUpperPipe } from './product/myupper.pipe';
import { MyDiscount } from './product/mydiscount.pipe';
import { ProductSearchPipe } from './product/productSearch.pipe';
import { StarComponent } from './shared/star.component';


// Decorater(matadata)
@NgModule({
    // All module will declare her
    imports: [
        BrowserModule,
        FormsModule
    ],

    // All component and pipe
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        ProductComponent,
        MyUpperPipe,
        MyDiscount,
        ProductSearchPipe,
        StarComponent
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
