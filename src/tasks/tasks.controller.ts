import { Controller, Get } from "@nestjs/common";

@Controller({})

export class TaskController {

    @Get('/')
    index(){
        return 'Bienvenidos a Aprendiendo NestJS'
    }
    

    @Get('/tasks')
    getAllTaasks(){
        //buscar en BBDD
        //Petición a otra API...
        return 'Obteniendo todas las tareas...'
    }


}