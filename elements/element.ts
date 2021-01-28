import { By } from "selenium-webdriver";
import { attributeSelector } from "../utils/selectors";

export class Element {
  entityName: string;
  driver: any;
  constructor(driver: any, entityName: string) {
    this.entityName = entityName;
    this.driver = driver;
  }

  async getInput() {
    return await attributeSelector("name", "email", this.driver);
  }
}
