import { RestApiServer } from "./Presentation/RestApiServer/rest-api.server";

(async()=>{
    main();
})();


function main(): void{
    const server = new RestApiServer();

    server.start();
}