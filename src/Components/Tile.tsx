import { useState } from "react";
import { EditImprovementDialog } from "./EditImprovementDialog";
import { AddImprovementDialog } from "./AddImprovementDialog";
import "../StyleSheets/Tile.css";
import { Improvement } from "../Models/Improvement";
interface TileProps {
  improvement: Improvement;
  OnAdd: () => void;
}
export function Tile({ improvement, OnAdd }: TileProps) {
  return (
    <>
      <div id="tile" onClick={OnAdd}></div>
    </>
  );
}
