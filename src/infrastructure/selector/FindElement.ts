export interface FindElement {
  byId: (id: string) => Promise<FindElement | undefined>;
  byClassName: (className: string) => Promise<FindElement[]>;
}
