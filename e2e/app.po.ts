import { browser, by, element } from 'protractor';

export class MyappPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-heroes h1')).getText();
  }
}
