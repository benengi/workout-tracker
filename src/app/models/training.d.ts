export interface Exercise {
  displayName: string;
  id: string;
}

export interface TrainingExercise {
  exerciseId: string;
  uid: string;
  trainingDayId: string;
  totalSets: number;
  totalReps: number;
  setsDone: number;
  repsDone: number;
}

export interface TrainingDay {
  displayName: string;
  id: string;
  uid: string;
}