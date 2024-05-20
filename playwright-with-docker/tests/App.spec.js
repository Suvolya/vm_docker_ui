const { test, expect } = require("@playwright/test");
const user = require("./user.js");

test("Successful registration", async ({ page }) => {
  await page.goto('http://localhost:5000/signup');
  await page.screenshot({path: "screenshots/login.png"/*, fullPage: true*/});
  await page.setViewportSize({ width: 1920, height: 919 });
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("email");
  await page.getByPlaceholder("Name").click();
  await page.getByPlaceholder("Name").fill("name");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("password");
  await page.getByRole('button', { name: 'Sign Up' }).click();

  const titleText = await page.textContent("h3");
  await expect(page.getByText('login')).toBeVisible();
  await page.screenshot({ path: "screenshots/localhost:5000login.png" /*, fullPage: true*/ });
  });

test("Successful authorization", async ({ page }) => {
  await page.goto('http://localhost:5000/login');
  await page.setViewportSize({ width: 1365, height: 919 });
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(user.email);
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill(user.password);
  await page.getByRole('button', { name: 'login' }).click();

  const titleText = await page.textContent("h1");
    await expect(page.getByRole("heading", { name: "Welcome, Olga!" })).toHaveText(titleText);
    await page.screenshot({ path: "screenshots/localhost:5000login.png" /*, fullPage: true*/ });
    });
