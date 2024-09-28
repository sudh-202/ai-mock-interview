/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://postgres.xmsywjntnvgyhlenxafw:SUDHanshu2002@@aws-0-us-east-1.pooler.supabase.com:6543/postgres',
    }
  };