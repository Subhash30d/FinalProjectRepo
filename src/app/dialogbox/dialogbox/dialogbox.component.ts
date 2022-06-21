import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from 'src/app/shared/apiservice.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent implements OnInit {
  dialogboxform: any
  statusvalue: any;
  dis: any= [];
  i:any
  constructor(
    public dialogRef: MatDialogRef<DialogboxComponent>,
    private api: ApiserviceService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    
  ) { }

  ngOnInit(): void {
    this.dialogboxform = new FormGroup({
      'First Name': new FormControl("", [Validators.required]),
      'Last Name': new FormControl("", [Validators.required]),
      'Date of Birth': new FormControl("", [Validators.required]),
      'Gender': new FormControl("", [Validators.required]),
      'Status': new FormControl("", [Validators.required]),
      
      
    });
    console.log(this.data[0])
    console.log(this.data)

    if(this.data[0]){
      this.dialogboxform.controls["First Name"].setValue(this.data[0]["First Name"]);
      this.dialogboxform.controls['Last Name'].setValue(this.data[0]["Last Name"]);
      this.dialogboxform.controls['Date of Birth'].setValue(this.data[0]["Date of Birth"]);
      this.dialogboxform.controls["Gender"].setValue(this.data[0].Gender);
      this.dialogboxform.controls["Status"].setValue(this.data[0].Status);
    } 
    
  }

  onNoClick(): void {
    if(!this.data[0]){
      this.dialogRef.close();
      
      console.log(this.data)
      console.log(this.data[0])
    }else{
      this.dialogRef.close();
    
    }
  }
  OKButton() {
    console.log(this.dialogboxform.value)
    console.log(this.dialogboxform.value["First Name"])
    this.data.push(this.dialogboxform.value)
    console.log(this.data)
  }
  
}
