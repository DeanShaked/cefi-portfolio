import pino from "pino";
import dayjs from "dayjs";
import pretty from "pino-pretty";

const log = pino({
  transport: {
    target: "pino-pretty",
  },
  base: {
    pid: false,
  },
});

export default log;
