import { Given} from 'cucumber';
import BanksyPage from '../pageobjects/openBanksy.js';

Given(/^I open Buying Banksy home page$/, function () {
  BanksyPage.open();
  browser.pause(3000);
});

