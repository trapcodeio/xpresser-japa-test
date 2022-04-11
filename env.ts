import { Env } from "@xpresser/env";
import { resolve } from "path";

const env = Env(resolve(".env"), {
    NODE_ENV: Env.optional.enum(["development", "production"] as const, "development"),

    APP_NAME: Env.is.string("japa-test"),
    APP_PORT: Env.is.number(3000),
    APP_HOST: Env.optional.string("Localhost")
});

export default env;
