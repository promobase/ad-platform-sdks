// @generated
// fingerprint: sha256:58fd95fa6d228a09649a4e0a421ea3180a4eb5dba10349cd85422701928d9d23
// DO NOT EDIT: generated file; changes will be overwritten.
import * as logger from "./logger.js";

export namespace logging {
    /**
     * Configuration for logger instances.
     */
    export type LogConfig = logger.LogConfig;
    export type LogLevel = logger.LogLevel;
    export const LogLevel: typeof logger.LogLevel = logger.LogLevel;
    export type ILogger = logger.ILogger;
    /**
     * Console logger implementation that outputs to the console.
     */
    export type ConsoleLogger = logger.ConsoleLogger;
    /**
     * Console logger implementation that outputs to the console.
     */
    export const ConsoleLogger: typeof logger.ConsoleLogger = logger.ConsoleLogger;
}
