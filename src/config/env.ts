
import dotenv from 'dotenv';
dotenv.config();

const config = {
    app_port: Number(process.env.APP_PORT || process.env.APP_PORT_DEV),
    db_port: Number(process.env.DB_PORT || process.env.DB_PORT_DEV),
    db_name: process.env.DB_NAME || process.env.DB_NAME_DEV,
    db_user: process.env.DB_USER || process.env.DB_USER_DEV,
    db_host: process.env.DB_HOST || process.env.DB_HOST_DEV,
    db_password: process.env.DB_PASSWORD || process.env.DB_PASSWORD_DEV,
    jwt_secret: String(process.env.JWT_SECRET) 
}

export default config;
