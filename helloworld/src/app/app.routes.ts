import { Routes } from '@angular/router';
import test from 'node:test';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'test',component:TestComponent
    },
    {
        path:'login',component:LoginComponent
    }
];
