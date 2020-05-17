import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register-form/register.component';
import { LoginComponent } from './login-form/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent },
    {path: 'admin', component: AdminComponent},
    {path: '', redirectTo: 'register', pathMatch: 'full'},
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

