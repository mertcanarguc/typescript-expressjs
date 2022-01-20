import { Request, Response, NextFunction } from 'express';

interface UsersInterface {
  firstname: string;
  lastname: string;
  age: number;
};

const getUsers = (request: Request, response: Response, next: NextFunction) => {
  let locations: UsersInterface[] = [
    {
      firstname:'Mertcan',
      lastname:'Arguc',
      age:32
    },
    {
      firstname:'Mert',
      lastname:'Arguc',
      age:32
    },
    {
      firstname:'Mert can',
      lastname:'Arguc',
      age:32
    },

  ];

  response.status(200).json(locations);
}

export {getUsers};