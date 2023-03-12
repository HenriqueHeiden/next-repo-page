import connect from "../utils/database"
import { ObjectId } from 'mongodb';


export const consulta = async (email: string) => {
    try {
        const banco = (await connect())?.db
        const user = {
             email: email
        }

    const collection = await banco?.collection('linktree')

    const response = await collection?.find(user)?.sort({ published: -1 })?.toArray();

    return response  
    } catch (error) {
       throw new Error('Erro banco')
    }  
}


