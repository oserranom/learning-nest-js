import { Controller, Get } from "@nestjs/common";
import { TaskService } from "./tasks.service";

@Controller({})

export class TaskController {

    // @Get('/')
    // index(){
    //     return 'Bienvenidos a Aprendiendo NestJS'
    // }
    

    taskService:TaskService;
    constructor(taskService:TaskService){
        this.taskService = taskService
    }

    @Get('/tasks')
    getAllTaasks(){
        return this.taskService.getTasks(); 
    }


}