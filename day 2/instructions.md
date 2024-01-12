Do you know when you register on a website and then, when you log in, it calls you by your name? That's what you're going to do in today's challenge!

When you create a system, website or application, it is common to want to add some personalized touches to make the experience in your application richer and more dynamic.

Doing this through programming may not be a very easy task. Depending on the level of customization you want to implement, the amount of code you will need to write can be immense.

But of course you can start in a simpler way. To do this, the important thing is to understand how to capture and store values within variables. And that's what I'm going to help you with today!

Variables are the basic building blocks of any system and are essential for processing any type of information, whether from a person logged into the system or even displaying product details in an e-commerce catalog.

So, today, I'm going to teach you how to develop a program simulating one of these websites. It should ask the user to answer 3 questions:

```javascript
- What is your name?
- How old are you?
- What programming language are you studying?
```


As questions are asked, the person using the program must answer each one.

At the end, the system will display the message:

`"Hello [name], you are [age] years old and already learning [language]!"`

Note that each piece of information between [ ] is one of the answers given by the person.

# OPTIONAL EXERCISE

If you want to delve deeper into today's topic, I have one more exercise for you.

But it is 100% optional.

You will complement the code so that, after displaying the previous message, the program asks:

`Do you like studying [language]? Answer with the number 1 for YES or 2 for NO.`

And then, depending on the response, it should show one of the following messages:

```javascript
1 > Very good! Keep studying and you will be very successful.
2 > Ahh what a shame... Have you tried learning other languages?
```