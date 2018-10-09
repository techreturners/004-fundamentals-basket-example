# Pre-Requisites

By this stage you should already be comfortable with the command line and have your cheat sheet of commands.

We're going to build on that knowledge and use the command line again in order to get your environment (laptop) ready.

#### 1) Download Visual Studio Code

When writing software, developers use tools to help them. One of those tools is known as an Integrated Development Environment or IDE for short. This is a tool that helps the developer when writing code.

You use an IDE to write software in the same way that you might use Microsoft Word to produce a document.

On this course we use a tool called Visual Studio Code to support our writing of code. So firstly head over to their website to [download and install Visual Studio Code](https://code.visualstudio.com/).

Once installed we can do one more enhancement to your laptop in order to make it even easier to get coding. We'll do this by adding a command line shortcut that will start up Visual Studio Code for us.

To do this firstly open Visual Studio Code on your laptop. This short video shows how you can open Visual Studio Code.
(https://storage.googleapis.com/tech-returners-course/001-fundamentals-launchingvscode.mov)


Once opened you should then open the **Command Palette**. To do this simply hold the **Shift + Cmd** keys and whilst they are held press the **P** key.

You'll see a screen that looks similar to the following

(https://code.visualstudio.com/assets/docs/setup/mac/shell-command.png)

Search for **shell command** and then choose the option:

**Shell Command: Install 'code' command in PATH**

This will install the command line shortcut that allows you to start Visual Studio Code from the command line.

You can now quit Visual Studio Code.

Further info on this process can be found [here under the **Launching from the command line**](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) heading



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

#### 5) Clone down the code

All the code examples we use throughout the course are hosted on [GitHub](https://github.com).

[GitHub](https://github.com) is an online service that provides remote Git repositories. Essentially this means we can write our code on our laptops then when we're ready we can **push** that code up to the GitHub servers.

It means that if something breaks on our laptop or similar issues then we know we ALWAYS have a copy of the code on GitHub.

This also aids sharing - for example lets say you've done a bit of code and you want to share this with people. Prior to version control systems like Git, you would either show them your laptop (not always possible if you aren't in the same room), you might put your code on a USB (pen) drive (or even a floppy disk when I started!) or you might email your code etc.

But what happens if you change code often - do you keep sharing the pen drive? Keep sending lots of emails? Use a different filename for every update? MyCode, MyCodeNew, MyCodeNewNew - I'm sure we've all done this!

Version control systems remove all this and allow us to share code easily.

By this stage you should already have a GitHub account. Please make sure your Tech Coach knows your GitHub Username so they can ensure you have access to the repository. Once you're access has been granted you can continue on to **clone** down the example code from the [TechReturners Repositories](https://github.com/techreturners) that are on GitHub. 

To do this run the following command:

```
git clone git@github.com:techreturners/001-fundamentals.git
```

When you run this command, all the code on the GitHub servers will automatically be brought down and stored on your laptop. Imagine this as your way of taking the Pen drive from GitHub.

Once the above process has completed you can change in to the **001-fundamentals** folder and open up Visual Studio Code. To do this:

```
cd 001-fundamentals
```

And then

```
code .
```

## Next steps

Well done! Now you have got your laptop all ready to go, we're in a position to start running the application and get our hands on writing code.

Head on over to the [instructions for running the application and tests](./RUNNING-APPLICATION.md).