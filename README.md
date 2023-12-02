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

## Data Stuff Component

The _DataStuffComponent_ injects the _DataStuffService_ and uses it to get data which it then renders on the page as a string. 

The test for the DataStuffComponent uses a mocked version of the DataStuffService that has a "getStuff" function which just returns the hardcoded object `{ response: 'foobar' }`