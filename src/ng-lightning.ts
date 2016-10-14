import {NgModule, ModuleWithProviders} from '@angular/core';

import {NglBadgesModule} from './badges/module';
import {NglBreadcrumbsModule} from './breadcrumbs/module';
import {NglButtonsModule} from './buttons/module';
import {NglDatatablesModule} from './datatables/module';
import {NglDatepickersModule} from './datepickers/module';
import {NglFormsModule} from './forms/module';
import {NglIconsModule} from './icons/module';
import {NglImagesModule} from './images/module';
import {NglLookupsModule} from './lookups/module';
import {NglMenusModule} from './menus/module';
import {NglModalsModule} from './modals/module';
import {NglNotificationsModule} from './notifications/module';
import {NglPaginationsModule} from './paginations/module';
import {NglPickModule} from './pick/module';
import {NglPicklistModule} from './picklist/module';
import {NglPillsModule} from './pills/module';
import {NglPopoversModule} from './popovers/module';
import {NglRatingsModule} from './ratings/module';
import {NglSectionsModule} from './sections/module';
import {NglSpinnersModule} from './spinners/module';
import {NglTabsModule} from './tabs/module';
import {INglConfig} from './config/config.interface';
import {NglConfig, NGL_CONFIG} from './config/config';

export {NglBadgesModule} from './badges/module';
export {NglBreadcrumbsModule} from './breadcrumbs/module';
export {NglButtonsModule} from './buttons/module';
export {NglDatatablesModule} from './datatables/module';
export {NglDatepickersModule} from './datepickers/module';
export {NglFormsModule} from './forms/module';
export {NglIconsModule} from './icons/module';
export {NglImagesModule} from './images/module';
export {NglLookupsModule} from './lookups/module';
export {NglMenusModule} from './menus/module';
export {NglModalsModule} from './modals/module';
export {NglNotificationsModule} from './notifications/module';
export {NglPaginationsModule} from './paginations/module';
export {NglPickModule} from './pick/module';
export {NglPicklistModule} from './picklist/module';
export {NglPillsModule} from './pills/module';
export {NglPopoversModule} from './popovers/module';
export {NglRatingsModule} from './ratings/module';
export {NglSectionsModule} from './sections/module';
export {NglSpinnersModule} from './spinners/module';
export {NglTabsModule} from './tabs/module';
export {INglDatatableSort, INglDatatableRowClick} from './datatables/module';
export {INglConfig} from './config/config.interface';
export {NglConfig} from './config/config';

const MODULES = [
  NglBadgesModule,
  NglBreadcrumbsModule,
  NglButtonsModule,
  NglDatatablesModule,
  NglDatepickersModule,
  NglFormsModule,
  NglIconsModule,
  NglImagesModule,
  NglLookupsModule,
  NglMenusModule,
  NglModalsModule,
  NglNotificationsModule,
  NglPaginationsModule,
  NglPickModule,
  NglPicklistModule,
  NglPillsModule,
  NglPopoversModule,
  NglRatingsModule,
  NglSectionsModule,
  NglSpinnersModule,
  NglTabsModule,
];

@NgModule({
  imports: [
    NglBadgesModule.forRoot(),
    NglBreadcrumbsModule.forRoot(),
    NglButtonsModule.forRoot(),
    NglDatatablesModule.forRoot(),
    NglDatepickersModule.forRoot(),
    NglFormsModule.forRoot(),
    NglIconsModule.forRoot(),
    NglImagesModule.forRoot(),
    NglLookupsModule.forRoot(),
    NglMenusModule.forRoot(),
    NglModalsModule.forRoot(),
    NglNotificationsModule.forRoot(),
    NglPaginationsModule.forRoot(),
    NglPickModule.forRoot(),
    NglPicklistModule.forRoot(),
    NglPillsModule.forRoot(),
    NglPopoversModule.forRoot(),
    NglRatingsModule.forRoot(),
    NglSectionsModule.forRoot(),
    NglSpinnersModule.forRoot(),
    NglTabsModule.forRoot(),
  ],
  exports: MODULES,
})
export class NglModule {
  static forRoot(config: INglConfig = {}): ModuleWithProviders {
    return {
      ngModule: NglModule,
      providers: [
        { provide: NGL_CONFIG, useValue: config },
        NglConfig,
      ],
   };
 }
}
