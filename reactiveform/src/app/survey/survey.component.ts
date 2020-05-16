import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

function ratingRange(min: number, max: number){
  return(data: AbstractControl): {[key: string]: boolean}  | null => {
    if (data.value !== undefined && (isNaN(data.value) || data.value < min || data.value > max)) {
      return {range: true};
    } else {
      return null;
    }
  };
}

@Component({
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css']
})

export class SurveyComponent implements OnInit{
  surveyForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(){
      this.surveyForm = this.fb.group({
        firstName: ['Garry', [Validators.required, Validators.minLength(3)]],
        Email: ['a@a.com', [Validators.required, Validators.pattern('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$')]],
        Phone: [],
        Notification: '',
        Rating: ['3', [Validators.required, ratingRange(1, 10)]]
      });
  }

  setNotifcation(userSelection: string): void{
    const phoneControl = this.surveyForm.get('Phone');
    if (userSelection === 'phone'){
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }

    phoneControl.updateValueAndValidity();
  }

  save(): void {

  }
}
