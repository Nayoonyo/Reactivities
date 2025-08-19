import { createContext } from "react";
import CounterStore from "./counterStore";
import { UiStore } from "./uiStore";
import { ActivityStroe } from "./activityStore";

interface Store {
  counterStore: CounterStore;
  uiStore: UiStore;
  activityStore: ActivityStroe;
}

export const store: Store = {
  counterStore: new CounterStore(),
  uiStore: new UiStore(),
  activityStore: new ActivityStroe(),
};

export const StoreContext = createContext(store);
