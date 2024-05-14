import { Request, Response } from 'express'
import { createTask, editTask, getTasks } from './service'

export const createTaskController = async (req: Request, res: Response) => {
    try {
        const { title, frontend, backend } = req.body

        await createTask({ title, frontend, backend })

        return res.status(201).send('Criado com sucesso')
    } catch (e) {
        return res.status(500).send('Houve um erro no servidor')
    }
}

export const getTaskController = async (req: Request, res: Response) => {
    try {
        const tasks = await getTasks()

        return res.status(200).json(tasks)
    } catch (e) {
        return res.status(500).send('Houve um erro no servidor')
    }
}

export const editTaskController = async (req: Request, res: Response) => {
    try {
        const { title, frontend, backend } = req.body
        const { id } = req.params

        await editTask({ title, frontend, backend, id })

        return res.status(200).send('Editado com sucesso')
    } catch (e) {
        return res.status(500).send('Houve um erro no servidor')
    }
}