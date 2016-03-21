import {
    Component, Input, Output, EventEmitter, ElementRef, Renderer, HostBinding,
} from 'angular2/core';

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

  constructor(private element: ElementRef, private renderer: Renderer) {
    renderer.setElementClass(element.nativeElement, 'slds-section', true);
  }

  toggle() {
    this.openChange.emit(!this.open);
  }
}
