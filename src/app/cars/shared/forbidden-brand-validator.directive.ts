import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Directive({
  selector: '[forbiddenBrand]',//appForbiddenBrandValidator
  providers:[{provide: NG_VALIDATORS, useExisting: ForbiddenBrandValidatorDirective, multi: true}]
})
export class ForbiddenBrandValidatorDirective implements Validator, OnChanges
{
  @Input() forbiddenBrand : string;
  private valFn : ValidatorFn;
  
  constructor() 
  {
    //this.valFn = Validators.nullValidator;
  }

  ngOnChanges(changes : SimpleChanges) : void
  {
    const change = changes["forbiddenBrand"];
    if(change)
    {
      const val : string | RegExp = change.currentValue; 
      const re = val instanceof RegExp ? val : new RegExp(val, "i");
      this.valFn = this.forbiddenBrandValidator(re);
    }
  }

  validate(control : AbstractControl) : {[key : string] : any} | null
  {
    /*const no = new RegExp(this.forbiddenBrand, "i").test(control.value);
    return no ? 
    {
      'forbiddenBrand' : 
      {
        value : control.value
      }
    }
    :
    null;*/
    //return this.valFn(control)
    return this.forbiddenBrand ? this.forbiddenBrandValidator(new RegExp(this.forbiddenBrand, "i"))(control) : null
  }

  private forbiddenBrandValidator(nameRe : RegExp) : ValidatorFn
  {
    return (control : AbstractControl) : { [ key : string] : any } | null => 
    {
      const name = control.value;
      const forbidden = nameRe.test(name);
      return forbidden ? { "forbiddenBrand" : {value : name} } : null; 
    }
  }
}
