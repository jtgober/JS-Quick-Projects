const { test } = require('@playwright/test');
const fs = require("fs");


var links = fs.readFileSync('./tests/sample.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line

for (const link of links) {
    test('test for ' + link.toString(), async ({ page }) => {
        // Default context and page have locale as specified
        console.log(link);
        await page.goto(link)

    })
}