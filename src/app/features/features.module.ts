import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, provideRouter } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { FeaturesComponent } from './features.component';
import { FeatureRoutes } from './features.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule.forChild(FeatureRoutes),
    SharedModule
  ],
  exports: [
    FeaturesComponent
  ],
  declarations: [
    FeaturesComponent
  ],
  providers: [
    provideRouter(FeatureRoutes)
  ]
})
export class FeaturesModule { }