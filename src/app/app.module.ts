import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { NZ_I18N } from "ng-zorro-antd/i18n";
import { en_US } from "ng-zorro-antd/i18n";
import { DATE_PIPE_DEFAULT_OPTIONS, registerLocaleData } from "@angular/common";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyNgZorroAntdModule } from "@ngx-formly/ng-zorro-antd";
import { FormlyModule } from "@ngx-formly/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormlyForRoot } from "./formly/formly-main.module";
import en from "@angular/common/locales/en";
import { NgxMaskModule } from "ngx-mask";
import { HttpClientModule } from "@angular/common/http";

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormlyNgZorroAntdModule,
    NgxMaskModule.forRoot({}),
    FormlyModule.forRoot(FormlyForRoot),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { timezone: "-4" } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
