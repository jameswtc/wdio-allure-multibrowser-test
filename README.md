# wdio-allure-multibrowser-test

I'm using `webdriverio 4.9.11` with `wdio-mocha-framework 0.5.11` and `wdio-allure-reporter 0.1.2`. In Jenkins, I run all my tests with four browsers defined in wdio.conf.js. I'm finding that although it appears all the appropriate .json/.xml/.png files are created in allure-results, when I generate the report, only one set of test results appear instead of four. Each run, an arbitrary browser is listed in the report under the Environment section. Furthermore, it appears test results are being overwritten; if I have a test fail on one browser, the passing tests from other browsers can overwrite it in the report and show the test as passed, even if it failed using the same browser listed in the Environment section. I have 35 tests at present, so when I run against four browsers, I expect to see 140 test results. Instead I only see 35.

I'm wondering if the reporter needs to output environment information differently, or prepend the browser name onto test names so they don't overwrite each other. I'm also open to the idea that I've missed a configuration step or have done something else wrong, but I've scoured the docs and asked in gitter but haven't made any progress so far.

To run this example:
- `npm install`
- `npm test`
