Feature: routingCustomRules
    to verify the routingCustomRules defined can be worked as we want

@regression
Scenario Outline: Verify routing based on specific department
    Given Triggers are disabled
    And Auto-distribution is disabled
    When Routing Rule to a specific department "<department>" is enabled
    And Ticket is created with no department assigned
    Then Ticket department assignee should be changed to "<department>"
    Examples:
  
    |department    |
    |depart        |
    |Support Dept  |


# Scenario Outline: Verify routing based on specific agent
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Routing Rule to a specific agent <agent> is enabled
#     And Ticket is created with no agent assigned
#     Then Ticket department assignee should be changed to <agent>
#     Examples:

#     |agent           |
#     |Agent Lu        |
#     |Allen Lu        |

# Scenario Outline: Verify routing based on custom rules: assignee
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition Assignee <operator> <Assignee> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with Assignee as <Ticket Assignee>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        | Operator | Assignee  | Department or Agent | Name  | Ticket Assignee |
#        | is       | Agent1    | Department          | Dept1 | Agent1          |
#        | is not   | Agent1    | Department          | Dept1 | Agent2          |
#        | is not   | Agent1    | Department          | Dept1 |                 |

# Scenario Outline: Verify routing based on custom rules: assigneetype
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition AssigneeType <Operator> <AssigneeType> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with Assignee as <Ticket Assignee>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        |Operator | AssigneeType    | Department or Agent | Name     | Ticket Assignee | 
#        |is       | Agent           | Department          | Dept1    | Agent1          |
#        |is       | Agent           | Agent               | Agent1   | Agent1          |
#        |is not   | Bot             | Department          | Dept1    | Agent1          |
#        |is not   | Agent           | Department          | Dept1    |                 |

# Scenario Outline: Verify routing based on custom rules: custom agent
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition custom agent <operator> <C_agent> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with custom agent as <Ticket Agent>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        | Operator | C_agent   | Department or Agent | Name   | Ticket Agent    |
#        | is       | Agent1    | Department          | Dept1  | Agent1          |
#        | is not   | Agent1    | Department          | Dept1  | Agent2          |
#        | is not   | Agent1    | Department          | Dept1  |                 |
#        | is       | Agent1    | Agent               | Agent1 | Agent1          |

# Scenario Outline: Verify routing based on custom rules: custom checkbox
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition custom checkbox <operator> <C_checkbox> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with custom checkbox as <Ticket checkbox>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        | Operator | C_checkbox   | Department or Agent | Name   | Ticket checkbox   |
#        | is       | True         | Department          | Dept1  | True              |
#        | is not   | False        | Department          | Dept1  | True              |
#        | is       | True         | Agent               | Agent1 | True              |

# Scenario Outline: Verify routing based on custom rules: custom checkboxlist
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition custom checkboxlist <operator> <C_checkboxlist> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with custom checkboxlist as <Ticket checkboxlist>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        | Operator         | C_checkboxlist   | Department or Agent | Name   | Ticket checkboxlist  |
#        | is               | list1            | Department          | Dept1  | list1                |
#        | is not           | list1            | Department          | Dept1  | list2                |
#        | is               | list1            | Agent               | Agent1 | list1                |
#        | is not           | list1            | Department          | Dept1  |                      |
#        | contains         | list1 or list2   | Department          | Dept1  | list2                |
#        | does not contain | list1 or list2   | Department          | Dept1  | list3                |
#        | does not contain | list1 or list2   | Department          | Dept1  |                      |

# Scenario Outline: Verify routing based on custom rules: custom date
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition custom date <operator> <C_date> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with custom date as <Ticket date>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        | Operator         | C_date      | Department or Agent | Name   | Ticket date |
#        | is               | 2021-02-04  | Department          | Dept1  | 2021-02-04  |
#        | is not           | 2021-02-04  | Department          | Dept1  | 2021-02-05  |
#        | is               | 2021-02-04  | Agent               | Agent1 | 2021-02-04  |
#        | is not           | 2021-02-04  | Department          | Dept1  |             |
#        | before           | 2021-02-04  | Department          | Dept1  | 2021-02-01  |
#        | after            | 2021-02-04  | Department          | Dept1  | 2021-02-05  |    


# Scenario Outline: Verify routing based on custom rules: custom department
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition custom department <operator> <C_department> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with custom department as <Ticket Department>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        | Operator | C_department   | Department or Agent | Name   | Ticket Department    |
#        | is       | Dept1          | Department          | Dept1  | Dept1                |
#        | is not   | Dept1          | Department          | Dept1  | Dept2                |
#        | is not   | Dept1          | Department          | Dept1  |                      |
#        | is       | Dept1          | Agent               | Agent1 | Dept1                |

# Scenario Outline: Verify routing based on custom rules: custom dropdownlist
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition custom dropdownlist <operator> <C_dropdown> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with custom dropdownlist as <Ticket dropdown>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        | Operator | C_dropdown     | Department or Agent | Name   | Ticket dropdown      |
#        | is       | list1          | Department          | Dept1  | list1                |
#        | is not   | list1          | Department          | Dept1  | list2                |
#        | is not   | list1          | Department          | Dept1  |                      |
#        | is       | list1          | Agent               | Agent1 | list1                |

# Scenario Outline: Verify routing based on custom rules: custom email
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition custom email <operator> <C_email> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with custom email as <Ticket email>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        | Operator         | C_email     | Department or Agent | Name   | Ticket email |
#        | is               | x@x.com     | Department          | Dept1  | x@x.com      |
#        | is not           | x@x.xom     | Department          | Dept1  | x@y.com      |
#        | is not           | x@x.com     | Department          | Dept1  |              |
#        | is               | x@x.com     | Agent               | Agent1 | x@x.com      |
#        | contains         | x.com       | Department          | Dept1  | x@x.com      |
#        | does not contain | yyy         | Department          | Dept1  | x@x.com      |
#        | does not contain | yyy         | Department          | Dept1  |              |


# Scenario Outline: Verify routing based on custom rules: custom float
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition custom float <operator> <C_float> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with custom float as <Ticket float>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        | Operator         | C_float     | Department or Agent | Name   | Ticket float |
#        | is               | 23.3        | Department          | Dept1  | 23.3         |
#        | is not           | 23.3        | Department          | Dept1  | 24.4         |
#        | is not           | 23.3        | Department          | Dept1  |              |
#        | is               | 23.3        | Agent               | Agent1 | 23.3         |
#        | is more than     | 23.3        | Department          | Dept1  | 23.4         |
#        | is less than     | 23.3        | Department          | Dept1  | 22.3         |
#        | is less than     | 23.3        | Department          | Dept1  |              |

# Scenario Outline: Verify routing based on custom rules: custom integer
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition custom integer <operator> <C_integer> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with custom integer as <Ticket integer>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        | Operator         | C_integer     | Department or Agent | Name   | Ticket integer |
#        | is               | 23            | Department          | Dept1  | 23             |
#        | is not           | 23            | Department          | Dept1  | 24             |
#        | is not           | 23            | Department          | Dept1  |                |
#        | is               | 23            | Agent               | Agent1 | 23             |
#        | is more than     | 23            | Department          | Dept1  | 24             |
#        | is less than     | 23            | Department          | Dept1  | 22             |
#        | is less than     | 23            | Department          | Dept1  |                |


# Scenario Outline: Verify routing based on custom rules: custom link
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition custom link <operator> <C_link> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with custom link as <Ticket link>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        | Operator         | C_link      | Department or Agent | Name   | Ticket link  |
#        | is               | ios.com     | Department          | Dept1  | ios.com      |
#        | is not           | ios.com     | Department          | Dept1  | xyz.com      |
#        | is not           | ios.com     | Department          | Dept1  |              |
#        | is               | ios.com     | Agent               | Agent1 | ios.com      |
#        | contains         | xyz         | Department          | Dept1  | xyz.com      |
#        | does not contain | xyz         | Department          | Dept1  | ios.com      |
#        | does not contain | yyy         | Department          | Dept1  |              |

# Scenario Outline: Verify routing based on custom rules: custom phone
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition custom phone <operator> <C_phone> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with custom phone as <Ticket phone>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        | Operator         | C_phone     | Department or Agent | Name   | Ticket phone |
#        | is               | 0987654321  | Department          | Dept1  | 0987654321   |
#        | is not           | 0987654321  | Department          | Dept1  | 9832456723   |
#        | is not           | 0987654321  | Department          | Dept1  |              |
#        | is               | 0987654321  | Agent               | Agent1 | 0987654321   |
#        | contains         | 9876        | Department          | Dept1  | 0987654321   |
#        | does not contain | 9467        | Department          | Dept1  | 0987654321   |
#        | does not contain | 9467        | Department          | Dept1  |              |


# Scenario Outline: Verify routing based on custom rules: custom radiobutton
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition custom radiobutton <operator> <C_radiobutton> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with custom radiobutton as <Ticket radiobutton>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        | Operator | C_radiobutton  | Department or Agent | Name   | Ticket radiobutton   |
#        | is       | radio btn1     | Department          | Dept1  | radio btn1           |
#        | is not   | radio btn1     | Department          | Dept1  | radio btn2           |
#        | is not   | radio btn1     | Department          | Dept1  |                      |
#        | is       | radio btn1     | Agent               | Agent1 | radio btn1           |


# Scenario Outline: Verify routing based on custom rules: custom textarea
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition custom textarea <operator> <C_textarea> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with custom textarea as <Ticket textarea>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        | Operator         | C_textarea      | Department or Agent | Name   | Ticket textarea |
#        | is               | This is a test  | Department          | Dept1  | This is a test  |
#        | is not           | This is a test  | Department          | Dept1  | Its not         |
#        | is not           | This is a test  | Department          | Dept1  |                 |
#        | is               | This is a test  | Agent               | Agent1 | This is a test  |
#        | contains         | test            | Department          | Dept1  | This is a test  |
#        | does not contain | not             | Department          | Dept1  | This is a test  |
#        | does not contain | not             | Department          | Dept1  |                 |

# Scenario Outline: Verify routing based on custom rules: custom url
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition custom url <operator> <C_url> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with custom url as <Ticket url>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        | Operator         | C_url          | Department or Agent | Name   | Ticket url     |
#        | is               | https://io.com | Department          | Dept1  | https://io.com |
#        | is not           | https://io.com | Department          | Dept1  | https://oi.com |
#        | is not           | https://io.com | Department          | Dept1  |                |
#        | is               | https://io.com | Agent               | Agent1 | https://io.com |
#        | contains         | io             | Department          | Dept1  | https://io.com |
#        | does not contain | io             | Department          | Dept1  | https://oi.com |
#        | does not contain | io             | Department          | Dept1  |                |


# Scenario Outline: Verify routing based on custom rules: custom text
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition custom text <operator> <C_text> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with custom text as <Ticket text>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        | Operator         | C_text          | Department or Agent | Name   | Ticket text     |
#        | is               | This is a test  | Department          | Dept1  | This is a test  |
#        | is not           | This is a test  | Department          | Dept1  | Its not         |
#        | is not           | This is a test  | Department          | Dept1  |                 |
#        | is               | This is a test  | Agent               | Agent1 | This is a test  |
#        | contains         | test            | Department          | Dept1  | This is a test  |
#        | does not contain | not             | Department          | Dept1  | This is a test  |
#        | does not contain | not             | Department          | Dept1  |                 |

# Scenario Outline: Verify routing based on custom rules: Channel
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition Channel <operator> <Channel> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with Channel as <Ticket Channel>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        | Operator | Channel  | Department or Agent | Name   | Ticket Channel |
#        | is       | Email    | Department          | Dept1  | Email          |
#        | is not   | Chat     | Department          | Dept1  | Email          |
#        | is       | Email    | Agent               | Agent1 | Email          |


# Scenario Outline: Verify routing based on custom rules: Channel Account
#     Given Triggers are disabled
#     And Auto-distribution is disabled
#     When Custom routing rules with condition Channel account <operator> <Channel Account> is enabled
#     And which route the ticket to <Department or Agent> with <Name>
#     And Ticket is created with Channel Account as <Ticket Channel Account>
#     Then Ticket assignee should be changed to <Department or Agent> with <Name>
#     Examples:
#        | Operator | Channel Account   | Department or Agent | Name   | Ticket Channel Account |
#        | is       | shelay111@163.com | Department          | Dept1  | shelay111@163.com      |
#        | is not   | random@random.com | Department          | Dept1  | shelay111@163.com      |
#        | is       | shelay111@163.com | Agent               | Agent1 | shelay111@163.com      |
        

# Scenario Outline: Verify routing based on custom rules 
#         Given Triggers, auto-distribution and other routing rules are disabled
#         When Custom routing rules with condition <Ticket property> is <Value> is enabled
#         And which route the ticket to <Department or Agent> with <Name>
#         And Ticket is created with <Ticket property> as <Value>
#         Then Ticket assignee should be changed to <Department or Agent> with <Name>

#         Examples:

#         |Ticket property              | Value                  | Department or Agent | Name  |
#         |assignee                     | agent1                 | department          | dept1 |
#         |assignee type                | agent                  | department          | dept1 |
#         |c agent                      | agent1                 | department          | dept1 |
#         |c checkbox                   | true                   | department          | dept1 |
#         |c Checkbox list              | list 1                 | department          | dept1 |
#         |c date                       | @today                 | department          | dept1 |
#         |c department                 | dept                   | agent               | agent1|
#         |c dropdown list              | list 1                 | department          | dept1 |
#         |c email                      | x@yz.com               | department          | dept1 |
#         |c float                      | 23.4                   | department          | dept1 |
#         |c integer                    | 23                     | department          | dept1 |
#         |c link                       | io.com                 | department          | dept1 |
#         |c phone                      | 0987654321             | department          | dept1 |
#         |c radio button               | btn 1                  | department          | dept1 |
#         |c text area                  | text123                | department          | dept1 |
#         |c url                        | https://io.com         | department          | dept1 |
#         |c text                       | test123                | department          | dept1 |
#         |Channel                      | email                  | department          | dept1 |
#         |Channel Account              | shelay111@163.com      | department          | dept1 |
#         |Contact Identity             | bookerr.tea@gmail.com  | department          | dept1 |
#         |Contact Name                 | bookerr tea            | department          | dept1 |
#         |Created Time                 | @Today                 | department          | dept1 |
#         |Department Assignee          | Dept1                  | agent               | agent1|
#         |If has draft                 | False                  | department          | dept1 |
#         |Is Read by Agent             | False                  | department          | dept1 |
#         |Last Message Channel         | Email                  | department          | dept1 |
#         |Last Message Channel Account | shelay111@163.com      | department          | dept1 |
#         |Last Replied By              | Agent 1                | department          | dept1 |
#         |Last Replied Time            | @Today                 | department          | dept1 |
#         |Last Status Changed Time     | @Today                 | department          | dept1 |
#         |Last Updated Time            | @Today                 | department          | dept1 |
#         |Priority                     | Normal                 | department          | dept1 |
#         |Status                       | New                    | department          | dept1 |
#         |Subject                      | Test Ticket            | department          | dept1 |
#         |Tag                          | tag1                   | department          | dept1 |
#         |Total Replies                | 1                      | department          | dept1 |