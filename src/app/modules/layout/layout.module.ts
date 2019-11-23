import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';

const components = [HeaderComponent, LayoutComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
})
export class LayoutModule { }
