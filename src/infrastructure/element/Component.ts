import { Element } from "./Base";
export interface Component<Value = void, Props = object> extends Element {
  change: (value: Value) => Promise<void>;
  getValue: () => Value;
  getProps: () => Props;
}
