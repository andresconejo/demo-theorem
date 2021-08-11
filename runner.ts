/* eslint-disable @typescript-eslint/no-var-requires */
const createTestCafe = require('testcafe');
const { argv } = require('yargs');

const timeout = 10000;

createTestCafe('localhost')
	.then((tc: any) => {
		const runner = tc.createRunner();

		let browser;

		if (argv.chromeHeadless) {
			browser = 'chrome:headless';
		} else if (argv.chrome) {
			browser = 'chrome';
		} else if (argv.firefoxHeadless) {
			browser = 'firefox:headless';
		}
		else if (argv.firefox) {
			browser = 'firefox';
		} else if (argv.safari) {
			browser = 'safari';
		} else {
			browser = 'chrome';
		}

		runner.browsers(browser);
		
		runner.src('./tests');
		
		runner.screenshots({
			path: 'artifacts/screenshots',
			takeOnFails: true,
			fullPage: true
		});
		
		if (argv.video) {
			runner.video('artifacts/videos', {
				failedOnly: true,
				singleFile: true
			});
		}

		const reporters = ['spec', { name: 'html', output: 'artifacts/result.html' }];
		runner.reporter(reporters);
		
		const retry = argv.noRetries ? false : true;
		const concurrency = argv.concurrency ? 3 : 1;

		return runner.run({
			debugMode: argv.debug || false,
			debugOnFail: false,
			skipJsErrors: true,
			skipUncaughtErrors: true,
			quarantineMode: retry,
			assertionTimeout: timeout,
			pageLoadTimeout: timeout,
			selectorTimeout: timeout,
			concurrency: concurrency
		});
	})
	.then((failedCount: number) => {
		if (failedCount > 0) {
			return process.exit(1);
		}
		return process.exit(0);
	});
