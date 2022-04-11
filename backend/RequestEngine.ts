import { $ } from "../app";

class MyRequestEngine extends $.extendedRequestEngine() {
    /**
     * Declare custom functions you want on `http` object
     * For example:
     */

    /**
     * Return 404 Error message and log trace.
     * `notFound` should now be accessible on `http` object
     */
    notFound() {
        console.trace(`A 404 error just occurred!`);
        return this.status(404).send("Not Found");
    }
}

export = MyRequestEngine;

// Extend default Http Type
declare module "xpresser/types/http" {
    interface Http extends MyRequestEngine {}
}
