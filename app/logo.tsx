"use client";
import { useId } from "react";

export function Logo() {
  const id = useId();

  return <img src="https://wyseos.com/images/logo.svg" alt="" />;
}
