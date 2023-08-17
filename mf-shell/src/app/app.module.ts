import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { getManifest } from '@angular-architects/module-federation';

import { AppComponent } from './app.component';
import { CustomManifest } from '../utils/config';
import { buildRoutes } from '../utils/routes';
import { RouterModule } from '@angular/router';

const manifest: CustomManifest = getManifest<CustomManifest>();
const routes = buildRoutes(manifest);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
