import {NgModule} from '@angular/core';
import {MatInputModule, MatTableModule, MatToolbarModule, MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [ MatToolbarModule, MatInputModule, MatTableModule, MatCheckboxModule, MatButtonModule],
  exports: [ MatToolbarModule, MatInputModule, MatTableModule, MatCheckboxModule, MatButtonModule],
})
export class MaterialModule { }