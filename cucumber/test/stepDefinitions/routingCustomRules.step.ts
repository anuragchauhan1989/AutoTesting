import {WebDriver} from "selenium-webdriver";
import {loadFeature} from "jest-cucumber";
import {DefineScenarioFunctionWithAliases} from "jest-cucumber/dist/src/feature-definition-creation";
import {myDefineFeature, Setting} from "../../src/extension/describeExtension";
import * as loginPage from "..//../src/pages/loginPage"
import * as routingRules from "..//../src/pages/ticketingAndMessaging/settings/routingRules"


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
            when(/^Routing Rule to a specific department (.*) is enabled$/, async function () {
                debugger
                (await routingRules.routeTickesBasedOnCustomerRules(driver)).click();
                (await routingRules.department(driver)).click();

            });
            when(/^Ticket is created with no department assigned$/, async function () {

            });
            then(/^Ticket department assignee should be changed to (.*)$/, async function () {
                (await routingRules.saveButton(driver)).click();
            });
        });
    }
);
