export type Difficulty = "easy" | "normal" | "hard"

export type ExerciseType = "exercise" | "stretch" | "break"

export interface Workout {
  slug: string,
  name: string,
  duration: number,
  difficulty: string,
  sequence: Exercise[]
}

export interface Exercise {
  slug: string,
  name: string,
  type: ExerciseType,
  reps?: number,
  duration: number,
}