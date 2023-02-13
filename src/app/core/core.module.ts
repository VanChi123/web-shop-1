import {TranslateModule} from "@ngx-translate/core";
import {NgModule, Optional, SkipSelf} from "@angular/core";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,

    TranslateModule.forRoot(),  // thiếu cái này thì báo No providers for translate service

  ],
  providers: [
  ],
  exports: [
    TranslateModule,
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
      parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
