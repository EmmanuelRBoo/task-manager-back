import { db } from './prisma'

interface ICreate {
    title: string
    frontend: string
    backend: string
}

interface IEdit {
    id: string
    title?: string
    frontend?: string
    backend?: string
}

export const createTask = async (data: ICreate) => {
    await db.task.create({ data })
}

export const getTasks = async () => {
    return await db.task.findMany()
}

export const editTask = async (data: IEdit) => {
    await db.task.update({ data, where: { id: data.id } })
}