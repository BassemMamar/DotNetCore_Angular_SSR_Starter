import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { CaseInsensitiveMatcher } from './core/base/url-case-insensitive/case-insensitive-matcher';

// region routes path Matchers
export function ManagementMatch() {
    return CaseInsensitiveMatcher('Management').apply(this, arguments);
}
export function InvestigationMatch() {
    return CaseInsensitiveMatcher('Investigation').apply(this, arguments);
}
// endregion

const routes: Routes = [

    {
        matcher: ManagementMatch,
        loadChildren: './feature-modules/management/management.module#ManagementModule',
        data: { preload: false }
    },
    {
        matcher: InvestigationMatch,
        loadChildren: './feature-modules/investigation/investigation.module#InvestigationModule',
        data: { preload: false }
    },

    { path: '', redirectTo: '/home', pathMatch: 'full' },

    /* Wildcard Routes ,should be the last route configuration */
    { path: '**', component: PageNotFoundComponent }
];
// const routes: Routes = [
//     {
//         path: '',
//         redirectTo: 'home',
//         pathMatch: 'full'
//     },
//     {
//         path: 'home',
//         component: HomeComponent,

//         // *** SEO Magic ***
//         // We're using "data" in our Routes to pass in our <title> <meta> <link> tag information
//         // Note: This is only happening for ROOT level Routes, you'd have to add some additional logic if you wanted this for Child level routing
//         // When you change Routes it will automatically append these to your document for you on the Server-side
//         //  - check out app.component.ts to see how it's doing this
//         data: {
//             title: 'Homepage',
//             meta: [
//                 {
//                     name: 'description',
//                     content: 'This is an example Description Meta tag!'
//                 }
//             ],
//             links: [
//                 { rel: 'canonical', href: 'http://blogs.example.com/blah/nice' },
//                 {
//                     rel: 'alternate',
//                     hreflang: 'es',
//                     href: 'http://es.example.com/'
//                 }
//             ]
//         }
//     },
//     {
//         path: 'counter',
//         component: CounterComponent,
//         data: {
//             title: 'Counter',
//             meta: [
//                 {
//                     name: 'description',
//                     content: 'This is an Counter page Description!'
//                 }
//             ],
//             links: [
//                 {
//                     rel: 'canonical',
//                     href: 'http://blogs.example.com/counter/something'
//                 },
//                 {
//                     rel: 'alternate',
//                     hreflang: 'es',
//                     href: 'http://es.example.com/counter'
//                 }
//             ]
//         }
//     },
//     {
//         path: 'users',
//         component: UsersComponent,
//         data: {
//             title: 'Users REST example',
//             meta: [
//                 {
//                     name: 'description',
//                     content: 'This is User REST API example page Description!'
//                 }
//             ],
//             links: [
//                 {
//                     rel: 'canonical',
//                     href: 'http://blogs.example.com/chat/something'
//                 },
//                 {
//                     rel: 'alternate',
//                     hreflang: 'es',
//                     href: 'http://es.example.com/users'
//                 }
//             ]
//         }
//     },
//     {
//         path: 'ngx-bootstrap',
//         component: NgxBootstrapComponent,
//         data: {
//             title: 'Ngx-bootstrap demo!!',
//             meta: [
//                 {
//                     name: 'description',
//                     content: 'This is an Demo Bootstrap page Description!'
//                 }
//             ],
//             links: [
//                 {
//                     rel: 'canonical',
//                     href: 'http://blogs.example.com/bootstrap/something'
//                 },
//                 {
//                     rel: 'alternate',
//                     hreflang: 'es',
//                     href: 'http://es.example.com/bootstrap-demo'
//                 }
//             ]
//         }
//     },

//     {
//         path: 'lazy',
//         loadChildren: './containers/lazy/lazy.module#LazyModule'
//     },

//     {
//         path: '**',
//         component: NotFoundComponent,
//         data: {
//             title: '404 - Not found',
//             meta: [{ name: 'description', content: '404 - Error' }],
//             links: [
//                 {
//                     rel: 'canonical',
//                     href: 'http://blogs.example.com/bootstrap/something'
//                 },
//                 {
//                     rel: 'alternate',
//                     hreflang: 'es',
//                     href: 'http://es.example.com/bootstrap-demo'
//                 }
//             ]
//         }
//     }
// ];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        // Router options
        useHash: false,
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules, // SelectivePreloadingStrategy
        initialNavigation: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingComponents = [];