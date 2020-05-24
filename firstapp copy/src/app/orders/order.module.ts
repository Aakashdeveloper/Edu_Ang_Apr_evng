import { NgModule} from '@angular/core';
import { OrdersComponent } from './orders.component';
import { OrderService } from './order.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        OrdersComponent
    ],
    providers: [
        OrderService
    ]
})


export class OrderModule {

}
