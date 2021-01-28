import query from "querystring";

export class DriverHelper {
  driver: any;
  constructor(driver: any) {
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
  async getUrl() {
    await this.driver.getCurrentUrl();
  }

  async goTo(url: any) {
    await this.driver.navigate.to(url);
  }
}
