import { ChangeEvent, useState } from "react";
import { EditImprovementDialog } from "./EditImprovementDialog";
import { AddImprovementDialog } from "./AddImprovementDialog";
import "../StyleSheets/Tile.css";
import { Improvement } from "../Models/Improvement";
interface TileProps {
  improvement: Improvement;
  OnAdd: (index: number, type: string) => void;
  OnEdit: (index: number) => void;
}

export function Tile(this: any, { improvement, OnAdd, OnEdit }: TileProps) {
  
    const [isAddVisible, setIsAddVisible] = useState("none");
    const [isEditVisible, setIsEditVisible] = useState("none");

    const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
      const index = (e.target[i]);
      if (e.target.className === "noImprovement") {
        return OnAdd(index, improvement.type), setIsAddVisible("block");
        
      } else {
        return OnEdit(index), setIsEditVisible("block");
        
      }
    };
    return (
      <>
        <div className="noImprovement" id="tile" onClick={handleClick}></div>
        <div style= {{display: `${isAddVisible}`}}><AddImprovementDialog /></div>
        <div style= {{display: `${isEditVisible}`}}><EditImprovementDialog /></div>
      </>
    );
  }
}
