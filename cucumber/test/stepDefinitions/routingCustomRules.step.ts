import {Key} from "selenium-webdriver";
import {WebDriver} from "selenium-webdriver";
import {loadFeature} from "jest-cucumber";
import {DefineScenarioFunctionWithAliases} from "jest-cucumber/dist/src/feature-definition-creation";
import {myDefineFeature, Setting} from "../../src/extension/describeExtension";
import * as loginPage from "..//../src/pages/loginPage"
import * as routingRules from "..//../src/pages/ticketingAndMessaging/settings/routingRules"
import * as agentConsoleTicketing from "..//../src/pages/agentConsole/ticketingAndMessaging"


const feature = loadFeature("./cucumber/test/features/routingCustomRules.feature");

myDefineFeature(feature, (test: DefineScenarioFunctionWithAliases, setting: Setting) => {
        let driver: WebDriver = setting.selector.driver;
        test("Verify routing based on specific department", ({given, when, then}) => {
            given(/^Triggers are disabled$/, async function () {
                await driver.sleep(3000);
                await loginPage.login("frank@beta.com","111111",driver);
                await driver.sleep(3000);
                debugger
                await driver.get(("https://dash11.comm100.io/ui/10100000/ticketing/settings/autodistribution/"));
            });
            given(/^Auto-distribution is disabled$/, async function () {
                //can't probe the status of the distribution checkbox
                driver.sleep(2000);
                /*if((await autoDistribute.autoDistributionCheckBox(driver)).isSelected()) {
                    (await autoDistribute.autoDistributionCheckBox(driver)).click();
                }*/
                debugger
                driver.get("https://dash11.comm100.io/ui/10100000/ticketing/settings/routingrules/");
                driver.sleep(2000);

            });
            when(/^Routing Rule to a specific department (.*) is enabled$/, async function (department: string) {
                debugger
                (await routingRules.routingTicketsToSpeDeptOrAgent(driver)).click();
                debugger
                (await routingRules.specificDept(driver)).click();
                debugger
                (await routingRules.departmentSelector(driver)).click();
                (await routingRules.dd(driver,department.replace(/['"]+/g, ''))).click();
                (await routingRules.saveButton(driver)).click();
                driver.sleep(5000);

            });
            when(/^Ticket is created with no department assigned$/, async function () {
                (await routingRules.launchAgentConsole(driver)).click();
                driver.getAllWindowHandles().then(function (handles) {
                driver.switchTo().window(handles[1]);
            });
                driver.sleep(240000);
                (await agentConsoleTicketing.newBtn(driver)).click();
                driver.sleep(5000);
                (await agentConsoleTicketing.Email(driver)).click();
                driver.sleep(5000);

            });
            then(/^Ticket department assignee should be changed to (.*)$/, async function () {
                
            });
        });
    }
);
