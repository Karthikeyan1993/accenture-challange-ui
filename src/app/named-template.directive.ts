import { Directive, Attribute, Inject, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[pTemplate]'
})
export class NamedTemplateDirective {

  constructor(@Attribute('pTemplate') public pTemplate, @Inject(TemplateRef) public template: TemplateRef<any>) { }

}