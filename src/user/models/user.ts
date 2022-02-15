import { Schema, model, connect } from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()
connect(process.env.MONGO_URI);

interface User {
  firstname: string;
  lastname: string;
  age: number;
}

const schema = new Schema<User>({
  firstname:{type:String,required:true},
  lastname:{type:String,required:true},
  age:{type:Number,required:true},
})

const UserModel = model<User>('User',schema);

export default UserModel;