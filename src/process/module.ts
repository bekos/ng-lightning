import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NglWizard} from './wizard';

const DIRECTIVES = [
  NglWizard,
];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
  imports: [CommonModule],
})
export class NglProcessModule {}
