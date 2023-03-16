import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ]
})
export class ShareModule { }
