import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';

import { AppComponent } from './app.component';
import { NavBarComponent } from "./Shared/nav-bar/nav-bar.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandinPageComponent } from './Components/landin-page/landin-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';
import { ProductCardComponent } from './Shared/product-card/product-card.component';
const routes: Routes = [
                            {path:"", component:LandinPageComponent},
                            {path:"home", component:LandinPageComponent},
                            {path:"products", component:ProductComponent}
                       ];

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        LandinPageComponent,
        ProductComponent,
        ProductCardComponent,
        

    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatChipsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

