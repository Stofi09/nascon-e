import { Route } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Route[] = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', component: HomeComponent, title : "Home Page" },
        // Add more routes here
      ]
    }
  ];
