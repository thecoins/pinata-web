/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { ExchangeDetailComponent } from './exchange-detail/exchange-detail.component';


export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'exchange', component: ExchangeComponent },
    { path: 'exchange/:id', component: ExchangeDetailComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
