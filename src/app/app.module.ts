import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { CustomersComponent } from './customers/customers.component';
import { EquipesComponent } from './equipes/equipes.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HistoireComponent } from './histoire/histoire.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { PresenceComponent } from './presence/presence.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'clients',
    component: CustomersComponent
  },
  {
    path: 'equipes',
    component: EquipesComponent
  },
  {
    path: 'histoire',
    component: HistoireComponent
  },
  {
    path: 'blog',
    component: NewsComponent
  },
  {
    path: 'presence',
    component: PresenceComponent
  },
  {
    path: 'produits',
    component: ProductComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
 {
   path: 'contact',
   component: ContactComponent
 },
 {
  path: 'home',
  component: AccueilComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ContactComponent,
    CustomersComponent,
    EquipesComponent,
    FooterComponent,
    HeaderComponent,
    HistoireComponent,
    MenuComponent,
    NewsComponent,
    PresenceComponent,
    ProductComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
