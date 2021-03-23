import { When} from 'cucumber';
import galleryPage from '../pageobjects/galleryPg.js';

When(/^I open Buying Banksy gallery page$/, function () {
  galleryPage.open();
  browser.pause(5000);
});

