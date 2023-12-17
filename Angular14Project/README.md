# Angular14Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Running Unit Tests With Code Coverage

```bash
npm run test -- --code-coverage
```

Then open the `index.html` file located at `coverage/angular14-project` in your browser.

Use the report to become aware of where your source code is missing unit tests.


## Running Stryker

Then, use it to run stryker's init command.
```bash
npm run stryker -- init
```

Then open the `mutation.html` file located at `reports/mutation/mutation.html` in your browser.

Use the report to become aware of where your unit tests are missing assertions.


## How We Installed Stryker (Just FYI 😉)

First, install stryker as a dev dependency:
```bash
npm i -D stryker-cli
```

Then, use it to run stryker's init command.
```bash
npm run stryker -- init
```

Then we answered the questions promts with these answers:

- npm

- angular-cli

- javascript

- npm


Extra configuration was made to the generated stryker.config.mjs file:

- added ""!src/main.ts" to the "mutate" list.
