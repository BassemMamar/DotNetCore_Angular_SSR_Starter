import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { CaseInsensitiveMatcher } from '../core/base/url-case-insensitive/case-insensitive-matcher';

export function HomeMatch() {
  return CaseInsensitiveMatcher('Home').apply(this, arguments);
}

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        matcher: HomeMatch,
        component: HomeComponent,
        // *** SEO Magic ***
        // We're using "data" in our Routes to pass in our <title> <meta> <link> tag information
        // Note: This is only happening for ROOT level Routes, you'd have to add some additional logic if you wanted this for Child level routing
        // When you change Routes it will automatically append these to your document for you on the Server-side
        //  - check out app.component.ts to see how it's doing this
        data: {
          title: 'Homepage',
          meta: [
            {
              name: 'description',
              content: 'This is an example Description Meta tag!'
            }
          ],
          links: [
            { rel: 'canonical', href: 'http://blogs.example.com/blah/nice' },
            {
              rel: 'alternate',
              hreflang: 'es',
              href: 'http://es.example.com/'
            }
          ]
        }
      },
      { path: '', pathMatch: 'full', redirectTo: 'Home' },
    ]
  }


  // { path: '', pathMatch: 'full', redirectTo: 'en' }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
