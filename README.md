# Week 1 - Programming Fundamentals

## Introduction

Welcome everyone to Week 1 of your course!

The following instructions are provided to help you get to grips with some initial programming fundamentals.

Although we focus on the Javascript language, the structures and approaches you learn over the next exercises are applicable to all programming languages. The main thing that changes between languages is the [syntax](https://en.wikipedia.org/wiki/Syntax).

For example if your 1st language is English and you visit Greece - when you visit a restaurant you may speak in Greek to place your food order. The structure of the sentence is very different to English. It is **syntactically** different. However the outcome and target of what you want to achieve, order an amazing meal, is the same whether you order in English or Greek.

In the coding exercises we just _choose_ to teach Javascript in the same way that you might have just _chose_ to speak in Greek.

## Technology

We'll be making use of the Javascript programming language within a [Node](https://nodejs.org/en/) environment and utilising a test framework called [Jest]( https://jestjs.io/en/) to run our code.

## Instructions

### Pre-Requisites

By this stage you should already be comfortable with the command line and have your cheat sheet of commands.

We're going to build on that knowledge and use the command line again in order to get your environment (laptop) ready.

#### 1) Download Visual Studio Code

When writing software, developers use tools to help them. One of those tools is known as an Integrated Development Environment or IDE for short. This is a tool that helps the developer when writing code.

You use an IDE to write software in the same way that you might use Microsoft Word to produce a document.

On this course we use a tool called Visual Studio Code to support our writing of code. So firstly head over to their website to [download and install Visual Studio Code](https://code.visualstudio.com/).

#### 2) Install Homebrew

TBC If we have them on Mac OS

#### 3) Install Node

The next item to install is [NodeJS](https://nodejs.org/en/). Node provides the Javascript framework for running our code and applications. 

When you install Node it also installs [Node Package Manager](https://www.npmjs.com/) (NPM for short). Node Package Manager (NPM) is a piece of software that allows you to install other Javascript packages that have been created by the global software development community. 

The packages contain code written by other people and have been made available for everyone to use. Making your code available to the global community is a practice known as [Open Sourcing](https://en.wikipedia.org/wiki/Open-source_software) your software.

For example - lets say you want to convert a number to its English description. Convert the number **100** to its description of **one hundred**. In programming terms this is harder than you might expect - however someone has already [created a piece of code that does this](https://www.npmjs.com/package/number-to-words) and it saves us from having to write our own code to solve this problem. Effectively, leaving us to focus on writing code for our own unique problems and businesses. 

To install Node run the following command in your terminal:

```
brew install node
```

You should now see a lot of text on your console as Node gets installed. You can verify that node is installed by running:

```
node -v
```

It should output something similar to the example below. NOTE: The version you see might differ to the example below.

```
v7.7.2
```

#### 4) Install Git

Git is a [Version Control System](https://en.wikipedia.org/wiki/Version_control) (VCS for short). At this stage don't worry too much about what Git is or what it does, we cover Version Control Systems and Git in more detail later this week. For now we just need to make sure it is installed on your laptop. 

To install Git run the following command in your terminal:

```
brew install git
```

