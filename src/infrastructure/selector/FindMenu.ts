import { MenuItem } from "../element/MenuItem";

export interface FindMenu {
  byLabel: (application: string, level2MenuLabel: string, level2SubMenuLabel?: string) => MenuItem;
  byPath: (path: string) => MenuItem;
}