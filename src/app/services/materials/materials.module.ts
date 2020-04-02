import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule
  ],
  exports: [
    MatExpansionModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule
  ]
})
export class MaterialsModule { }
