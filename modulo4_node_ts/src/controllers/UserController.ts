import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

const userService = new UserService();

export class UserController {

  getUsers = (req: Request, res: Response) => {
    return res.status(200).json(userService.getUsers());
  }

  createUser = (req: Request, res: Response) => {
    if (userService.createUser(req.body.name, req.body.email, req.body.password)) {
      return res.status(201).json({ message: `Usuário ${req.body.name} cadastrado` })
    } else {
      return res.status(500).json({ message: `Erro ao cadastrar o usuário ${req.body.name}` })
    }
  }
}