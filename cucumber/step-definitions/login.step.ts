import { loadFeature, defineFeature } from "jest-cucumber";
const feature = loadFeature("./cucumber/features/login.feature");

let add = (a: number, b: number): number => a + b;

//To share steps within the same feature file
const thisIsASharedStep = (given: (regex: RegExp, params: () => void) => void) => {
    given(/This is a Shared Step/, () => {
        console.log("This is an example of a shared step.....");
    });
}

defineFeature(feature, (test) => {

    test("Login Scenario", ({ given, when, then }) => {

        given(/^Agent is on Login Page$/, () => {
            console.log("given step is executed...");

        });

        when(/^Agent login with valid (.*) and (.*)$/, (emailid, password) => {
            console.log("when step is executed...");
        });

        then(/^Dashboard page opens up$/, () => {
            console.log("then step is executed...");
        });


    });

    
});