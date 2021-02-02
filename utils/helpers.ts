import {Builder, WebDriver} from "selenium-webdriver";
require("selenium-webdriver/chrome");
require("chromedriver");
import configs from "../config.json";

export const generateDriver =  (browser: string) : WebDriver => {
  const driver =  new Builder().forBrowser(browser).build();
   driver.manage().window().maximize();
  return driver;
};

const login = async (user: any, pwd: any, loginEles: any) => {
  const emailEle = await loginEles.emailEle();
  await emailEle.sendKeys(user);
  const pwdEle = await loginEles.passwordEle();
  await pwdEle.sendKeys(pwd);
  const btn = await loginEles.submitEle();
  await btn.click();
};

module.exports = {
  generateDriver,
  login,
};
