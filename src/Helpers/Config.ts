import * as dotenv from "dotenv";
import path from "path";
import os from "os";

import { Env } from "../types/constants";

dotenv.config();

const config = {
	PORT: <number>parseInt(process.env.PORT) || 3000,
	ENV: <Env>process.env.NODE_ENV || Env.dev,
	IS_PROD: <boolean>(process.env.NODE_ENV == Env.prod) ? true : false,
	IS_COMPILED: <boolean>(path.extname(__filename).includes("js")) ? true : false,
	CORES: <number>os.cpus().length
};

export default config;