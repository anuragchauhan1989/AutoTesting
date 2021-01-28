import { By, Locator, until, WebElementCondition } from "selenium-webdriver";
import { selectorWaitUntilTime } from "../config.json";

const querySelector = async (
  selector: Locator,
  driver: { wait: (arg0: WebElementCondition, arg1: number) => any }
) => {
  const el = await driver.wait(
    until.elementLocated(selector),
    selectorWaitUntilTime
  );
  return await driver.wait(until.elementIsVisible(el), selectorWaitUntilTime);
};

export const cssSelector = async (selector: any, driver: any) => {
  return await querySelector(By.css(selector), driver);
};

export const tagSelector = async (
  tagname: string,
  driver: { wait: (arg0: WebElementCondition, arg1: number) => any }
) => {
  return await querySelector(By.name(tagname), driver);
};

export const idSelector = async (
  id: string,
  driver: { wait: (arg0: WebElementCondition, arg1: number) => any }
) => {
  return await querySelector(By.id(id), driver);
};

export const attributeSelector = async (
  name: string,
  value: string,
  driver: { wait: (arg0: WebElementCondition, arg1: number) => any }
) => {
  return await querySelector(By.css(`[${name}="${value}"]`), driver);
};
