import User from "../models/user.models";
import userInterface from "../types/user.type";
import bcrypt from 'bcryptjs';
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
    try {
        const userCount = await User.countDocuments();
        if (userCount >= 1) {
            return res.status(400).json('Ya existe un administrador');
        };
        const { email, password }: userInterface = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const nuevoUsuario = new User({
            email,
            password: hashedPassword
        }).save();
        return res.status(200).json(nuevoUsuario);
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
};

export const logIn = async (req: Request, res: Response) => {
    try {
        const { email, password }: userInterface = req.body;

        const admin = await User.findOne({ email });
        if(!admin){
            return res.json({validate: false, email:'Email incrrecto' });
        };

        const validatePassword = await bcrypt.compare(password, admin.password );
        if(!validatePassword){
            return res.json({validate: false, password:'Contraseña incorrecta' });
        };

        return res.status(200).json({validate: true, message:'Bienvenido' });
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
};

