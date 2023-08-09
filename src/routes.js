import {Router} from "express"

const routes=new Router()

routes.get("/",(request,response)=> {
    return response.json({mensage:"Olá césar,você conseguiu"})
})

export default routes