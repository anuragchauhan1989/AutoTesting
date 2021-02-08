Feature: routingRules
    to verify the routingRules defined can be worked as we want

    @regression
    Scenario: Check routingRules run correctly
        Given User has login in
        And Trigger is enabled
        When Ticket matches any event
        And Ticket matches the trigger conditions
        Then ticket properties should be changed according to trigger

