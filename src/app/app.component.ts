import { Component , OnInit, Inject  } from '@angular/core';
import { ApiserviceService } from './shared/apiservice.service';
import { filter, map, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from './dialogbox/dialogbox/dialogbox.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})

export class AppComponent implements OnInit{
  EditVariable="edit";

dataprint: any = []
editdata: any = []
i:any
  constructor(private  api:ApiserviceService, private dialog:MatDialog) {}
  title = 'Finalproj';

  ngOnInit(): void{
    this.getdata();
  }


  getdata(){
    this.api.getuserdata().subscribe((responseget:any) => {
      console.log(responseget)
      console.log(responseget.records[1].fields)
      console.log(responseget.records.length)
      let j=responseget.records.length
      for(let i=0; i<j;i++){
        this.dataprint.push(responseget.records[i].fields)
      }
      console.log(this.dataprint)
    })
    }

    Deleteuser(i: any){
      this.dataprint.splice(i,1);
      console.log(this.dataprint.length)
    }

    edituser(i: any){
      this.dialog.open(DialogboxComponent,{
          width:'550px',
          data: this.editdata
      })
      this.editdata.push(this.dataprint[i])
      console.log(this.editdata[i])
      this.editdata=[]
    }
    
    openDialog(){
      this.dialog.open(DialogboxComponent,{
        width:'550px',
        data:this.dataprint
      })
    }
}









