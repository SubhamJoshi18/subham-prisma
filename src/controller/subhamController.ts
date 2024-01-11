import { Prisma } from '@prisma/client'
import * as subhamService from '../services/subham.servicee'
import { Request, Response, request } from 'express'
import { body, validationResult } from 'express-validator'
export const subhamGet = async (request: Request, response: Response) => {
    try {
        const getSubham = await subhamService.subhamget()
        response.json(getSubham)
    } catch (err) {
        console.log(err)
    }
}

export const subhamGetbycode = async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 10)
    try {
        const getSubham = await subhamService.subhamgetByid(id)
        if (getSubham) {
            return response.status(200).json(getSubham)
        }
        return response
            .status(404)
            .json('Error while getting the id of subham from database')
    } catch (err) {
        return response.status(500).json('Internal server error ')
    }
}

export const postsubham = async (request: Request, response: Response) => {
    try {
        const post = await subhamService.createsubham(request.body)
        return response.status(200).json(post)
    } catch (err: any) {
        console.log(err)
    }
}

export const updateSubhamByid = async (
    request: Request,
    response: Response
) => {
    const error = validationResult(request)
    if (!error.isEmpty()) {
        return response.status(404).json(error.array())
    }
    const id: number = parseInt(request.params.id, 10)
    try {
        const subu = request.body
        const updatesubu = await subhamService.update(subu, id)
        return response.status(200).json(updatesubu)
    } catch (err: any) {
        console.log(err)
    }
}

export const deletesubhambyid = async (
    request: Request,
    response: Response
) => {
    try {
        const id: number = parseInt(request.params.id, 10)
        await subhamService.deletesubham(id)
        return response.status(202).json({ message: 'Successfully delete' })
    } catch (err: any) {
        console.log(err)
    }
}
