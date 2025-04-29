import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import chalk from "chalk";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type LogType = "info" | "warn" | "error" | "success";

class Logger {
  private static formatMessage(type: LogType, functionName: string, message: string): string {
    const timestamp = GetTimeForLogFormat()
    return `[${timestamp}] ${type.toUpperCase()} : fn(${functionName}) ${message}`;
  }

  private static getColor(type: LogType): typeof chalk {
    switch (type) {
      case "info":
        return chalk.blue;
      case "warn":
        return chalk.yellow;
      case "error":
        return chalk.red;
      case "success":
        return chalk.green;
      default:
        return chalk.white;
    }
  }

  static info(functionName: string, message: string): void {
    console.log(this.getColor("info")(this.formatMessage("info", functionName, message)));
  }

  static warn(functionName: string, message: string): void {
    console.warn(this.getColor("warn")(this.formatMessage("warn", functionName, message)));
  }

  static error(functionName: string, message: string): void {
    console.error(this.getColor("error")(this.formatMessage("error", functionName, message)));
  }

  static success(functionName: string, message: string): void {
    console.log(this.getColor("success")(this.formatMessage("success", functionName, message)));
  }
}

export { Logger };


function formatDateToParts(date: Date, timeZone: string): { [key: string]: string } {
  const formatter = new Intl.DateTimeFormat("id-ID", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const formattedParts = formatter.formatToParts(date);
  const dateParts: { [key: string]: string } = {};

  formattedParts.forEach(({ type, value }) => {
    dateParts[type] = value;
  });

  return dateParts;
}

function formatDateString(dateParts: { [key: string]: string }): string {
  return `${dateParts.year}-${dateParts.month}-${dateParts.day}T${dateParts.hour}:${dateParts.minute}:${dateParts.second}Z`;
}

function logFormat(dateParts: { [key: string]: string }): string {
  return `${dateParts.day}/${dateParts.month}/${dateParts.year}:${dateParts.hour}:${dateParts.minute}:${dateParts.second}`;
}

export function GetCurrentTime(): Date {
  const now = new Date();
  const dateParts = formatDateToParts(now, "Asia/Jakarta");
  const formattedDateString = formatDateString(dateParts);
  return new Date(formattedDateString);
}

export function GetCurrentTimeToString(): string {
  const now = new Date();
  const dateParts = formatDateToParts(now, "Asia/Jakarta");
  return formatDateString(dateParts);
}

export function GetTimeForLogFormat(): string {
  const now = new Date();
  const dateParts = formatDateToParts(now, "Asia/Jakarta");
  return logFormat(dateParts);
}