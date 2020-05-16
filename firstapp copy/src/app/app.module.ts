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
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './orders/order.module';

// Decorater(matadata)
@NgModule({
    // All module will declare her
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        OrderModule,
        ProductModule
    ],

    // All component and pipe
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        NotfoundComponent
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
