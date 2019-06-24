export interface Exercise {
    displayName: string;
    id: string;
    uid: string;
    trainingDayId: string;
    programId: string;
    totalSets: number;
    totalReps: number;
    weight: number;
    setsDone: number;
}

export interface TrainingDay {
  displayName: string;
  id: string;
  uid: string;
  programId: string;
}

export interface Program {
  displayName: string;
  description: string;
  id: string;
  uid: string;
}
