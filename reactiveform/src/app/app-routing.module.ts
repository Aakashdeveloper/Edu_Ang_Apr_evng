import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';


const routes: Routes = [
    {path: 'home', component: SurveyComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
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

