[![Build Status](https://travis-ci.org/AlonMiz/angular-wait-until.svg?branch=master)](https://travis-ci.org/AlonMiz/angular-wait-until)
# Angular Wait Until
Wait until the executed promise resolved to a true value,
Execute it every x milliseconds and stop after y milliseconds.


## Install
`npm install angular-wait-until`

## Usage

### Angular Module
```js
    angular.module('webApp', ['angular.wait-until'])
```

### Inside a controller/service
```js
    angular.module('webApp')
      .controller('myController', function ($scope, $q, WaitUntil) {
        var myPromise = new WaitUntil();
        var later = +Date.now() + 500;
        $scope.error = 'no error';
        
        myPromise
          .stopAfter(1 * 1000)
          .tryEvery(100)
          .stopOnFailure(false) //Ignore errors
          .execute(() => {
            return $q((resolve, reject) => {
              if (+Date.now() >= later) {
                return resolve(true); //some truthy value
              }
              reject(false);
            })
          })
          .then((value) => $scope.name = 'Yey')
          .catch((err) => $scope.error = err);
      });

```

## Further Features
This repo is based on 
[poll-until-promise](https://github.com/AlonMiz/poll-until-promise).
There you can read about additional features and functionality 