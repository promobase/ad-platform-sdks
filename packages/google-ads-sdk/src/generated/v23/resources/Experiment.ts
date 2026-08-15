// @generated
// fingerprint: sha256:d9af82c9b6e1a1e99b0645d6d21bc3fe5eaab0cf5ec524ba9dd452a335d5f7ed
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AsyncActionStatus, ExperimentStatus, ExperimentType, MetricGoal } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.Experiment. Do not edit by hand.
export interface Experiment {
  resourceName?: string;
  experimentId?: string;
  name?: string;
  description?: string;
  suffix?: string;
  type?: ExperimentType;
  status?: ExperimentStatus;
  startDate?: string;
  endDate?: string;
  goals?: MetricGoal[];
  longRunningOperation?: string;
  promoteStatus?: AsyncActionStatus;
  syncEnabled?: boolean;
}
