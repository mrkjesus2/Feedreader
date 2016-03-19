/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    // Regex from 'http://blog.roymj.co.in/url-validation-using-regular-expression-javascript/'
    var validURL = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty and valid according to regex.
         */
        it('have valid URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).not.toBe(undefined);
                expect(feed.url.length).toBeGreaterThan(1);
                expect(feed.url).toMatch(validURL);
            });
        });

        /* Loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have a name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).not.toBe(undefined);
                expect(feed.name.length).toBeGreaterThan(1);
            });
         });
    });


    /* Test suite named "The menu" */
    describe('The Menu', function() {
        beforeEach(function() {
            this.menu = $('body');
            this.menuIcon = $('.menu-icon-link');
        });

        /* Test that ensures the menu element is hidden by default.*/
         it('is hidden', function() {
            expect(this.menu.hasClass('menu-hidden')).toBe(true);
         });

         /* Test that ensures the menu changes visibility when the icon is clicked. */
          it('changes when clicked', function() {
            this.menuIcon.trigger('click');
            expect(this.menu.hasClass('menu-hidden')).toBe(false);
            this.menuIcon.trigger('click');
            expect(this.menu.hasClass('menu-hidden')).toBe(true);
          });
    });

    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    });

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

     });
}());
