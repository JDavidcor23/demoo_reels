import React from "react";
import { CardsRender } from "../CardsRender";
import { CardsVideo } from "../CardsVideo";

export const Cards = (props) => {
  if ("render" === props.typeCards) {
    return <CardsRender {...props} />;
  }
  if ("demo_reel" === props.typeCards) {
    return <CardsVideo {...props} />;
  }
};
