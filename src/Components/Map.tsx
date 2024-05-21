import { ChangeEvent, useState } from "react";
import { Tile } from "./Tile";
import "../StyleSheets/Map.css";
import { AddImprovementDialog } from "./AddImprovementDialog";
import { EditImprovementDialog } from "./EditImprovementDialog";
import { Improvement } from "../Models/Improvement";
// interface MapProps {
//   improvement: Improvement;
// }
type Visibility = 'visible' | 'hidden';
export function Map() {
  const [isAddVisible, setIsAddVisible] = useState<Visibility>('hidden');
  const [isEditVisible, setIsEditVisible] = useState<Visibility>('hidden');

  const handleClick = (e: MouseEvent, index: number) => {
    console.log(e);
    if ((e.currentTarget as HTMLElement).className === "noImprovement") {
      setIsAddVisible("visible");
    } else {
      setIsEditVisible("visible");
    }
  };

  function handleAdd() {}

  function handleEdit() {}

  function handleCancel() {}
  //(index, improvement.type)
  function handleClose() {}
  return (
    <>
      <div id="map">
        {[...Array(25)].map((_, index) => (
          <Tile
            key={`tile-${index}`}
            // improvement={improvement}
            OnClick={(e: MouseEvent) => handleClick(e, index)}
          />
        ))}
      </div>
      <div style={{ visibility: `${isAddVisible}` }}>
        <AddImprovementDialog
        // OnAdd={() => handleAdd}
        // OnCancel={() => handleCancel}
        />
      </div>
      <div style={{ visibility: `${isEditVisible}` }}>
        <EditImprovementDialog
        // OnEdit={() => handleEdit}
        // OnClose={() => handleClose}
        />
      </div>
    </>
  );
}
