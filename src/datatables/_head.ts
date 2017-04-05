import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding, TemplateRef, ElementRef, Renderer, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'th[ngl-internal-datatatable-head]',
  templateUrl: './_head.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'scope': 'col',
    '[class.slds-is-sorted--asc]': `sortOrder === 'asc'`,
    '[class.slds-is-sorted--desc]': `sortOrder === 'desc'`,
    '[class.slds-is-sorted]': `!!sortOrder`,
  },
})
export class NglInternalDatatableHeadCell {

  @HostBinding('attr.title')
  @Input() heading: string;
  @Input() headingTpl: TemplateRef<any>;

  get header() {
    return this.headingTpl || this.heading;
  }

  @HostBinding('class.slds-is-sortable')
  @Input() sortable: boolean;

  @HostBinding('class.slds-is-resizable')
  @Input() resizable: boolean = false;
  @Input() resizableMin: number;
  @Input() resizableMax: number;

  @Input() sortOrder: 'asc' | 'desc';

  @HostBinding('attr.aria-sort')
  get ariaSort() {
    return this.sortOrder ? `${this.sortOrder}ending` : null;
  }

  @Output() onSort = new EventEmitter();

  width: number;

  constructor(private element: ElementRef, private renderer: Renderer, private detector: ChangeDetectorRef) {}

  sortChange() {
    this.onSort.emit(this.sortOrder === 'desc' ? 'asc' : 'desc');
  }

  getWidth() {
    return this.element.nativeElement.clientWidth;
  }

  setWidth(width: number) {
    this.renderer.setElementStyle(this.element.nativeElement, 'width', `${width}px`);
    this.width = width;
    this.detector.markForCheck();
  }
}
