import { ChangeEvent, useState } from "react";
import { Tile } from "./Tile";
import "../StyleSheets/Map.css";
import { AddImprovementDialog } from "./AddImprovementDialog";
import { EditImprovementDialog } from "./EditImprovementDialog";
import { Improvement } from "../Models/Improvement";
interface MapProps {
  // improvements: Improvement []
OnAdd: (chosenImprovement: any) => void 
}
type Visibility = "visible" | "hidden";
export function Map({OnAdd}: MapProps) {
  const [isAddVisible, setIsAddVisible] = useState<Visibility>("hidden");
  const [isEditVisible, setIsEditVisible] = useState<Visibility>("hidden");
  
  const typeOptions: ImprovementOption[] = [
    {
      improvement: "House",
      resourcesProduced: {
        quantity: 5,
        type: "Person",
      },
      cost: [
        {
          quantity: 5,
          type: "Lumber",
        },
        {
          quantity: 5,
          type: "Grain",
        },
        {
          quantity: 5,
          type: "Water",
        },
        {
          quantity: 1,
          type: "Sheep",
        },
      ],
    },
    {
      improvement: "Field",
      resourcesProduced: {
        quantity: 10,
        type: "Grain",
      },
      cost: [
        {
          quantity: 1,
          type: "Person",
        },
        {
          quantity: 2,
          type: "Water",
        },
      ],
    },
    {
      improvement: "Pasture",
      resourcesProduced: {
        quantity: 5,
        type: "Sheep",
      },
      cost: [
        {
          quantity: 1,
          type: "Person",
        },
        {
          quantity: 2,
          type: "Grain",
        },
        {
          quantity: 2,
          type: "Water",
        },
      ],
    },
    {
      improvement: "Lumber Mill",
      resourcesProduced: {
        quantity: 10,
        type: "Lumber",
      },
      cost: [
        {
          quantity: 1,
          type: "Person",
        },
      ],
    },
    {
      improvement: "Well",
      resourcesProduced: {
        quantity: 10,
        type: "Water",
      },
      cost: [
        {
          quantity: 1,
          type: "Person",
        },
        {
          quantity: 2,
          type: "Lumber",
        },
      ],
    },
  ];
  const handleClick = (e: MouseEvent, i: number) => {
    console.log(e)
    if ((e.currentTarget as HTMLElement).className === "noImprovement") {
      setIsAddVisible("visible");
    } else {
      setIsEditVisible("visible");
    }
  };



  function handleUpgrade() {}

  function handleDowngrade() {}
  function handleRemove() {}

  return (
    <>
      <div id="map">
        {[...Array(25)].map((tile, i) => (
          <Tile
            key={i}
            // improvement={improvement}
            OnClick={(e: MouseEvent) => handleClick(e, i)}
          />
        ))}
      </div>
      <div style={{ visibility: `${isAddVisible}` }}>
        <AddImprovementDialog
          OnAdd={formData => OnAdd(formData)}
          OnCancel={() => setIsAddVisible("hidden")}
          typeOptions={typeOptions}
          
        />
      </div>
      <div style={{ visibility: `${isEditVisible}` }}>
        <EditImprovementDialog
          OnUpgrade={() => handleUpgrade}
          OnDowngrade={() => handleDowngrade}
          OnClose={() => setIsAddVisible("hidden")}
          OnRemove={() => handleRemove}
          typeOptions={typeOptions}
        />
      </div>
    </>
  );
}
