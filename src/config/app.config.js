'use strict'
import {env} from "@/utils/function";

const dev = {
    app: {
        port: env('DEV_APP_PORT', 3000),
        prefix: env('DEV_ROUTER_PREFIX','/api/v1'),
    },
    encrypt: {
        secret_key: env('DEV_ENCRYPT_KEY'),
        algorithm: env('DEV_ENCRYPTION_ALGORITHM')
    },
    OPENAI_API_KEY: env('DEV_OPENAI_API_KEY')
}
const pro = {
    app: {
        port: env('PRO_APP_PORT', 3000),
        prefix: env('PRO_ROUTER_PREFIX','/api/v1'),
    },
    encrypt: {
        secret_key: env('PRO_ENCRYPT_KEY'),
        algorithm: env('PRO_ENCRYPTION_ALGORITHM')
    },
    OPENAI_API_KEY: env('PRO_OPENAI_API_KEY')
}

const config = {dev, pro}
const node = env("NODE_ENV", "dev")
export default config[node];