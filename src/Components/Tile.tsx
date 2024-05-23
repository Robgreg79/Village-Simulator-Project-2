import { ChangeEvent, useState } from "react";
import { EditImprovementDialog } from "./EditImprovementDialog";
import { AddImprovementDialog } from "./AddImprovementDialog";
import "../StyleSheets/Tile.css";
import { Improvement } from "../Models/Improvement";
interface TileProps {
  improvements: ImprovementOption;
  OnClick: (e: any) => void;
}

export function Tile({ improvements, OnClick }: TileProps) {
  return (
    <>
      <div
       id="tile"
        className={improvements ? "hasImprovements" : "noImprovements"}
        onClick={OnClick}
      >
        {improvements && (
          <div className="improvement">
            <span className={improvements.improvement} />
            <img
              className={improvements.improvement}
              src={improvements.icon}
            ></img>
          </div>
        )}
      </div>
    </>
  );
}
