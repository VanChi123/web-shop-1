import { NgModule } from '@angular/core';
import { HideStringMaxLenghtPipe } from './pipes/hide-string-max-lenght.pipe';



@NgModule({
  declarations: [
    HideStringMaxLenghtPipe
  ],
  exports: [
    HideStringMaxLenghtPipe,

    CommonModule
  ],
  imports: [
  ]
})
export class ShareModule { }
