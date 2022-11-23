# timegear

Time formatting tools for JavaScript apps

## Installation

> npm

```console
npm install timegear
```

> yarn

```console
yarn add timegear
```

## toVideoTime

#### display seconds or miliseconds in a readable video time format

> explanation

```javascript
toVideoTime(value, valueType, { seperator, allowZero });
// value: time in seconds or miliseconds
// valueType: type of the value you inputted (s: seconds, ms: miliseconds)
// options:
//    - seperator: seperator for the videoTime string defaults to ":"
//    - allowZero: allow 0 time values 0:00:01 defaults to false
```

> usage

```javascript
const { toVideoTime } = require("timegear");

toVideoTime(10390, "s"); // 2:53:10
toVideoTime(10390, "s", { seperator: "_" }); // 2_3_10
```

## getTimeBetween

#### get time between two dates in your desired format

> explanation

```javascript
getTimeBetween(start, finish, { output });
// start: the date you will subtract
// finish: the date you will subtract from
// options:
//    - output: Output type of the substraction ("m", "s", "ms") defaults to "s"
```

> usage

```javascript
const { getTimeBetween } = require("timegear");

let start = new Date().getTime() - 1 * 60 * 1000; // 1 minute
let finish = new Date(); // current date

getTimeBetween(start, finish, { output: "m" }); // 1
```

## dateToToken

#### converts a date to a unique token that "prevents" milisecond conflicts

> explanation

```javascript
dateToToken(date);
// date: new Date();
```

> usage

```javascript
const { dateToToken } = require("timegear");

let userCreatedAt = new Date();

dateToToken(userCreatedAt); // 2022112320272729102457nn10y1315.f2324pha313233m353839
// above is an example value
```
