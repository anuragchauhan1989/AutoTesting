import { By } from "selenium-webdriver";
import { attributeSelector, cssSelector } from "../utils/selectors";

export const loginButton = async function getLoginButton(driver: any) {
  return await cssSelector(
    "#login > div > div > div.jss58 > form > div > div.MuiContainer-root-188.jss187.noIconLink > div > button",
    driver
  );
};
export const email = async function getEmailInput(driver: any) {
  return await attributeSelector("name", "email", driver);
};

export const password = async function getPasswordInput(driver: any) {
  return await attributeSelector("name", "password", driver);
};

/**
 * if you want to login the main page,you can use this function instead of write the process in your main program
 * @Author Bruce.xu
 * @param username:the email addr
 * @param passwd
 * @param driver WebDriver
 */
export async function login(username: string, passwd: string, driver: any) {
  (await email(driver)).sendKeys(username);
  (await password(driver)).sendKeys(passwd);
  (await loginButton(driver)).click();
}
