// export const basePath = 'http://localhost:9000/api/v1';
import dotenv from 'dotenv';

dotenv.config();
const { BACKEND_API } = process.env;

export const basePath = BACKEND_API;
