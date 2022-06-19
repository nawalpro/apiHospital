import {getConnectionManager} from "typeorm";
import { User } from '../modules/User/UserEntity';
import config from "./env";

const entities = [User];

const connectionManager = getConnectionManager();
const db = connectionManager.create({
    type: "mysql",
    host: config.db_host,
    port: config.db_port,
    username: config.db_user,
    password: config.db_password,
    database: config.db_name,
    multipleStatements: true,
    logging: true,
    synchronize: true,
    entities: entities
});

export default db;