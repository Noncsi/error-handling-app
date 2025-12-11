import { Routes } from "@angular/router";
import { PricingComponent } from "./app/components/pricing-component/pricing.component";
import { HomeComponent } from "./app/components/home-component/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pricing',
    component: PricingComponent,
  },
];
