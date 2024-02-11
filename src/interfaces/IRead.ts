export interface IRead<T> {
  getAll(): Promise<T[]>;
  getOne(id: string): Promise<T | null>;
}
