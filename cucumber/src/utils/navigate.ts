import query from "querystring";
import { WebDriver, until, By } from "selenium-webdriver";

export class DriverHelper {
  driver: WebDriver;
  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  async refreshpage(params = undefined) {
    if (params) {
      const url: any = await this.getUrl();
      const newUrl = `${url.substr(0, url.indexOf("?"))}?${query.stringify(
        params
      )}`;
      await this.driver.navigate().to(newUrl);
      return;
    }
    await this.driver.navigate().refresh();
  }
  getUrl(): Promise<string> {
    return this.driver.getCurrentUrl();
  }

  waitForPage(url: string, duration: number = 1000) {
    return this.driver.wait(until.urlContains(url), duration);
  }

  //  async goTo(url: string) {
  //    await this.driver.navigate.to(url);
  //  }

  async waitForInput() {
    await this.driver.wait(() => false, 10000);
  }
}
