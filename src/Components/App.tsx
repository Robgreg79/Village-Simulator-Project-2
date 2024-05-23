import { useState } from "react";
import { Map } from "./Map";
import { ResourceView } from "./ResourcesView";
import { Resource } from "../Models/Resource";
import { Improvement } from "../Models/Improvement";
import "../StyleSheets/App.css";
import { ResourceLine } from "./ResourceLine";
import PersonIcon from "../assets/PersonIcon.png";
import LumberIcon from "../assets/LumberIcon.png";
import GrainIcon from "../assets/GrainIcon.png";
import WaterIcon from "../assets/WaterIcon.png";
import SheepIcon from "../assets/SheepIcon.png";

export function App() {
  const [resources, setResources] = useState<Resource[]>([
    {
      icon: PersonIcon,
      type: "People",
      amount: 5,
    },
    {
      icon: LumberIcon,
      type: "Lumber",
      amount: 5,
    },
    {
      icon: GrainIcon,
      type: "Grain",
      amount: 5,
    },
    {
      icon: WaterIcon,
      type: "Water",
      amount: 5,
    },
    {
      icon: SheepIcon,
      type: "Sheep",
      amount: 1,
    },
  ]);
  const [improvements, setImprovements] = useState<ImprovementOption[]>([]);
  function handleAdd(i: number, chosenImprovement: ImprovementOption) {
    setImprovements((prevImprovement) => [
      ...prevImprovement,
      chosenImprovement,
    ]);
    // handleCost(i, chosenImprovement

  }
  function handleCost(i: number, chosenImprovement: ImprovementOption) {
    setResources((prevResources) => {
      const prevResource = prevResources[i];
      let newResources = { ...prevResource ,
      amount: prevResource }
      // chosenImprovement.cost.forEach((cost) => {
      //   newResources.amount -= cost.quantity;
      // });
      return [
        ...prevResources.slice(0, i),
        newResources,
        ...prevResources.slice(i + 1),
      ];
    });
  }
  function handleUpgrade(i: number) {
    setImprovements((prevLevels) => {
      const prevLevel = prevLevels[i];
      let newLevel = {
        ...prevLevel,
        level: prevLevel.level + 1,
      };
      return [...prevLevels.slice(0, i), newLevel, ...prevLevels.slice(i + 1)];
    });
  }
  function handleDowngrade(i: number) {
    setImprovements((prevLevels) => {
      const prevLevel = prevLevels[i];
      let newLevel = {
        ...prevLevel,
        level: prevLevel.level - 1,
      };
      return [...prevLevels.slice(0, i), newLevel, ...prevLevels.slice(i + 1)];
    });
  }
  console.log(improvements);
  console.log(resources);
  return (
    <div>
      <Map
        improvements={improvements}
        OnAdd={handleAdd}
        OnUpgrade={(i) => {
          handleUpgrade(i);
        }}
        OnDowngrade={(i) => {
          handleDowngrade(i);
        }}
      />

      <ResourceView resources={resources} />
    </div>
  );
}
