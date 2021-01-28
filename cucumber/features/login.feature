Feature: Login Feature

    To check if Jest cucumber works with typescript

    Scenario: Check LiveChat Dashboard opens on login
        Given Agent is on Login Page
        When Agent login with valid <emailId> and <password>
        Then Dashboard page opens up
        
        