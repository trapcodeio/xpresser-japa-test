import test from "japa";
import {$} from "../app";
import axios from "axios";

test.group('Server', (group) => {
    test('Try "test" route', async (assert) => {
        // because this is running inside xpresser,
        // we can access all xpresser's functions

        // For example getting the url using route helper
        const url = $.helpers.route('test');
        // => /test/index as defined in routes.ts

        // make a request to the route
        const {data} = await axios.get(url);

        // check the response
        assert.isObject(data);

        assert.deepEqual(data.numbers, [1, 2, 3]);

        assert.deepEqual(data.route, {
            name: 'test',
            method: 'get',
            controller: 'AppController@test'
        });
    });

    group.after($.exit)
});