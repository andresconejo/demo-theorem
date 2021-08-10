<h3 align="center">Theorem Demo</h3>
<p align="center">
Awesome exercise to be reviewed by Theorem LLC
<br  />
</p>
<!-- TABLE OF CONTENTS -->
<details  open="open">
<summary>Table of Contents</summary>
<ol>
<li>
<a  href="#about-the-project">About The Project</a>
<ul>
<li><a  href="#built-with">Built With</a></li>
</ul>
</li>
<li>
<a  href="#getting-started">Getting Started</a>
<ul>
<li><a  href="#prerequisites">Prerequisites</a></li>
<li><a  href="#installation">Installation</a></li>
</ul>
</li>
<li><a  href="#usage">Usage</a></li>
<li><a  href="#next-steps">Next Steps</a></li>
</ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is a demo project for consideration by the Theorem LLC team of the proposed solution for the problem presented.

### Built With
* [Testcafe](https://testcafe.io/)
* [Typescript](https://www.typescriptlang.org/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites
This project requires NodeJS  and NPM. [Node](http://nodejs.org/) and [NPM](https://npmjs.org/). To make sure you have them available on your machine, try running the following command.
```
npm -v && node -v
6.14.6
v12.18.3
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/libgit2/libgit2
```
Checkout the master branch if not already in it
```
git checkout origin master
```
2. Install NPM packages
```sh
npm install
```
<!-- USAGE EXAMPLES -->
## Usage
To execute the E2E tests built in TestCafe you can execute the following command:

```sh
npm run test
```
In addition to the base execution, several options are available as parameters to execute as you see fit. For example executing the tests with no retry mechanism.

```sh
git clone https://github.com/your_username_/Project-Name.git
```

```markdown
| Parameter  	       | Description |
| -------------      | ------------- |
| --noRetries  	     | Executes the tests without attempting to retry if failures  |
| --concurrency      | Run the tests concurrently three at a time  |
| --chrome  	       | Execute the tests in Chrome  |
| --chrome:headless  | Execute the tests in Chrome headless mode  |
| --firefox          | Execute the tests in Firefox  |
| --firefox:headless | Execute the tests in Firefox headless mode  |
| --safari           | Execute the tests in Safari  |
```

You can mix and match the above parameters, for example executing the tests in Firefox with noRetries and no concurrency.
```sh
npm run test -- --noRetries --firefox
```
or
Execute the tests in the default browser (chrome) with concurrent browsers and default retry mechanism
```sh
npm run test -- --concurrency
```

Default Values:
--noRetries = false (TestCafe retry mechanism will be in place)
--Concurrency = 1 (TestCafe will only execute in one browser instance at a time)
Default browser = Chrome

## Next Steps

1. Will finish this later