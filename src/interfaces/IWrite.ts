export interface IWrite<T, R> {
  create(item: T): Promise<R>;
  update(id: string, item: T): Promise<R>;
  remove(id: string): Promise<R>;
}
