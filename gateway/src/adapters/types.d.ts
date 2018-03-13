export interface IAdapter {
  register: (hash: string, owner: string) => void;
  check: (hash: string) => void;
}
