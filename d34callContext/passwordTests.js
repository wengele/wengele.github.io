"use strict";
//import { fail } from "node:assert";
/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page.   */

/*const assert = require("assert");  //always need this with node
const myExports = require("./passwords.js");  //with node need the name of your file with your functions here
const user = myExports.user;  //do this for all of the functions used in the Mocha tests
const askPassword = myExports.askPassword;
const user2 = myExports.user2;
const askPassword2 = myExports.askPassword2; */

/* modify the book functions (in the Function binding section tasks) to return values instead of displaying alerts, and to take the passwords as parameters rather than prompting for them.  
Then write the additional mocha tests to use call and apply instead of bind.
*/
import assert from "node:assert/strict";
import { askPassword, user, askPassword2, user2 } from "./passwords.js";

describe("fix function that loses 'this'", function () {

    it("tests rockstar", function () {
        assert.strictEqual(askPassword(user.loginOk.bind(user), user.loginFail.bind(user), "rockstar"), "John logged in");
    });

    it("tests wrong password", function () {
        assert.strictEqual(askPassword(user.loginOk.bind(user), user.loginFail.bind(user), "1234"), "John failed to log in");
    });

    //obj.func.bind(obj)
    // fuction(){return user.loginok.call(user);};


});
describe("fix the losses this", function () {

    it("tests wrong password", function () {
        assert.strictEqual(askPassword(function () { return user.loginOk.call(user); }, function () { return user.loginFail.call(user); }, "1234"), "John failed to log in");
    });
    it("tests wrong password", function () {
        assert.strictEqual(askPassword(function () { return user.loginOk.apply(user); }, function () { return user.loginFail.apply(user); }, "1234"), "John failed to log in");
    });


});




describe("Partial application for login", function () {

    it("tests rockstar", function () {
        assert.strictEqual(askPassword2(() => user2.login(true), () => user2.login(false), "rockstar"), "John logged in");
    });

    it("tests wrong password", function () {
        assert.strictEqual(askPassword2(() => user2.login(true), () => user2.login(false), "1234"), "John failed to log in");
    });

    it("tests wrong password", function () {
        assert.strictEqual(askPassword2(function () { return user2.login.call(user2, true); }, function () { return user2.login.call(user2, false); }, "1234"), "John failed to log in");
    });
    it("tests wrong password", function () {
        assert.strictEqual(askPassword2(function () { return user2.login.apply(user2); }, function () { return user2.login.apply(user2); }, "1234"), "John failed to log in");
    });

});