import {$} from "../app";


/**
 * To test server related stuff we have to run the tests
 * in the $.on.serverBooted boot middleware.
 *
 * or start the server in a separate process.
 * Isolating it will make it harder to test especially
 * when you want to make some changes during test.
 */

// For example, we would like to set some king of config
// To let the server know that we are testing.
$.on.start((next) => {
    $.config.set('testing', true);

    // the config above can be accessed across the app
    // by using $.config.get('testing')
    // to maybe do something different when testing.
    // like disabling logging.
    $.config.set('debug.requests.enabled', false);


    $.logWarning("Testing mode is on!");

    next();
});


$.on.serverBooted((next) => {
    next();

    // we are sure that the server is booted
    // And we can do some testing here.

    // We could write the tests here but for the sake of readability
    // we will write them in separate files.

    require("./server.tests")
})



// Start xpresser
$.boot();

