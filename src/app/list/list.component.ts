import { Component } from '@angular/core';
import { ListService } from '../services/list.service';
import { List } from '../models/list';
import { FormBuilder, FormGroup, NumberValueAccessor, Validators } from '@angular/forms';
import { iif } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  records:List[]=[];
  formgroup!:FormGroup;
  status:string='false';
  isEdit:boolean = false;
  constructor(private service:ListService,private fb:FormBuilder,private route:Router) {

    this.formgroup=this.fb.group({
      taskname:['',[Validators.required]],
      status:[this.status]
    })
  }

  ngOnInit():void {
    this.service.getAll().subscribe(data => {this.records=data}) 
  }

  onSubmit() {
    
    this.service.addDetails(this.formgroup.value).subscribe( data => {
      console.log("success")
    })

    this.records.push(this.formgroup.value);
    this.formgroup.reset();
  }

  onDelete(index:number,name:string) {
    if(this.records[index].status == 'true') {
      if(this.records[index].status == 'true') {
        this.service.deleteCard(name).subscribe(res => { 
          console.log("success")
          this.records.splice(index,1)
        })
      }
  
    }

    else {
      const answer = confirm("you didn't marked as completed! Do you want to continue?");
      if(answer) {
        this.service.deleteCard(name).subscribe(res => { 
          console.log("success")
          this.records.splice(index,1)
        })
      }

    }
    
  }


  update(status:string,index:number) {
    if(status=='true') {
      this.records[index].status='false';
    }
    else {
      this.records[index].status='true';
    }
    
  }

  clickedName!:string;
  onClick(name: string): void {
    this.isEdit = true;
    this.clickedName = name;
  
    // Set the taskname in the form control
    this.formgroup.patchValue({
      taskname: name
    });
  }
  
  

  // editDetails(): void {
  //   this.formgroup=this.fb.group({
  //     taskname:['',[Validators.required]],
  //     status:[this.status]
  //   })
    
  //   const updatedTaskName = this.formgroup.get('taskname')?.value;
  
  //   // Check if the task name is empty
  //   if (!updatedTaskName || updatedTaskName.trim() === '') {
  //     alert("Task name cannot be empty.");
  //     return;
  //   }
  
  //   // Call the service to update the task details
  //   this.service.updateDetails(this.clickedName, this.formgroup.value).subscribe({
  //     next: () => {
  //       alert("Updated successfully.");
  //       this.isEdit = false;
  
  //       // Update the local record array
  //       const index = this.records.findIndex(record => record.taskname === this.clickedName);
  //       if (index !== -1) {
  //         this.records[index].taskname = updatedTaskName;
  //       }
  //     },
  //     error: () => {
  //       alert("Error while updating. Please try again.");
  //     }
  //   });
  // }
  
  

  // onCancel() {
  //   this.isEdit=false;
  // }

}
