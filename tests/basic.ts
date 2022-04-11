import test from 'japa';
import {$} from "../app";
import {getId} from "../backend/func";

/**
 * To test xpresser related stuff
 * You can run the test in any boot cycles
 *
 * $.on.start - Before xpresser starts plugins
 * $.on.boot - after plugins and router is initialized
 * $.on.expressInit - immediately after express is initialized, $.app is available
 * $.on.bootServer - before server is booted
 * $.on.serverBooted - after server is booted
 */
$.on.start((next) => {
    test.group("$.on.start cycle", (group) => {
        // test to check if xpresser is working and
        // not running in typeScript mode.
        test("Not running in typeScript mode", (assert) => {
            assert.isFalse($.isTypescript())
        })

        test("Test a function that uses the $", (assert) => {
            assert.equal(getId(), 'xpresser-japa-test')
        })

        test("No $.router or $.app yet!", (assert) => {
            // no $.router yet
            assert.isUndefined($.router)
            // no $.app yet
            assert.isUndefined($.app)
        });

        group.after(() => {
            // if next is not called, xpresser will stop at the current event.
            // next is called here because we want to test the next event.
            next()
        })
    });
})


// $.on.boot - after plugins and router is initialized
$.on.boot((next) => {
    test.group("$.on.boot cycle", (group) => {
        test("Router is defined", (assert) => {
            assert.isDefined($.router)
        });

        test("No $.app yet!", (assert) => {
            assert.isUndefined($.app)
        });

        group.after(() => {
            // if next is not called, xpresser will stop at the current event.
            // next is called here because we want to test the next event.
            next()
        })
    });
})

// $.on.expressInit - immediately after express is initialized, $.app is available
$.on.expressInit((next) => {
    test.group("$.on.expressInit cycle", (group) => {

        test("$.app is defined", (assert) => {
            assert.isDefined($.app)
        });

        group.after(() => {
            // if next is not called, xpresser will stop at the current event.
            // next is called here because we want to test the next event.
            next()
        })
    });
})


// Start xpresser
$.boot();

