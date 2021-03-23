
import Page from './page';

class paymentPage extends Page  {
 
  open () {
      super.open('https://buying-banksy.herokuapp.com/Payment')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(1000);
  }

  
}

export default new paymentPage();
