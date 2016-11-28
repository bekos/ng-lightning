import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {RouterModule} from '@angular/router';
import {routes} from './components.routing';

import {NglModule} from 'ng-lightning/ng-lightning';

import {DemoComponent} from './demo';
import {PageComponent} from './page';

import {Plunker} from './playground/plunker';

import {DemoBadges} from './demo/badges/badges';
import {DemoBreadcrumbs} from './demo/breadcrumbs/breadcrumbs';
import {DemoButtons} from './demo/buttons/buttons';
import {DemoDatatables} from './demo/datatables/datatables';
import {DemoDatepickers} from './demo/datepickers/datepickers';
import {DemoForms} from './demo/forms/forms';
import {DemoIcons} from './demo/icons/icons';
import {DemoAvatars} from './demo/images/images';
import {DemoLookups} from './demo/lookups/lookups';
import {DemoMenus} from './demo/menus/menus';
import {DemoModals} from './demo/modals/modals';
import {DemoNotifications} from './demo/notifications/notifications';
import {DemoPaginations} from './demo/paginations/paginations';
import {DemoPick} from './demo/pick/pick';
import {DemoPicklist} from './demo/picklist/picklist';
import {DemoPills} from './demo/pills/pills';
import {DemoPopovers} from './demo/popovers/popovers';
import {DemoProcess} from './demo/process/process';
import {DemoRatings} from './demo/ratings/ratings';
import {DemoSections} from './demo/sections/sections';
import {DemoSpinners} from './demo/spinners/spinners';
import {DemoTabs} from './demo/tabs/tabs';

const DEMO_COMPONENTS = [
  DemoComponent, Plunker, PageComponent,
  DemoBadges, DemoBreadcrumbs, DemoButtons, DemoDatatables, DemoDatepickers,
  DemoForms, DemoIcons, DemoAvatars, DemoLookups, DemoMenus,
  DemoModals, DemoNotifications, DemoPaginations, DemoPick, DemoPicklist,
  DemoPills, DemoPopovers, DemoProcess, DemoRatings, DemoSections,
  DemoSpinners, DemoTabs,
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    NglModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ...DEMO_COMPONENTS,
  ],
  exports: [
    ...DEMO_COMPONENTS,
  ],
})
export class NglDemoComponentsModule {}
