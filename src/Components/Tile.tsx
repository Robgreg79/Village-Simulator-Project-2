import { ChangeEvent, useState } from "react";
import { EditImprovementDialog } from "./EditImprovementDialog";
import { AddImprovementDialog } from "./AddImprovementDialog";
import "../StyleSheets/Tile.css";
import { Improvement } from "../Models/Improvement";
interface TileProps {
  // improvement: Improvement;
  OnClick: (e) => void;
}

export function Tile({ OnClick }: TileProps) {
  return (
    <>
      <div className="noImprovement" onClick={OnClick}></div>
    </>
  );
}
