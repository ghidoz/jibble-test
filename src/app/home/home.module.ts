import { NgModule } from '@angular/core';
import { HomeRoutingModule, routedComponents } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [],
  declarations: [
    routedComponents,
    CollectionComponent
  ]
})
export class HomeModule {
}
