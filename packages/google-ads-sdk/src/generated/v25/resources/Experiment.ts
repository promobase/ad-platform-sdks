import type { AsyncActionStatus, ExperimentStatus, ExperimentType, MetricGoal, OptimizeAssetsExperimentInfo, VideoExperimentInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.Experiment. Do not edit by hand.
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
  videoExperiment?: VideoExperimentInfo;
  optimizeAssetsExperiment?: OptimizeAssetsExperimentInfo;
}
