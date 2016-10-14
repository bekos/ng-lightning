import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NglSpinner} from './spinner';

@NgModule({
  declarations: [NglSpinner],
  exports: [NglSpinner],
  imports: [CommonModule],
})
export class NglSpinnersModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: NglSpinnersModule, providers: []};
  }
}
