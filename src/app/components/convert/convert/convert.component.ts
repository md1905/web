import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumberConverterService } from '../../../services/number-converter.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {

  numberForm: FormGroup;
  responseMessage: string;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private numberConverterService: NumberConverterService) {}

  ngOnInit(): void {
    this.numberForm = this.fb.group({
      number: ['', [Validators.required, Validators.pattern('^[0-9]{1,3}$')]]
    });
  }

  onSubmit(): void {
    if (this.numberForm.valid) {
      this.isLoading = true;
      const numberValue = this.numberForm.value.number;

      this.numberConverterService.convertNumber(numberValue).subscribe(
        (response) => {
          console.log('response', response);
          this.responseMessage = response.words;
          this.isLoading = false;
        },
        (error) => {
          this.responseMessage = error.error.message;
          this.isLoading = false;
        }
      );
    }
  }

}
