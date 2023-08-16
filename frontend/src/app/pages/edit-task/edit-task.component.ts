import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from 'express';
import { TaskService } from 'src/app/task.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
[x: string]: any;


  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }

  taskId!: string; 

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.taskId = params['listId'];

      }
    )
    
  }

  
}

