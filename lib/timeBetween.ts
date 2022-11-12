type Options = {
  output?: "m" | "s" | "ms";
};

export const getTimeBetween = (
  start: Date,
  finish: Date,
  options: Options
): number => {
  options = {
    output: options?.output || "s",
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
