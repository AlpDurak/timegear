type ValueType = "s" | "ms";

export const toVideoTime = (
  value: number,
  valueType: ValueType,
  seperator?: string,
  allowZero?: boolean
): string => {
  value = Math.floor(value);
  let _ = seperator || ":";
  allowZero = allowZero || false;

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

    if (allowZero) return `${hours}${_}${pMinutes}${_}${pSeconds}`;
    return `${fHours}${fMinutes}${pSeconds}`;
  } else if (valueType === "ms") {
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

    if (allowZero) return `${hours}${_}${pMinutes}${_}${pSeconds}`;
    return `${fHours}${fMinutes}${pSeconds}`;
  } else
    throw new Error(
      "'ValueType' has to be 's' (seconds) or 'ms' (miliseconds)."
    );
};
