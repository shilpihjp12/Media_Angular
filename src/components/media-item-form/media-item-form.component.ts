import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validator, Validators,FormBuilder } from "@angular/forms"
import { Router } from "@angular/router";
import { MediaItemService } from 'src/service/media-item.service';
 
@Component({
    selector: "media-form",
    templateUrl: "./media-item-form.component.html",
    styleUrls: ["media-item-form.component.css"]
})

export class MediaItemFormComponent implements OnInit {
    form:FormGroup;

    constructor(private formBuilder: FormBuilder, private service: MediaItemService, private router: Router) {
        
    }

    ngOnInit() {
        // form builder is basically used to control instantiation of object in class.it leads to Di ans IOC.
        this.form = this.formBuilder.group({
            medium: this.formBuilder.control('Movies'),
            name: this.formBuilder.control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            category: this.formBuilder.control(''),
            year: this.formBuilder.control('', this.yearValidator)
        });

        // this.form = new FormGroup({
        //     medium: new FormControl('Movies'),
        //     name: new FormControl('', Validators.compose([
        //         Validators.required,
        //         Validators.pattern('[\\w\\-\\s\\/]+')
        //     ])),
        //     category: new FormControl(''),
        //     year: new FormControl('', this.yearValidator)
        // });
    }

    yearValidator(control:FormControl) {
        if(control.value.trim().length === 0) {
            return null;
        }
        let year = parseInt(control.value, 10);
        if(year >= 1900 && year <= 2100 ) {
            return null;
        } else {
            return {year : true};
        }
    }
    onSubmit(mediaItem){
        this.service.add(mediaItem).subscribe(
            (data) => {
              console.log(data);
              this.router.navigate(['/', mediaItem.medium]);
            }
        ), error => {
            console.log(error);
        };
    }
}