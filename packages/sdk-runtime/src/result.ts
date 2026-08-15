/**
 * Promise-boundary Result primitives for SDK consumers.
 *
 * Effect remains the native runtime composition API. This leaf re-exports the
 * small better-result surface so consumers do not need to depend on the
 * implementation package directly when choosing explicit error branching.
 */
export {
  Result,
  TaggedError,
  isPanic,
  isTaggedError,
  matchError,
  matchErrorPartial,
} from "better-result";
export type {
  AnyTaggedError,
  Err,
  InferErr,
  InferOk,
  Ok,
  Result as SdkResult,
  SerializedErr,
  SerializedOk,
  SerializedResult,
  TaggedErrorClass,
  TaggedErrorInstance,
} from "better-result";
