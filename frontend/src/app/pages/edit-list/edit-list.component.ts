import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from 'express';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {
updateList(arg0: string) {
throw new Error('Method not implemented.');
}

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }

  listId!: string;

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.listId = params['listId'];
        console.log(params['listId']);
      }
    )
    
  }

  
}
    
