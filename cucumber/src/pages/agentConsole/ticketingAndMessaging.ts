import { WebDriver } from "selenium-webdriver";
import { xpathSelector } from "../../utils/selectors";

export const newBtn = async function getNewBtn(driver:WebDriver) {
    return await xpathSelector("//div[@class='filter__converationBtn--1e7PV' and text()='New']",driver);
}

export const Email = async function getEmail(driver:WebDriver) {
    return await xpathSelector("//ul/li[text()='Email']",driver);
}