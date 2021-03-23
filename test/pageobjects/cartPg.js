
import Page from './page';

class cartPage extends Page  {
 
  open () {
      super.open('https://buying-banksy.herokuapp.com/Cart')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(1000);
  }

  
}

export default new cartPage();
