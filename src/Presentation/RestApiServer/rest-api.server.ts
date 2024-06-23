import dotenv from "dotenv";
import Express  from "express";
import { bookRoutes } from "./routes";
//inicializar la configuracion
dotenv.config();


export class RestApiServer {
    
    private server: Express.Application = Express();
    private port:string = process.env.RESTAPI_PORT || '3005';
    
    private routerPaths = {
        bookroutes: '/api/books',
    };
    
    public constructor(){
        //inicializar las rutas
        this.routes();
        //inicializar los middlewares
        this.middlewares();
             
    }

    private routes():void{
        this.server.use(this.routerPaths.bookroutes, bookRoutes);
    }

    private middlewares():void{
        this.server.use(Express.json());
    }

    async start(){
        this.server.listen(this.port, ()=>{
            console.log(`RestApi Server started on port 3000`);
        });
    }
}