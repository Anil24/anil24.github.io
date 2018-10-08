import { NgModule } from '@angular/core';

import {
  MatGridListModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatChipsModule,
  MatExpansionModule
} from '@angular/material';

@NgModule({
  imports: [
    MatGridListModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatExpansionModule
  ],
  exports: [
    MatGridListModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatExpansionModule
  ]
})
export class MaterialModule {}