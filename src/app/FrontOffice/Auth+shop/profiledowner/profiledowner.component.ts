import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DoctorProfileService } from '../../services2/doctor-profile.service';

@Component({
  selector: 'app-profiledowner',
  templateUrl: './profiledowner.component.html',
  styleUrls: ['./profiledowner.component.css']
})
export class ProfiledownerComponent {
  profile: any;
  Form: FormGroup;
  openforum:boolean=false;
constructor(private DoctorProfileService :DoctorProfileService,private formBuilder: FormBuilder){
  this.Form = this.formBuilder.group({
    lastName: ['', Validators.required],
    firstName: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    yearsofexperience: ['']
  });}
  ngOnInit(): void {
    console.log(window.sessionStorage.getItem('idowner'))
    this.DoctorProfileService.getProfile(window.sessionStorage.getItem('idowner')).subscribe(
      (dd) => {
        this.profile = dd;
        console.log( this.profile)
      },
      (error) => {
        console.error( error);
      }
    );
    
  }
  close(){
    this.openforum=false;
  }
  open(){
    this.openforum=true;
    this.Form.patchValue({
      lastName: this.profile.lastName || '', 
      firstName: this.profile.firstName || '',
      dateOfBirth: this.profile.dateOfBirth || '', 
      email: this.profile.email || '', 
      phoneNumber: this.profile.phoneNumber || '',
      yearsofexperience: this.profile.yearsofexperience || ''

     
    });
  }
  onmodifie(){
    if(this.Form.valid){
      this.profile.lastName=this.Form.get('lastName')?.value;
      this.profile.firstName=this.Form.get('firstName')?.value;
      this.profile.dateOfBirth=this.Form.get('dateOfBirth')?.value;
      this.profile.email=this.Form.get('email')?.value;
      this.profile.phoneNumber=this.Form.get('phoneNumber')?.value;
      this.profile.yearsofexperience=this.Form.get('yearsofexperience')?.value;

      this.DoctorProfileService.updateprofile(window.sessionStorage.getItem('idowner'),this.profile).subscribe(
        (dd) => {
      location.reload()
        },
        (error) => {
          console.error( error);
        }
      );
    }
  }
  
}