import { Then} from 'cucumber';
import cartPage from '../pageobjects/cartPg.js';
import paymentPage from '../pageobjects/paymentPg.js';
import loginPage from '../pageobjects/loginPg.js';
import signupPage from '../pageobjects/signupPg.js';
import reviewPage from '../pageobjects/reviewPg.js';

Then(/^I open Buying Banksy cart page$/, function () {
  cartPage.open();
  browser.pause(3000);
});

Then(/^I open Buying Banksy payment page$/, function () {
    paymentPage.open();
    browser.pause(3000);
  });

  Then(/^I open Buying Banksy login page$/, function () {
    loginPage.open();
    browser.pause(3000);
  });

  Then(/^I open Buying Banksy sign up page$/, function () {
    signupPage.open();
    browser.pause(3000);
  });

  Then(/^I open Buying Banksy review page$/, function () {
    reviewPage.open();
    browser.pause(3000);
  });