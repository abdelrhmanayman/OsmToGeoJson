# OSM to GeoJson

# Pre-requisites

- Node.js
- NPM
- Typescript

# Getting started

- Clone the repository

```
git clone  <repo_url>
```

- Install dependencies

```
cd <project_name>
npm install
```

- Build and run the project

```
npm start
```

server will be up on `http://localhost:3002` by default

- API Document endpoints


  swagger-ui  Endpoint : http://localhost:<default port or configured port>/docs 


# Description

The main purpose for this project is to get OSM data for bbox input and convert it to geoJSON. 


## Project Structure

The folder structure of this app is explained below:

| Name                | Description                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------ | 
| **dist**            | Contains the distributable (or output) from your TypeScript build.                               |
| **node_modules**    | Contains all npm dependencies                                                                    |
| **public**          | Contains project's assets and public files.                                                      |
| **src**             | Contains source code that will be compiled to the dist dir                                       |
| **src**/controllers | Controllers define functions to serve various express routes.                                    |
| **src**/middlewares | Express middlewares which process the incoming requests before handling them down to the routes  |
| **src**/routes      | Contain all express routes, separated by each module of application                              |
| **src**/models      | Models define entities used by the system                                                        |
| **src**/managements | Managements for modules containing functions used to achieve the logic                           |
| **src**/services    | Services used by the system ex. apiService                                                     |
| **src**/validations | Routes request validations                                                                       |
| **src**/interfaces  | Contains interfaces files for each entity                                                        |
| **src**/utils       | Contains utils files ex. constants                                                                 |
| **src**/index.ts    | Entry point to express app                                                                       |
| **src**/app.ts      | class contains the basic setup of project                                                        |
| package.json        | Contains npm dependencies as well as [build scripts]                                             |
| eslintrc.json       | Config settings for Eslint code style checking                                                   |

## Building the project

### Configuring TypeScript compilation

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "dist",
    "sourceMap": true
  },

  "include": ["src/**/*.ts"],
  "exclude": ["src/**/*.spec.ts", "test", "node_modules"]
}
```

### Running the build

All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script   | Description                                                                     |
| ------------ | ------------------------------------------------------------------------------- |
| `start`      | Runs full build in developement and runs node on dist/index.js. Can be invoked with `npm start` |
| `build`      | Full build. Runs ALL build.                                                     |
| `test`       | Runs build and run tests using mocha                                            |
| `lint`       | Runs Eslint on project files                                                    |


## Testing

The tests are written in Jest

```
"jest": "~27.3.1",
"ts-jest": "^27.0.5",
"supertest": "6.1.6",
```

### Running tests using NPM Scripts

```
npm run test
```

Test files are created under __test__ folder.

## ESlint rules

All rules are configured through `eslintrc.json`.

## Running Eslint

```
npm run lint
```

# Troubles?

Please contact me at: aymanabdelrhman12@gmail.com