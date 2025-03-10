import { Hono } from "hono";
import {PrismaClient} from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
 import { decode,sign,verify } from 'hono/jwt';
export const blogRouter=new Hono<
{
    Bindings:{
        DATABASE_URL:string;
        JWT_SECRET:string;
    };
    Variables:{
        userId:string;
        prisma:any;
    };
}
>()
blogRouter.use("/*",async (c,next)=>{
    const authHeader=c.req.header("authorization")|| ""
    try {
        const user=await verify(authHeader,c.env.JWT_SECRET)
        if(user){
            //@ts-ignore
            c.set("userId",user.id)
            await next()
         
    }} catch (error) {
        console.log(error)
        c.status(403);
        return c.text(
            "You are not logged in"
        ) 
    }
   
})
blogRouter.post('/',async (c)=>{
    const body=await c.req.json();
    const authorId=c.get("userId")
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const blog=await prisma.blog.create({
    data:{
        title:body.title,
        content:body.content,
        authorId:Number(authorId)
    }
  })
  return c.json({
    id:blog.id
  })
    return c.text("hello hono")
})
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blogs= await prisma.blog.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    })
	return c.json({blogs})
})
blogRouter.get('/:id', async (c) => {
	const id=await c.req.param("id")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blog=await prisma.blog.findFirst({
        where:{
            id:Number(id)
        },
        select:{
            id:true,
            title:true,
            content:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    })
    return c.json({
        blog
    })
})



blogRouter.put('/', async(c) => {
    const body=await c.req.json();
    const authorId=c.get("userId")
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const blog=await prisma.blog.update({
    where:{
        id:body.id
    },
    data:{
        title:body.title,
        content:body.content,
        authorId:Number(authorId)
    }
  })
	return c.text('signin route')
})