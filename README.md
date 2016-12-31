# Ng2Material

Angular 2 app with material design using [materializecss](http://materializecss.com/).

https://github.com/hatemhosny/ng2-material

## Development server

Run `npm start` for a dev server. Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files.

## API server

Run `npm run api` for a fake REST API server. The server address is [http://localhost:3000/](http://localhost:3000/). 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. 
Run the `npm run build:stag` for a staging build. Run the `npm run build:prod` for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploy

- Run `npm run deploy:gh-pages` to deploy to Github Pages. 
- Run `npm run deploy:surge` to deploy to Surge. Navigate to [http://papersfm.surge.sh](http://papersfm.surge.sh). Configure the domain in the npm script `surge`.
- Run `npm run deploy:dev` to deploy Git repo by FTP to server `dev` configured in `dploy.yaml`, using [DPLOY](https://github.com/lucasmotta/dploy)
- Run `npm run deploy:stag` to deploy Git repo by FTP to server `stag` configured in `dploy.yaml`. 
- Run `npm run deploy:prod` to deploy Git repo by FTP to server `prod` configured in `dploy.yaml`. 

- Run `npm run share` to serve the app through localtunnel. Navigate to [http://papersfm.localtunnel.me](http://papersfm.localtunnel.me). Configure the domain in the npm script `localtunnel`.

## App Documentation

Run `npm run docs` to build the app documentation using compodoc. Run `npm run docs:serve` to build the app documentation and serve it on [http://localhost:8080/](http://localhost:8080/).

## Further help

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
