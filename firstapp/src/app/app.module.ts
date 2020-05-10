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
import { ProductComponent } from './product/product.component';
import { MyUpperPipe } from './product/myupper.pipe';
import { MyDiscount } from './product/mydiscount.pipe';
import { ProductSearchPipe } from './product/productSearch.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './product/product.service';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailsComponent } from './product/product-details.component';
import { OrderService } from './orders/order.service';

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
        ProductComponent,
        MyUpperPipe,
        MyDiscount,
        ProductSearchPipe,
        StarComponent,
        HomeComponent,
        OrdersComponent,
        NotfoundComponent,
        ProductDetailsComponent
    ],

    // Only and only first/main coomponent
    bootstrap: [
        AppComponent
    ],

    // All service
    providers: [
        ProductService,
        OrderService
    ]
})



export class AppModule {

}
