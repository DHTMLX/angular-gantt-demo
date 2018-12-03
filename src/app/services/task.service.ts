import {Injectable} from '@angular/core';
import {Task} from '../models/task';
import {HttpClient} from '@angular/common/http';
import {HandleError} from './service-helper';

@Injectable()
export class TaskService {
	private taskUrl = 'api/tasks';

	constructor(private http: HttpClient) {}

	get(): Promise<Task[]>{
		return this.http.get(this.taskUrl)
			.toPromise()
			.catch(HandleError);
	}

	insert(task: Task): Promise<Task> {
		return this.http.post(this.taskUrl, task)
			.toPromise()
			.catch(HandleError);
	}

	update(task: Task): Promise<void> {
		return this.http
			.put(`${this.taskUrl}/${task.id}`, task)
			.toPromise()
			.catch(HandleError);
	}

	remove(id: number): Promise<void> {
		return this.http.delete(`${this.taskUrl}/${id}`)
			.toPromise()
			.catch(HandleError);
	}
}