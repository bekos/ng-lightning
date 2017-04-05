import {Directive, Input, ContentChild} from '@angular/core';
import {NglDatatableCell} from './cell';
import {NglDatatableHeadingTemplate} from './heading';
import {toBoolean} from '../util/util';

@Directive({
  selector: 'ngl-datatable-column',
})
export class NglDatatableColumn {
  @Input() heading: string;
  @Input() key: string;
  @Input() headClass: any;
  @Input() cellClass: any;
  @ContentChild(NglDatatableCell) cellTpl: NglDatatableCell;
  @ContentChild(NglDatatableHeadingTemplate) headingTpl: NglDatatableHeadingTemplate;

  @Input() set sortable(sortable: string | boolean) {
    this._sortable = toBoolean(sortable);
  }
  get sortable() {
    return this._sortable;
  }

  @Input() set resizable(resizable: string | boolean) {
    this._resizable = toBoolean(resizable);
  }
  get resizable() {
    return this._resizable;
  }

  @Input() resizableMin: number = 50;
  @Input() resizableMax: number = 1000;

  private _sortable = false;
  private _resizable = false;
};
