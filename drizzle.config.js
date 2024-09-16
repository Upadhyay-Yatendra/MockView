/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://NeonDbAIMocker_owner:Q1Wyz3awdHse@ep-lively-moon-a5z23ust.us-east-2.aws.neon.tech/NeonDbAIMocker?sslmode=require',
    }
  };