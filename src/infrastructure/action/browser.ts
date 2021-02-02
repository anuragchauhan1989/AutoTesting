
export interface Browser {
  openPage: (path: string) => Promise<void>;
  refresh: () => Promise<void>;
}