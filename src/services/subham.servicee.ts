import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type subham = {
    id: number
    hobbies: string | null
    coding_language: string | null
    fav_food: string | null
}

export const subhamget = async (): Promise<subham[]> => {
    return await prisma.subham.findMany({
        select: {
            id: true,
            hobbies: true,
            coding_language: true,
            fav_food: true,
        },
    })
}

export const subhamgetByid = async (id: number): Promise<subham | null> => {
    return await prisma.subham.findUnique({
        where: {
            id: id,
        },
    })
}

export const createsubham = async (body: any) => {
    const { name, hobbies, coding_language, fav_food } = body

    const newuser = await prisma.subham.create({
        data: {
            hobbies: hobbies,
            coding_language: coding_language,
            fav_food: fav_food,
        },
        select: {
            hobbies: true,
            coding_language: true,
            fav_food: true,
        },
    })
}

export const update = async (
    subham: Omit<subham, 'id'>,
    id: number
): Promise<subham> => {
    const { hobbies, coding_language, fav_food } = subham
    return await prisma.subham.update({
        where: {
            id,
        },
        data: {
            coding_language,
            fav_food,
        },
        select: {
            id: true,
            hobbies: true,
            coding_language: true,
            fav_food: true,
        },
    })
}

export const deletesubham = async (id: number): Promise<subham> => {
    return await prisma.subham.delete({
        where: {
            id: id,
        },
    })
}
