import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: 'projects',
    pathMatch: 'full',
    component: ProjectsComponent,
  },
  {
    path: 'blog',
    pathMatch: 'full',
    component: BlogComponent,
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: ContactComponent,
  },
];
