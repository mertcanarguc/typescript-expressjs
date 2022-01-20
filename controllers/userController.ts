import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/user'

const getUsers = async(req: Request, res: Response, next: NextFunction) => {
  let user = await UserModel.find({})
  res.status(200).json(user);
}

const addUser = async(req:Request,res:Response, next: NextFunction)=>{
  new UserModel(req.body).save((err,data)=>{
    if (err)
      res.json({status:false,error:err})

    res.json({status:true,data:data})
  })
}

const updateUser = async(req:Request,res:Response, next: NextFunction)=>{
  let user = await UserModel.findById({'_id':req.body._id})

  user.update(req.body,(err,data)=>{
    if (err)
      res.json({status:false,error:err})

    res.json({status:true,data:data})
  })
}

export {getUsers,addUser,updateUser};