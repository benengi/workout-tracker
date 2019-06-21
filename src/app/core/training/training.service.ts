import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Exercise, TrainingDay, Program } from 'src/app/models/training';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TrainingService {

  exerciseCol: AngularFirestoreCollection<Exercise>;
  trainingDayCol: AngularFirestoreCollection<TrainingDay>;
  programCol: AngularFirestoreCollection<Program>;

  constructor(private afs: AngularFirestore) {
    this.exerciseCol = this.afs.collection('exercises');
    this.trainingDayCol = this.afs.collection('trainingDays');
    this.programCol = this.afs.collection('programs');
  }

  // Exercises
  getExercise(id: string): Observable<Exercise> {
    return this.exerciseCol.doc<Exercise>(id).valueChanges().pipe(
      map(exercise => {
        exercise.id = id;
        return exercise;
      })
    );
  }

  getExercises(trainingDayId: string): Observable<Exercise[]> {
    const exercisesCol: AngularFirestoreCollection<Exercise>
    = this.afs.collection(
      'exercises',
      ref => ref.where('trainingDayId', '==', trainingDayId));

    return exercisesCol.valueChanges({ idField: 'id' });
  }

  // Training Days

  createTrainingDay(day: TrainingDay) {
    return from(this.trainingDayCol.add({
      ...day
    }));
  }

  getTrainingDay(id: string): Observable<TrainingDay> {
    return this.trainingDayCol.doc<TrainingDay>(id).valueChanges().pipe(
      map(trainingDay => {
        trainingDay.id = id;
        return trainingDay;
      })
    );
  }

  getTrainingDays(programId: string): Observable<TrainingDay[]> {
    const trainingDayCol: AngularFirestoreCollection<TrainingDay>
    = this.afs.collection(
      'trainingDay',
      ref => ref.where('programId', '==', programId));

    return trainingDayCol.valueChanges({ idField: 'id' });
  }

  // Programs

  createProgram(program: Program): Observable<any> {
    return from(this.programCol.add({
      ...program
    }));
  }

  getProgram(id: string): Observable<Program> {
    return this.programCol.doc<Program>(id).valueChanges().pipe(
      map(program => {
        program.id = id;
        return program;
      })
    );
  }

  getActiveProgram(user: User): Observable<Program> {
    const id = user.activeProgramId;
    if (!id) {
      return of(null);
    }

    return this.programCol.doc<Program>(id).valueChanges().pipe(
      map(program => {
        program.id = id;
        return program;
      })
    );
  }

  getPrograms(uid: string): Observable<Program[]> {
    const programCol: AngularFirestoreCollection<Program>
    = this.afs.collection(
      'programs',
      ref => ref.where('uid', '==', uid));

    return programCol.valueChanges({ idField: 'id' });
  }

}
