import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 
  

  constructor(private webReqService: WebRequestService) { }

  

  getLists() {
    return this.webReqService.get('lists');
  }

  createList(title: string){
    return this.webReqService.post('lists', { title });
  }

  updateList(id: string, title: string) {
    return this.webReqService.patch(`lists/${id}`, { title });
  }

  deleteTask(id: string) {
    return this.webReqService.delete(`lists/${id}`);
  }

  deleteList(listId: string, taskId: string) {
    return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`);
  }

  getTasks(listId: string) {
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  createTasks(title: string, listId: string){
    return this.webReqService.post(`lists/${listId}/tasks`, { title });
}

  complete(task: Task) {
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, {
    completed: !task.completed
    });
  }
}
