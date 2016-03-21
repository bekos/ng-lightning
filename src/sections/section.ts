import {Component, Input, Output, EventEmitter, ElementRef, Renderer, HostBinding, Optional} from 'angular2/core';
import {NglAccordion} from './accordion';

@Component({
  selector: 'ngl-section',
  templateUrl: './section.jade',
})
export class NglSection {

  @Input() title: string;

  @Input() open = false;
  @Output() private openChange = new EventEmitter<boolean>(false);

  @HostBinding('class.slds-is-open') get isOpen() {
    return this.open;
  }

  constructor(@Optional() private accordion: NglAccordion, private element: ElementRef, private renderer: Renderer) {
    renderer.setElementClass(element.nativeElement, 'slds-section', true);
  }

  ngOnInit() {
    if (!this.accordion) return;
    this.accordion.closeEvent.filter((section: NglSection) => section !== this).subscribe(() => this.open = false);
  }

  toggle() {
    if (this.accordion) {
      this.accordion.toggle(this);
    } else {
      this.openChange.emit(!this.open);
    }
  }
}
