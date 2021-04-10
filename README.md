# Homework03
## Password Generator

The goal of this password generator is to first prompt the user for criteria that will then be used to generate a password. The criteria includes the desired length of the password, as well as the character types to include (uppercase letters, lowercase letters, numbers, and special characters).
ext 
Once the input is received, the user should see an alert that confirms all of the criteria going into the password, and finally, a password will be generated and ready to use. 

## Prompts and Alerts

This was an interesting project. I had to play around with the prompts and alerts alot to get the desired result. For example, if the user didn't select the correct length of password, they would have to be notified and the prompt would have to run again instead of moving to the next prompt. Another thing I considered when setting up the prompts was the amount of clicks that the user would have to go through before getting their password. Too many prompts and alerts could be very annoying. Rather than give feedback on choices after each prompt, I chose to summarize the user inputs in one window at the end of that cycle. 

## Character Codes

The next challenge was how to generate the values needed to populate the password. Rather than setting up arrays by typing out each letter, number, etc. I chose to use ranges from ASCII character codes for each character category. 

Once that was done, I wanted to drop all of the posible character codes into one array to use when generating the password, however that would require insight into the criteria selected by the user. I used logical test to see if each character category should be in the final value array, and then built that. 

## Generating the password

Finally, a for loop was used to populate the password based in the length input given by the user. In this loop, I also used Math.floor and Math.random to pull random integers from the final value array and pushed them into the password value array. the last step was to convert the ASCII character codes to the actual characters, and display it on the screen. 


Here is the link to the final product: https://sandra-marr.github.io/Homework03/

![The Password Generator application displays a red button to "Generate Password".](./assets/images/03-javascript-homework-demo.png)

