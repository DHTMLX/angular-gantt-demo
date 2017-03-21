import {Injectable} from "@angular/core";
import {Task} from "../models/task";
import {Http} from "@angular/http";
import {ExtractData, HandleError} from "./service-helper";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {
	private taskUrl = "api/tasks";

	constructor(private http: Http) {}

	get(): Promise<Task[]>{
		return this.http.get(this.taskUrl)
			.toPromise()
			.then(ExtractData)
			.catch(HandleError);
	}

	insert(task: Task): Promise<Task> {
		return this.http.post(this.taskUrl, JSON.stringify(task))
			.toPromise()
			.then(ExtractData)
			.catch(HandleError);
	}


	update(task: Task): Promise<void> {
		return this.http
			.put(`${this.taskUrl}/${task.id}`, JSON.stringify(task))
			.toPromise()
			.then(ExtractData)
			.catch(HandleError);
	}

	remove(id: number): Promise<void> {
		return this.http.delete(`${this.taskUrl}/${id}`)
			.toPromise()
			.then(ExtractData)
			.catch(HandleError);
	}
}