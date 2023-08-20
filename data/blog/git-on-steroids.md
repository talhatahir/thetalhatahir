---
title: Git on steroids
date: '2023-05-29'
tags: ['git', 'programming', 'tech']
draft: false
summary: 'Super power your git competency by using git alias for your daily git commands which can help you do more by typing less. Increase productivity!'
images: ['/static/images/git.jpg']
---

![Hello Git!](/static/images/git.jpg)

Version control is one of the basic arsenal found in the toolset of a programmer. Git is one of the most _popular_ version control systems. GitHub being the hub of all repositories including Google, Apple, Facebook.

Its an essential skill which every programmer has to learn, but one should go a step ahead, Why not exceed in writing these daily commands?

Be honest, how many times a day you have to do this?

```bash
npm run lint --fix
git add .
git commit -m "you commit message"
git push
```

And then this,

```js
git checkout master
git pull
```

Oh and also this,

```js
git checkout master
git pull
git checkout -b "new branch"
```

The list of commands that need to be written every time you pull or push from your remote repository can go on and on. Some companies have predefined checks, such as <code>lint</code> and <code>format</code> to maintain their code standards.

But there's a simple escape from all of this:

## Git Alias : Your git scm on steroids

With aliases, you can add these commonly used commands to your terminal and execute them by typing just a few letters instead of the entire command.

There are two ways to set up aliases for Git.

### Using git config

You can leverage <code>git config</code> command to setup aliases for your Git.

Example:

```js
git config --global alias.co checkout
```

And then you use it like this:

```js
git co
```

You can set up multiple aliases like this, making it easier to work with Git by typing only a few letters.

### Using command line Alias

This is my recommended approach because it offers endless possibilities and saves you a lot of keystrokes.

You need to add aliases directly to your terminals <code>rc</code> file. For example, if you use <code>zsh</code> then its <code>.zshrc</code>, if you use <code>bash</code> then its <code>.bashrc</code>

Adding to <code>.zshrc</code>

```js
alias gcm='git checkout master && git pull'
alias gs='git status'
```

And to use it, simply type in the terminal:

```js
> gs
```

Using these directly on the terminal allows you to even shorten non git commands, for example if your project has a lint and format command which you manually have to run all the time, or if you have some test commands which you are required to run every other hour.

```js
alias lint='npm run lint  --fix'
alias test='npm run jest'
```

With these powerful aliases, you can reduce typing and focus more on programming.

Here is a list of some of my frequently used aliases:

```js

alias ga='git add . && git status'
alias gb='git branch'
alias gs='git status'
alias gc='git commit -m'
alias gpl='git pull'
alias gp='git push'
alias gpn='git push --no-verify'
alias gpnf='git push -f --no-verify'
alias gpnu='git push -u origin HEAD --no-verify'
alias glog='git log --graph'
alias gn='git checkout -b'
alias gcm='git checkout master && git pull'
alias gcp='git checkout - && git pull'
alias lint='./bin/lint fix'
```
