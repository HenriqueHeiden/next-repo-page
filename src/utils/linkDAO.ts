import connect from "../utils/database"
import { ObjectId } from 'mongodb';


export const consulta = async (email: string) => {
    const { db } = await connect()
    const user = {
        email: email
    }

    const collection = db.collection('linktree')

    const response = await collection.find(user).sort({ published: -1 }).toArray();

    return response    
}


