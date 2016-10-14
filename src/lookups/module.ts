import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NglIconsModule} from '../icons/module';
import {NglPillsModule} from '../pills/module';
import {NglMenusModule} from '../menus/module';
import {NglInternalOutletModule} from '../util/outlet.module';

import {NglLookup} from './lookup';
import {NglLookupItemTemplate, NglLookupLabelTemplate} from './item';
import {NglLookupScopeItem} from './scope-item';

import {NglInternalLookupScope} from './scope';

const NGL_LOOKUP_DIRECTIVES = [
  NglLookup,
  NglLookupItemTemplate,
  NglLookupScopeItem,
  NglLookupLabelTemplate,
];

@NgModule({
  declarations: [NGL_LOOKUP_DIRECTIVES, NglInternalLookupScope],
  exports: [NGL_LOOKUP_DIRECTIVES],
  imports: [CommonModule, FormsModule, NglIconsModule, NglPillsModule, NglMenusModule, NglInternalOutletModule],
})
export class NglLookupsModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: NglLookupsModule, providers: []};
  }
}
