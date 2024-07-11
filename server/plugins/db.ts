import mysql from 'mysql2/promise';


export default defineNitroPlugin(async (nitroApp: any) => {
    const config = useRuntimeConfig()
    console.log('setup mysql');
    
    // const connectiong = await mysql.createConnection("mysql://root:123456@localhost/mysql");
    // console.log({ nitroApp });

    // nitroApp.connection = connectiong
})

// export default Db = async () => {
//     const connection = await mysql.createConnection("mysql://root:123456@localhost/mysql");
//     return connection
// }