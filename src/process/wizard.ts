import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'ngl-wizard',
  templateUrl: './wizard.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.slds-pill]': 'wizard',
    '[attr.role]': 'navigation',
  },
})
export class NglWizard {

}
