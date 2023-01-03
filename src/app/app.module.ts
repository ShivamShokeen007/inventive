import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './authentication/auth.interceptor';
import { PaginationComponent } from './pagination/pagination.component';
import { WorklistComponent } from './worklist/worklist.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { KeyValuePipe } from './key-value.pipe';

import { LazyElementsModule } from '@angular-extensions/elements';
import { FilterSearchComponent } from './filter-search/filter-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WorklistComponent,
    PaginationComponent,
    SidemenuComponent,
    HeaderComponent,
    KeyValuePipe,
    FilterSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LazyElementsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {}

  // ngDoBootstrap() {
  //   const work_element = createCustomElement(WorklistComponent, {
  //     injector: this.injector,
  //   });
  //   const sidemenu_element = createCustomElement(SidemenuComponent, {
  //     injector: this.injector,
  //   });
  //   const header_element = createCustomElement(HeaderComponent, {
  //     injector: this.injector,
  //   });

  //   customElements.define('worklist-element', work_element);
  //   customElements.define('sidemenu_element', sidemenu_element);
  //   customElements.define('header_element', header_element);
  // }
}
