import { NgModule} from '@angular/core';
import { ProductComponent } from './product.component';
import { MyDiscount } from './mydiscount.pipe';
import { MyUpperPipe } from './myupper.pipe';
import { ProductSearchPipe } from './productSearch.pipe';
import { ProductDetailsComponent } from './product-details.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        ProductComponent,
        MyUpperPipe,
        MyDiscount,
        ProductSearchPipe,
        ProductDetailsComponent
    ],
    providers: [
        ProductService
    ]
})


export class ProductModule {

}
