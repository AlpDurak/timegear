"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toVideoTime = void 0;
const toVideoTime = (value, valueType, options) => {
    value = Math.floor(value);
    let _ = (options === null || options === void 0 ? void 0 : options.seperator) || ":";
    options = {
        allowZero: (options === null || options === void 0 ? void 0 : options.allowZero) || false,
    };
    if (valueType === "s") {
        let hours = Math.floor(value / 60 / 60);
        let minutes = Math.floor(value / 60 - hours * 60);
        let seconds = Math.floor(value - (minutes * 60 + hours * 60 * 60));
        // prettier versions
        let pMinutes = minutes < 10 ? "0" + minutes : minutes;
        let pSeconds = seconds < 10 ? "0" + seconds : seconds;
        // fragment versions
        let fHours = hours !== 0 ? `${hours}${_}` : "";
        let fMinutes = minutes !== 0 ? `${pMinutes}${_}` : "";
        if (options.allowZero)
            return `${hours}${_}${pMinutes}${_}${pSeconds}`;
        return `${fHours}${fMinutes}${pSeconds}`;
    }
    else if (valueType === "ms") {
        //converted value (to seconds)
        let cValue = Math.floor(value / 1000);
        let hours = Math.floor(cValue / 60 / 60);
        let minutes = Math.floor(cValue / 60 - hours * 60);
        let seconds = Math.floor(cValue - (minutes * 60 + hours * 60 * 60));
        // prettier versions
        let pMinutes = minutes < 10 ? "0" + minutes : minutes;
        let pSeconds = seconds < 10 ? "0" + seconds : seconds;
        // fragment versions
        let fHours = hours !== 0 ? `${hours}${_}` : "";
        let fMinutes = minutes !== 0 ? `${pMinutes}${_}` : "";
        if (options.allowZero)
            return `${hours}${_}${pMinutes}${_}${pSeconds}`;
        return `${fHours}${fMinutes}${pSeconds}`;
    }
    else
        throw new Error("'ValueType' has to be 's' (seconds) or 'ms' (miliseconds).");
};
exports.toVideoTime = toVideoTime;
