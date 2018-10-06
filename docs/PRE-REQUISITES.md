# Pre-Requisites

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
v8.11.1
```

#### 4) Install Git

Git is a [Version Control System](https://en.wikipedia.org/wiki/Version_control) (VCS for short). At this stage don't worry too much about what Git is or what it does, we cover Version Control Systems and Git in more detail later this week. For now we just need to make sure it is installed on your laptop. 

To install Git run the following command in your terminal:

```
brew install git
```

You can check that git is installed by running:

```
git --version
```

It should output something similar to:

```
git version 2.11.0 (Apple Git-81)
```

## Next steps

Well done! Now you have got your laptop all ready to go, we're in a position to start running the application and get our hands on writing code.

Head on over to the [instructions for running the application and tests](./RUNNING-APPLICATION.md).