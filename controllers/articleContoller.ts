import { Request, Response, NextFunction } from 'express';
import ArticleModel from '../models/article'

const getArticles = async(req: Request, res: Response, next: NextFunction) => {
  let article = await ArticleModel.find({})
  res.status(200).json(article);
}

const addArticle = async(req:Request,res:Response, next: NextFunction)=>{
  new ArticleModel(req.body).save((err,data)=>{
    if (err)
      res.json({status:false,error:err})

    res.json({status:true,data:data})
  })
}

const updateArticle = async(req:Request,res:Response, next: NextFunction)=>{
  let article = await ArticleModel.findById({'_id':req.body._id})

  article.update(req.body,(err,data)=>{
    if (err)
      res.json({status:false,error:err})

    res.json({status:true,data:data})
  })
}

export {getArticles,addArticle,updateArticle};