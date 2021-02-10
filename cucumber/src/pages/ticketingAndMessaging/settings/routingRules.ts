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

export const specificDept = async function getSpecificDept(driver:WebDriver) {
    return await xpathSelector("//span[contains(@class, 'MuiToggleButton-label')]/span[text()='Department']",driver);
}

export const department = async function getDepartment(driver:WebDriver) {
    return await xpathSelector("//*[@id=\"form-routingConfig\"]/div/div/div/div[3]/div/div/div[1]/div/div[2]/div/button[1]",driver);
}

export const departmentSelector = async function getDepartmentSelector(driver:WebDriver) {
    //return await xpathSelector("//*[@id=\"form-routingConfig\"]/div/div/div/div[3]/div/div/div[1]/div/div[2]/div/button[1]",driver);
    return await xpathSelector("//span[contains(text(),'Department')]/../following-sibling::div//div[@role='button']", driver);
    }
              
export const dd = async function getDepartmentSelector(driver:WebDriver, value:string) {
     //return await xpathSelector("//*[@id=\"form-routingConfig\"]/div/div/div/div[3]/div/div/div[1]/div/div[2]/div/button[1]",driver);
     console.log(value);
    return await xpathSelector("//li[@title='"+value+"']", driver);
    }

export const saveButton = async function getSaveButton(driver:WebDriver) {
    return await xpathSelector("//span[contains(@class, 'MuiButton-label') and text()='Save']",driver);
}

export const launchAgentConsole = async function getLaunchAgentConsole(driver:WebDriver) {
    return await xpathSelector("//span[contains(@class, 'MuiButton-label') and text()='Launch Agent Console']",driver);
}