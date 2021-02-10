import { Component } from "../element/Component";
import { FindElement } from "./FindElement";
import { FindForm } from "./FindForm";
import { FindTable } from "./FindTable";

export interface FindPage extends FindElement {
  title: () => Promise<Component>;
  description: () => Promise<Component>;
  featureEnableSwitch: () => Promise<Component>;
  previewArea: () => Promise<Component>;
  tab: () => Promise<Component>;
  form: FindForm;
  table: FindTable;
}

