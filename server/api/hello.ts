import { addServerPlugin } from "nuxt/kit";
import mysql from 'mysql2/promise';

export default defineEventHandler(async (event) => {

    const nitro: any = useNitroApp()
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            database: 'mysql'
        });

        const [results] = await connection.query("SELECT * FROM USER")
        // console.log({ results });
        // console.log({ c: await nitro.connection });


        console.log({ nitro: await nitro?.connection });

        return {
            results
        }
    } catch (error) {
        console.log(error);
    }
})