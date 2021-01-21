import { Builder } from "selenium-webdriver";
require("selenium-webdriver/chrome");
require("chromedriver");
import configs from '../config.json';

jasmine.DEFAULT_TIMEOUT_INTERVAL = configs.defaultTimeoutInterval;

const generateDriver = async (browser: string) => {
    const driver = await new Builder().forBrowser(browser).build();
    await driver
        .manage()
        .window()
        .maximize();
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
    login
};

