import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';


@Directive({
    selector: '[appConfirmValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidator,
        multi: true
    }]
})
export class ConfirmEqualValidator implements Validator {

    @Input() appConfirmValidator: string;

    validate(c: AbstractControl): { [key: string]: any; } | null {

        const controlToCompare = c.parent.get(this.appConfirmValidator);

        if (controlToCompare && controlToCompare.value !== c.value ) {

            return {'notEqual': true};
        }

        return null;
    }
}
