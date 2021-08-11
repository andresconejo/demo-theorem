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
<li><a  href="#layout">Project Layout</a></li>
<li><a  href="#next-steps">If I had more time I would have...</a></li>
</ol>
</details>

## About The Project

This project is a demo project for consideration by the Theorem LLC team of the proposed solution for the problem presented.

### Built With
* [Testcafe](https://testcafe.io/)
* [Typescript](https://www.typescriptlang.org/)

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
git clone https://github.com/andresconejo/demo-theorem
```
2. Install NPM packages
```sh
npm install
```

## Usage and features added additionaly to enhance client requests
To execute the E2E tests built in TestCafe you can execute the following command:

```sh
npm run test
```
NOTE: Depending on the OS (In my case MacOS) you may be prompted to allow TestCafe to record your screen. You can navigate to System Preferences -> Security and Privacy -> Privacy. Search for TestCafe Browser Tools App and allow it to run.

<img width="470" alt="Screen Shot 2021-08-10 at 14 27 59" src="https://user-images.githubusercontent.com/9505296/128931922-008f525d-5ce8-45be-8a85-d393902324e9.png">


In addition to the base execution, several options are available as parameters to execute as you see fit. For example executing the tests with no retry mechanism.

```sh
npm run test -- --noRetries
```

```markdown
| Parameter  	       | Description |
| -------------      | ------------- |
| --noRetries  	     | Executes the tests without attempting to retry if failures  |
| --concurrency      | Run the tests concurrently three browser instances at a time  |
| --video            | Store local video recording if execution fails  |
| --chrome  	     | Execute the tests in Chrome  |
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
- noRetries = false (TestCafe retry mechanism will be in place)
- concurrency = 1 (TestCafe will only execute in one browser instance at a time)
- Default browser = Chrome

## Project layout
    .
    ├── artifacts               # Hidden directory storing screenshots, videos and output html report
    ├── data                    # Store test unput data
    ├── helpers                 # Functions or classes to support test scripts
    ├── page-objects            # Page elements and interactions
    ├── tests                   # Automated Tests
    ├── result.html             # Last execution sample html report
    ├── runner.ts               # TestCafe configuration file
    └── README.md

## If I had more time I would have...

1. Finished all areas to cover (Play About Us video) was not done, I ran out of time.
2. Add more data input files to apply more Data Driven tests, for example in the items, account creation, contact us.
3. Start building necessary configuration for CI/CD integrtion
