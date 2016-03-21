import {
    Component, Input, Output, EventEmitter,
} from 'angular2/core';

@Component({
  selector: 'ngl-accordion',
  host: {
    'role': 'tablist',
    '[attr.aria-multiselectable]': '!closeOthers',
  },
  template: `<ng-content></ng-content>`,
})
export class NglAccordion {

    @Input() closeOthers = true;

    @Output() closeEvent = new EventEmitter(false);

    toggle(section: any) {
      section.open = !section.open;
      if (!this.closeOthers || !section.open) return;
      this.closeEvent.emit(section);
    }

}
