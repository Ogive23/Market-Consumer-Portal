"use client";

import * as React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Store } from "@/redux/store";
import { pages } from "./general";
import { useRouter } from "next/navigation";
import { back } from "@/redux/reducers/common";
// import { useRouter } from "next/navigation";import { useEffect } from 'react';
// import { useRouter } from 'next/router';

export default function BackgroundPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const handleBackButton = (event) => {
      dispatch(back());
      console.log("Back button pressed");
      event.preventDefault();
    };

    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  const step: number = useSelector((state: any) => state.common.step);
  return pages[step];
}
