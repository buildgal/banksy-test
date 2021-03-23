
import Page from './page';

class BanksyPage extends Page  {
 
  open () {
      super.open('https://buying-banksy.herokuapp.com/')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(1000);
  }

  
}

export default new BanksyPage();
