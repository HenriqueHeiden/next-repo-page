import { MongoClient } from 'mongodb';
const database_url = process?.env?.DATABASE_URL
const client = new MongoClient(database_url || '')

export default async function connect(){
    try {
        await client.connect()
    const db = client.db('linktree')
    console.log('connectado')
    return {db, client}
    } catch (error) {
        console.log('Erro ao connectar')
    }
}



