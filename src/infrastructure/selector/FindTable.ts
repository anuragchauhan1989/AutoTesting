import { Button } from "../element/Button";
import { Component } from "../element/Component";

export interface FindTable {
  componentBelowList: () => Promise<Component>;
  componentBelowTitle: () => Promise<Component>;
  button: {
    byIndex: (i: number) => Promise<Button>;
  };
  header: {
    byIndex: (i: number) => Promise<Component>;
    byFieldName: (name: string) => Promise<Component>;
  };
  row: {
    byIndex: (i: number) => Promise<Component>;
    byId: (id: string) => Promise<Component>;
    cell: {
      byIndex: (i: number) => Promise<Component>;
      byFieldName: (name: string) => Promise<void>;
    };
    operation: {
      byIndex: (i: number) => Promise<Button>;
      byType: (type: string) => Promise<Button>;
      byCustomName: (name: string) => Promise<Button>;
    };
  };
  filter: {
    byIndex: (i: number) => Promise<Component>;
    byConditionName: (name: string) => Promise<Component>;
    byCustomName: (name: string) => Promise<Component>;
  };
  batchOperation: {
    byIndex: (i: number) => Promise<Component>;
    byCustomName: (name: string) => Promise<Component>;
  };
}