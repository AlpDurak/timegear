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
toVideoTime(value, valueType, seperator, allowZero);
// value: time in seconds or miliseconds
// valueType: type of the value you inputted (s: seconds, ms: miliseconds)
// seperator: seperator for the videoTime string defaults to ":"
// allowZero: allow 0 time values 0:00:01 defaults to false
```

> usage

```javascript
const { toVideoTime } = require("timegear");

toVideoTime(10390, "s"); // 2:53:10
toVideoTime(10390, "s", "_"); // 2_3_10
```
