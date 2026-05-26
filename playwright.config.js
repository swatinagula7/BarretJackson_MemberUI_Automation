
import { defineConfig, devices } from '@playwright/test';
/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: [['html'],
  // ['list'],
  // ['junit', { outputFile: 'results.xml' }],
  // ['html', { outputFile: 'results.json' }],
  // ['html', { outputFolder: 'my-allure-results' }],
  // ],
  reporter: [['html'],
  ['list'],
  ['junit', { outputFile: 'results.xml' }],
  ['json', { outputFile: 'results.json' }],
  ['allure-playwright', { outputFolder: 'my-allure-results' }],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 2000000,
  use: {
    actionTimeout: 2000000,   // each action (click, fill, etc.)
    navigationTimeout: 2000000,
    trace: 'retain-on-failure',
    headless: false,
    screenshot: 'on',
    video: 'on',
    acceptDownloads: true, // Enables download handling
    
      },

    /* Configure projects for major browsers */
    projects: [
       {
    name: 'chromium',
    use: {
      browserName: 'chromium',
      // headless: false,
      viewport: null,
      launchOptions: {
        args: ['--start-maximized'],
      },
    },
  },
// {
//   name: 'firefox',
//   use: {
//     browserName: 'firefox',

//     viewport: {
//       width: 1530,
//       height: 750,
//     },

//     launchOptions: {
//       firefoxUserPrefs: {
//         'layout.css.devPixelsPerPx': '1.25',
//       },
//     },
//   },
// },
//   {
//     name: 'Microsoft Edge',
//     use: {
//       channel: 'msedge',
//       viewport: null,

//       launchOptions: {
//         args: ['--start-maximized'],
//       },
//     },
//   },
      // {
      //   name: 'webkit',
      //   use: { ...devices['Desktop Safari'] },
      // },

      /* Test against mobile viewports. */
      // {
      //   name: 'Mobile Chrome',
      //   use: { ...devices['Pixel 5'] },
      // },
      // {
      //   name: 'Mobile Safari',
      //   use: { ...devices['iPhone 12'] },
      // },

      /* Test against branded browsers. */
      // {
      //   name: 'Microsoft Edge',
      //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
      // },
      // {
      //   name: 'Google Chrome',
      //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
      // },
    ],

    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://localhost:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
  });

