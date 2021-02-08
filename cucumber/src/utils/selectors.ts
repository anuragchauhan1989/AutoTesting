import {
  By,
  Locator,
  until,
  WebDriver,
  WebElementCondition,
} from "selenium-webdriver";
import { selectorWaitUntilTime } from "../../../config.json";

const querySelector = async (selector: Locator, driver: WebDriver) => {
  const el = await driver.wait(
    until.elementLocated(selector),
    selectorWaitUntilTime
  );
  return await driver.wait(until.elementIsVisible(el), selectorWaitUntilTime);
};

export const cssSelector = async (selector: any, driver: WebDriver) => {
  return await querySelector(By.css(selector), driver);
};

export const classNameSelector = async (className: string, driver: WebDriver) => {
  return await querySelector(By.className(className), driver);
};

export const xpathSelector = async (xpath: string, driver: WebDriver) => {
  return await querySelector(By.xpath(xpath), driver);
};

export const tagSelector = async (tagname: string, driver: WebDriver) => {
  return await querySelector(By.name(tagname), driver);
};

export const idSelector = async (id: string, driver: WebDriver) => {
  return await querySelector(By.id(id), driver);
};

export const attributeSelector = async (
  name: string,
  value: string,
  driver: WebDriver
) => {
  return await querySelector(By.css(`[${name}="${value}"]`), driver);
};
