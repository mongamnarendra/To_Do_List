import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from '../models/list';
import { ListService } from '../services/list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.css']
})
export class EditlistComponent {
  user:any;

  formgroup!:FormGroup;
  constructor(private router:ActivatedRoute,private service:ListService,private fb:FormBuilder) {
    this.formgroup=this.fb.group({
      taskname:['',[Validators.required]],
      status: false
    })
  }

  ngOnInit():void {
    const name = String(this.router.snapshot.paramMap.get('name'));
    this.service.getAll().subscribe(data => {
      this.user = data.find(c => c.taskname === name) || null;
    });
  }


}
