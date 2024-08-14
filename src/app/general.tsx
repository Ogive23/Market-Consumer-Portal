import { Provider } from "react-redux";
import MainPage from "./main";
import ShoppingPage from "./shopping/page";
import { Store } from "@/redux/store";

export enum Pages {
  MainPage,
  ShoppingPage,
}

export const pages = [
  <MainPage key={"Main"}></MainPage>,
  <ShoppingPage key={"Shopping"}></ShoppingPage>,
];
