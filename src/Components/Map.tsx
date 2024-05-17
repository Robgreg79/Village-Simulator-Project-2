import { useState } from "react";
import { Tile } from "./Tile";
import "../StyleSheets/Map.css";
export function Map() {
  return (
    <>
      <div id="map">
        {[...Array(25)].map((_, index) => (
          <Tile key={index} />
        ))}
      </div>
    </>
  );
}
