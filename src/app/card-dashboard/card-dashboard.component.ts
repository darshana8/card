import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { CardholderModel } from './cardholder.model';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.css']
})
export class CardDashboardComponent implements OnInit {
  title = 'visting-card';
  formValue!: FormGroup;

  cardholderobj: CardholderModel = new CardholderModel
  
  btnUpdateShow:boolean = false;



  btnSaveShow:boolean = true; 

  allcard: any;

  constructor(private formBuilder:FormBuilder, private api:ApiService ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name:[''],
      position:[''],
      contact:[''],
      email:[''],
      address:[''],
      logo:[''],
    })
    this.AllCard();
  }

  AllCard(){
    this.api.getStudent().subscribe(res => {
      this.allcard = res;
    })
  }


  AddCard(){
    this.cardholderobj.name = this.formValue.value.name;
    this.cardholderobj.position = this.formValue.value.position;
    this.cardholderobj.contact = this.formValue.value.contact;
    this.cardholderobj.email = this.formValue.value.email;
    this.cardholderobj.address = this.formValue.value.address;
    // this.cardholderobj.logo = this.formValue.value.logo;

       
    this.api.postStudent(this.cardholderobj).subscribe({
      next: (v) => {console.log(v)},
    error: (e) => {
      alert("Error")
      console.log(e)},
    complete: () => {
      console.log('complete')
      alert("Data Saved")
      this.AllCard();
      this.formValue.reset();
    } })

  }

  EditCard(data:any){
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['position'].setValue(data.position);
    this.formValue.controls['contact'].setValue(data.contact);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['logo'].setValue(data.logo);
    this.cardholderobj.id = data.id;
    this.UpdateShowBtn();
  }
  UpdateCard(){

    this.cardholderobj.name = this.formValue.value.name;
    this.cardholderobj.position = this.formValue.value.position;
    this.cardholderobj.contact = this.formValue.value.contact;
    this.cardholderobj.email = this.formValue.value.email;
    this.cardholderobj.address = this.formValue.value.address;
    // this.cardholderobj.logo = this.formValue.value.logo;
    this.api.putStudent(this.cardholderobj,this.cardholderobj.id).subscribe(res => {
      alert("Data Updated");
      this.AllCard();
      this.SaveShowBtn();
    })


  }



  DeleteCard(data:any){
    this.api.deleteCard(data.id).subscribe(res => {
      alert("Record Deleted");
      this.AllCard();
    })

  }

  UpdateShowBtn()
  {
    this.btnUpdateShow = true;
    this.btnSaveShow = false;
  }

  PrintBtn()
  {
    this.btnUpdateShow = false;
    this.btnSaveShow = false;
  }
  SaveShowBtn()
  {
    this.btnUpdateShow = false;
    this.btnSaveShow = true;
  
  }

  PrintCard(data:any){
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['position'].setValue(data.position);
    this.formValue.controls['contact'].setValue(data.contact);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['logo'].setValue(data.logo);
    this.cardholderobj.id = data.id;
    this.UpdateShowBtn();
  }



}
