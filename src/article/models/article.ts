import { Schema, model, connect } from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()
connect(process.env.MONGO_URI);

const schema = new Schema({
  title:{type:String,required:true},
  image:{type:String,required:true},
  author:{type:String,required:true},
  like:{type:Number,default:0},
  comments:{type:Array,default:[]},
  createdAt:{
    type:Date,
    default:Date.now,
  }
})

const ArticleModel = model('Article',schema);

export default ArticleModel;