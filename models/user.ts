import { Schema, model, connect } from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

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
run().catch(err => console.log(err))

async function run(): Promise<void> {
  await connect(process.env.MONGO_URI);
  const doc = new UserModel({
    firstname: 'Bill',
    lastname: 'bill@initech.com',
    age: 32
  });
  await doc.save();

  console.log(doc.firstname); // 'bill@initech.com'
}