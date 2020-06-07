import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTime(): Promise<string> {
    return element(by.id('time')).getText() as Promise<string>;
  }
}
