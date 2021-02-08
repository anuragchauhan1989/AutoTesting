Feature: Login Feature

    To check if Jest cucumber works with typescript

    Scenario: Check LiveChat Dashboard opens on login
        Given Agent is on Login Page
        When Agent login with valid <test1@comm100.com> and <111111>
        Then Dashboard page opens up
        
