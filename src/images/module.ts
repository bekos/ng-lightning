import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NglAvatar} from './avatar';

@NgModule({
  declarations: [NglAvatar],
  exports: [NglAvatar],
  imports: [CommonModule],
})
export class NglImagesModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: NglImagesModule, providers: []};
  }
}
