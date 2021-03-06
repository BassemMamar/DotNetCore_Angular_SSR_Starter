import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';
import { TransferHttpCacheModule } from '@nguniversal/common';
// i18n support
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AccordionModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { LinkService } from './shared/link.service';
import { UserService } from './shared/user.service';


/* Core Module Imports */
import { CoreModule } from './core/core.module';

/* Dashboard Module Imports */
import { DashboardModule } from './dashboard/dashboard.module';

/* Shared Module Imports */
import { SharedModule } from './shared/shared.module';

/* App Imports */
import { AppRoutingModule, appRoutingComponents } from './app-routing.module';

export function createTranslateLoader(http: HttpClient, baseHref) {
  // Temporary Azure hack
  if (baseHref === null && typeof window !== 'undefined') {
    baseHref = window.location.origin;
  }
  // i18n files are in `wwwroot/assets/`
  return new TranslateHttpLoader(http, `${baseHref}/assets/i18n/`, '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule.forRoot(),
    CoreModule,
    DashboardModule,
    // BrowserModule.withServerTransition({
    //   appId: 'my-app-id' // make sure this matches with your Server NgModule
    // }), // moved to core module
    TransferHttpCacheModule,
    BrowserTransferStateModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(), // You could also split this up if you don't want the Entire Module imported

    // i18n support
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient, [ORIGIN_URL]]
      }
    }),
    // App Routing
    AppRoutingModule,
 
  ],
  providers: [LinkService, UserService, TranslateModule],
  bootstrap: [AppComponent]
})
export class AppModuleShared {}
