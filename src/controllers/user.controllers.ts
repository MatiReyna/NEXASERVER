import { Request, Response } from 'express';
import { User } from '../models/user.models';
import bcrypt from 'bcryptjs';

export const createUser = async (req: Request, res: Response) => {
    try {
        const userCount = await User.count();

        if (userCount >= 1) {
            return res.status(400).json({ message: 'El servidor ya tiene un administrador registrado' });
        }

        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const nuevoUsuario = await User.create({
            email,
            password: hashedPassword
        });
        const { id, email: createdEmail } = nuevoUsuario
        return res.status(201).json({ id, email: createdEmail });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const logIn = async (req:Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const admin = await User.findOne({ where: { email } });

        if (!admin) {
            return res.json({ validate: false, message: 'Credenciales incorrectas' })
        }

        const validatePassword = await bcrypt.compare(password, admin.password);

        if (!validatePassword) {
            return res.json({ validate: false, message: 'Credenciales incorrectas' })
        }
        return res.json({ validate: true, message: 'Bienvenido' });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};