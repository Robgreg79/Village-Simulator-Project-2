import { ChangeEvent, useState } from "react";
import { Tile } from "./Tile";
import "../StyleSheets/Map.css";
import { AddImprovementDialog } from "./AddImprovementDialog";
import { EditImprovementDialog } from "./EditImprovementDialog";
import { Improvement } from "../Models/Improvement";
import HouseIcon from "../assets/HouseIcon.png";
import FieldIcon from "../assets/FieldIcon.png";
import PastureIcon from "../assets/PastureIcon.png";
import LumberMillIcon from "../assets/LumberMillIcon.png";
import WellIcon from "../assets/WellIcon.png";

interface MapProps {
  improvements: ImprovementOption[];
  OnAdd: (i:number , chosenImprovement: any) => void;
  OnUpgrade: (i:number) => void;
  OnDowngrade: (i:number)=> void
}
type Visibility = "visible" | "hidden";
export function Map({ OnAdd, OnUpgrade,OnDowngrade, improvements }: MapProps) {
  const [isAddVisible, setIsAddVisible] = useState<Visibility>("hidden");
  const [isEditVisible, setIsEditVisible] = useState<Visibility>("hidden");
  const [clickedI, setClickedI] = useState<number>(0);
  const typeOptions: ImprovementOption[] = [
    {
      icon: HouseIcon,
      improvement: "House",
      level: 0,
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
      icon: FieldIcon,
      improvement: "Field",
      level: 0,
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
      icon: PastureIcon,
      improvement: "Pasture",
      level: 0,
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
      icon: LumberMillIcon,
      improvement: "Lumber Mill",
      level: 0,
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
      icon: WellIcon,
      improvement: "Well",
      level: 0,
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

  const handleClick = (e: MouseEvent, i: any) => {
    console.log(e);
    if ((e.target as HTMLElement).className === "noImprovements") {
      setIsAddVisible("visible");
      setClickedI(i)
      
      
    } else {
      setIsEditVisible("visible");
      setClickedI(i)
    }
  };

  function handleRemove() {}
  console.log(clickedI)
  return (
    <>
      <div id="map">
        {[...Array(25)].map((_, i) => (
          <Tile
            key={i}
            improvements={improvements[i]}
            OnClick={(e: MouseEvent) => handleClick(e, i)}
          />
         ))} 
      </div>
      <div style={{ visibility: `${isAddVisible}` }}>
        <AddImprovementDialog
          OnAdd={(formData) => {
            OnAdd(clickedI, formData), setIsAddVisible("hidden");
          }}
          OnCancel={() => setIsAddVisible("hidden")}
          typeOptions={typeOptions}
        />
      </div>
      <div style={{ visibility: `${isEditVisible}` }}>
        <EditImprovementDialog
          OnUpgrade={() => {OnUpgrade(clickedI)}}
          OnDowngrade={() => {OnDowngrade(clickedI)}}
          OnClose={() => setIsAddVisible("hidden")}
          OnRemove={() =>{handleRemove}}
          typeOptions={typeOptions}
          improvements={improvements}
        />
      </div>
    </>
    
  );

}
