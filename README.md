Automation Test challenge
===

## Papar Information

- Authors:  Montenegro Pablo

## Install & Dependence
- [node](https://nodejs.dev/en/learn/how-to-install-nodejs/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- install dependencies
  ```
  npm install 
  ```


## Use
- run all
  ```
  npm test
  ```
- run by file
  ```
  npx wdio wdio.conf.ts --spec ./test/specs/<fileName>.ts
  ```


## Directory Hierarchy
```
|—— .gitignore
|—— .gitlab-ci.yml
|—— allure-report
|—— allure-result
|—— node_modules
|—— package-lock.json
|—— package.json
|—— test
|    |—— pageobjects
|        |—— login.page.ts
|        |—— page.ts
|        |—— product.page.ts
|    |—— specs
|        |—— backEnd.ts
|        |—— frontEnd.e2e.ts
|—— tsconfig.json
|—— wdio.conf.ts
```

## Reports
- generate reports
  ```
  allure generate
  ```
- open reports
  ```
  allure open
  ```
