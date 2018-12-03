export function HandleError(error: any): Promise<any>{
	console.log(error);
	return Promise.reject(error);
}