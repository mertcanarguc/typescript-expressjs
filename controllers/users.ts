import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/user'

const getUsers = async(req: Request, res: Response, next: NextFunction) => {
  let user = await UserModel.find({})

  res.status(200).json(user);
}

export {getUsers};