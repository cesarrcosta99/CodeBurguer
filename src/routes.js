import { Router } from "express";

const routes=new Router()

routes.get("/",(require,response)=> {
    return response.json({message:"Consegui"})
})


export default routes