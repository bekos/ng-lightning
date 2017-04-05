import {Directive, Input, ElementRef, Renderer, HostListener} from '@angular/core';
import {NglInternalDatatableHeadCell} from './_head';

@Directive({
  selector: '[nglDatatableResizable]',
})
export class NglDatatableResizable {

  @Input() min: number = 0;
  @Input() max: number;

  private globalMouseMoveUns: Function;
  private globalMouseUpUns: Function;

  constructor(private element: ElementRef, private renderer: Renderer, private th: NglInternalDatatableHeadCell) {
    this.renderer.setElementClass(this.element.nativeElement, 'slds-is-resizable', true);
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(md: MouseEvent) {
    md.preventDefault();

    const width = this.th.getWidth();
    const startX = md.clientX;

    this.globalMouseMoveUns = this.renderer.listenGlobal('document', 'mousemove', (mm: MouseEvent) => {
      mm.preventDefault();
      const newWidth = Math.max(this.min, width + mm.clientX - startX);
      this.updateWidth(this.max ? Math.min(newWidth, this.max) : newWidth);
    });
    this.globalMouseUpUns = this.renderer.listenGlobal('document', 'mouseup', () => this.unsubscribeGlobal());
  }

  ngOnDestroy() {
    this.unsubscribeGlobal();
  }

  private updateWidth(width: number) {
    this.th.setWidth(width);
  }

  private unsubscribeGlobal() {
    if (this.globalMouseMoveUns) {
      this.globalMouseMoveUns();
      this.globalMouseMoveUns = null;
    }
    if (this.globalMouseUpUns) {
      this.globalMouseUpUns();
      this.globalMouseUpUns = null;
    }
  }

};
