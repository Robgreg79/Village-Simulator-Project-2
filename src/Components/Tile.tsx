import { ChangeEvent, useState } from "react";
import { EditImprovementDialog } from "./EditImprovementDialog";
import { AddImprovementDialog } from "./AddImprovementDialog";
import "../StyleSheets/Tile.css";
import { Improvement } from "../Models/Improvement";
interface TileProps {
  improvements: ImprovementOption[];
  OnClick: (e: any) => void;
}

export function Tile({ improvements,OnClick }: TileProps) {
  return (
    <>
      <div className= {improvements.improvement} onClick={OnClick}></div>
    </>
  );
}
