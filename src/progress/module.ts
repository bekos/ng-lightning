import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NglProgress} from './progress';
import {NglProgressItem} from './progress-item';

const DIRECTIVES = [
  NglProgress,
  NglProgressItem,
];

@NgModule({
  declarations: [DIRECTIVES],
  exports: [DIRECTIVES],
  imports: [CommonModule],
})
export class NglProgressModule {}
