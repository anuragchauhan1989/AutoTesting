import { By, WebDriver } from "selenium-webdriver";
import { attributeSelector, cssSelector } from "../utils/selectors";


export class Element {
  entityName: string;
  driver: WebDriver;
  constructor(driver: WebDriver, entityName: string) {
    this.entityName = entityName;
    this.driver = driver;
  }

  async getLoginButton() {
    return await cssSelector("#login > div > div > div.jss58 > form > div > div.MuiContainer-root-188.jss187.noIconLink > div > button", this.driver);
  }

  async getEmailInput() {
    return await attributeSelector("name", "email", this.driver);
  }

  async getPasswordInput() {
    return await attributeSelector("name", "password", this.driver);
  }
}
