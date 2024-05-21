import { useState } from "react";
import { Tile } from "./Tile";
import "../StyleSheets/Map.css";
import { AddImprovementDialog } from "./AddImprovementDialog";
import { EditImprovementDialog } from "./EditImprovementDialog";
export function Map() {
  
  
  function handleAdd(index) {
    
  }

  function handleEdit(index) {
  }

  return (
    <>
      <div id="map">
        {[...Array(25)].map((_, index) => (
          <Tile key={index} OnAdd= {()=> handleAdd(index)} OnEdit= {() => handleEdit(index)} />
        ))}
      </div>
    </>
  );
}
