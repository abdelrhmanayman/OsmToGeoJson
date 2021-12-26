export default class IResponse<T> {
  message?: string;
  payload?: T;
  error?: string;

  constructor(init?: Partial<IResponse<T>>) {
    Object.assign(this, init);
  }
}
