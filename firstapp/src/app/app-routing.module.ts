import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailsComponent } from './product/product-details.component';


const routes: Routes = [
    {path: 'restaurants', component: ProductComponent},
    {path: 'restaurants/:id', component: ProductDetailsComponent},
    {path: 'orders', component: OrdersComponent },
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: NotfoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    providers: [],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}

