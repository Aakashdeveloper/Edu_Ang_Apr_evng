import {NgModule } from '@angular/core';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        FormsModule,
        AppRoutingModule,
        CommonModule
    ],
    declarations: [
        StarComponent
    ],
    exports: [
        StarComponent,
        FormsModule,
        AppRoutingModule,
        CommonModule
    ]
})

export class SharedModule {

}
