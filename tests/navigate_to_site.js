const globals = require('./settings/globals.js');

module.exports = {
  'Navigates To The EKA Site': (browser) => {
    return browser
      .url(globals.url)
      .waitForElementVisible('.nav-logo')
      .end();
  /* The NavBar elements should be visible (Solutions, Services, Company, Contact Us, etc.) */
    // wait for nav element to render
    // check values of child <li> for contact us, company, services, solutions, Login

  /* Clicking on the 'Contact Us' button in the NavBar should bring up a modal with the text 'How can we help?' */
    // go through navbar, div with class navbar right
    // go through <li> tags to contact us link
    // <a> tag should contain modal

  /* When a user enters their email in the #join-mailinglist_input input element and clicks on the #join-mailinglist_btn, it should bring up a modal with the text 'Request a demo' */
    // check to see that join-mailinglist_input input element is populated with some input string
    // check join_mailinglist_btn to make sure it inputs email to database
    // check to see that join_mailinglist_btn renders the Request a demo modal after email is successfully saved

  /* Makek sure social media buttons render appropriate pages */
    // Find div tags with class social-icons
    // child <a> tags have class that includes string 'icon'
    // check href value for website that corresponds with icon

  /* Make sure Eka logo on top left corner renders home page */
    // go into nav tag then nav bar header
    // <a> tag class that has navbar logo class
    // <a> tag that contains an href to the homepage on click

  /* When you hover over EKA workflow words, renders tool tips */
    // check div class column with list of workflow words
    // see that on hover, span renders with description

  /* Clicking on the phone number prompts facetime application */
    // go to div footers then social footers class
    // make sure permissions allow for facetime to open
    // go to h4 tag with <a> tag, href has phone number value

  /* Clicking company email renders default mailing application with company email address*/
    // go to social footer div and look for social info container
    // make sure <a> tag has href with company email
    // prompts default email application

  /* Clicking on a navbar element should render Home button in navbar after new page renders */
    // <ul> tag with navbar right should have <li> tag with home-link class

  /* Login button should render new heroku page */
    // login <li> tag should contain <a> tag with href, should have heroku link as value

  /* Navbar is collapsable depending on page size and mobile device */
    // aria expanded should be "true" to collapse navbar
    // div with class navbar collapse renders
  }
}
