# Angular-14-Http-Unit-Test

An example of an Angular v14 project with a component that injects a service that uses HTTPClient to make a GET request.


## Node Version

Used the latest v18 of node at the time (v18.19.0):
```bash
nvm i v18
```

or if you already have it installed:
```bash
nvm use v18
```


## Scaffolding

Scaffolded an Angular 14 project with this command:
```bash
npx @angular/cli@14 new Angular14Project
```

with these options:
- no routing
- scss


## Data Stuff Service

The _DataStuffService_ gets stuff (calls an arbitrary free open api).

The test for the data service checks that the "getStuff" function returns the GET call response (but doesn't ACTUALLY make a http call).

Initially scaffolded with:
```bash
npm run ng g s DataStuff
```


## Data Stuff Component

The _DataStuffComponent_ injects the _DataStuffService_ and uses it to get data which it then renders on the page as a string. 

The test for the DataStuffComponent uses a mocked version of the DataStuffService that has a "getStuff" function which just returns the hardcoded object `{ response: 'foobar' }`

Scaffolded with:
```bash
npm run ng g c DataStuff
```


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
