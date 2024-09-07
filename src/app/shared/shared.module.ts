import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { TranslateGenderPipe } from './pipes/translate-gender.pipe';
import { TranslateStatusPipe } from './pipes/translate-status.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    LoadingComponent,
    TranslateGenderPipe,
    TranslateStatusPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    LoadingComponent,
    TranslateGenderPipe,
    TranslateStatusPipe
  ]
})
export class SharedModule { }
