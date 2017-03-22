import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[nglBreadcrumb]',
})
export class NglProgressItem {

  @Input() assistiveText: string;

  constructor(public templateRef: TemplateRef<any>) {}
}
