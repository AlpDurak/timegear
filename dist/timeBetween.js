"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeBetween = void 0;
const getTimeBetween = (start, finish, options) => {
    options = {
        output: (options === null || options === void 0 ? void 0 : options.output) || "s",
    };
    // time between in miliseconds
    let timeBetween = finish.getTime() - start.getTime();
    // switch to the desired output type
    switch (options.output) {
        case "m":
            timeBetween = timeBetween / 1000 / 60;
            break;
        case "s":
            timeBetween /= 1000;
            break;
    }
    return timeBetween;
};
exports.getTimeBetween = getTimeBetween;
