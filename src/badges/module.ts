import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NglBadge} from './badge';

@NgModule({
  declarations: [NglBadge],
  exports: [NglBadge],
  imports: [CommonModule],
})
export class NglBadgesModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: NglBadgesModule, providers: []};
  }
}
