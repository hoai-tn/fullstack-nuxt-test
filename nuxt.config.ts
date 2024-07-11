// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    //define variables available only on the server side
    mysqlHost: process.env.MYSQL_HOST,
    mysqlUser: process.env.MYSQL_USER,
    mysqlPass: process.env.MYSQL_PASS,
    mysqlPort: process.env.MYSQL_PORT,
    mysqlDb: process.env.MYSQL_DATABASE,

    // public: {
    //   //define variables available to the client
    //   APPNAME: process.env.APPNAME
    // }
  }
})
