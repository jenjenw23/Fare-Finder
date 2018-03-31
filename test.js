var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("BeneFare", function() {
    // The default tests in mocha is 2 seconds.
    // Extending it to 30 seconds to have time to load the pages

    this.timeout(30000);
    it("should send user to the sign up page", function(done) {
        // ID for the login button.
        Nightmare({ show: true })
            .goto("http://localhost:8080")
            // Click the catalog link
            .click("a[href='/reg']")
            // Evaluate the title
            .evaluate(function() {
                return document.title;
            })
            // Asset the title is as expected
            .then(function(title) {
                expect(title).to.equal("BeneFare | Low Fare Ride Sharing");
                done();
            });
    });

    it("should send user to the login up page", function(done) {
        Nightmare({ show: true })
            .goto("http://localhost:8080")
            // Click the catalog link
            .click("a[href='/login']")
            // Evaluate the title
            .evaluate(function() {
                return document.title;
            })
            // Asset the title is as expected
            .then(function(title) {
                expect(title).to.equal("BeneFare | Low Fare Ride Sharing");
                done();
            });
    });

    it("should throw an error for fun", function() {
        throw new Error("Failed on purpose, just to make the Mocha output more interesting.");
    });
});