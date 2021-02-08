import { WebDriver } from "selenium-webdriver";
import { xpathSelector } from "../../../utils/selectors";


export const routingRulesTrigger = async function getRoutingRulesTrigger(driver:WebDriver) {
    return await xpathSelector("//*[@id=\"page-routingConfig\"]/div[1]/div/div/span/span[1]",driver);
}

export const routingTicketsToSpeDeptOrAgent = async function getRoutingTicketsToSpeDeptOrAgent(driver:WebDriver) {
    return await xpathSelector("//*[@id=\"form-routingConfig\"]/div/div/div/div[1]/div/div/div/div/button[1]",driver);
}

export const routeTickesBasedOnCustomerRules = async function getRouteTickesBasedOnCustomerRules(driver:WebDriver) {
    return await xpathSelector("//*[@id=\"form-routingConfig\"]/div/div/div/div[1]/div/div/div/div/button[2]",driver);
}

export const department = async function getDepartment(driver:WebDriver) {
    return await xpathSelector("//*[@id=\"form-routingConfig\"]/div/div/div/div[3]/div/div/div[1]/div/div[2]/div/button[1]",driver);
}

export const saveButton = async function getSaveButton(driver:WebDriver) {
    return await xpathSelector("//*[@id=\"form-routingConfig\"]/div/div/div/div[4]/div[1]/button",driver);
}