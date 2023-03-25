import express, {Express, Request, Response} from "express";



export interface IServer {
    init(): void;
    listen(): Promise<void>;
}




export class Server implements IServer {
    private readonly app: Express ;

    constructor(
        // private buildingController: IBuildingController;
    ){
        this.app = express()
    }


    init(): void {
        this.app.use(express.json())
        this.router()
    }

    async listen(): Promise<void>{
        this.app.listen(3000, ()=>{
            console.log("--- App started listening ---")
        })
    }

    private router(): void {
        this.app.get('/buildings', async function (req: Request, res:Response){
            const body = req.body
            res.send('2112')
        })
    }

}




// export default new Server()