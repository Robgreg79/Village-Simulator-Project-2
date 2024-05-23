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
  function handleAdd(chosenImprovement: ImprovementOption, index: number) {
    handleCost(chosenImprovement);
    handleBenefits(chosenImprovement);
    setImprovements((prevImprovement) => {
      const updatedImprovements = [...prevImprovement];
      updatedImprovements[index] = chosenImprovement;
      return updatedImprovements;
    });
  }

  function handleCost(chosenImprovement: ImprovementOption) {
    setResources((prevResources) => {
      const updatedResources = [...prevResources];

      if (chosenImprovement.improvement === "House") {
        updatedResources[1].amount -= chosenImprovement.cost[0].quantity;
        updatedResources[2].amount -= chosenImprovement.cost[1].quantity;
        updatedResources[3].amount -= chosenImprovement.cost[2].quantity;
        updatedResources[4].amount -= chosenImprovement.cost[3].quantity;
        return updatedResources;
      } else if (chosenImprovement.improvement === "Field") {
        updatedResources[0].amount -= chosenImprovement.cost[0].quantity;
        updatedResources[3].amount -= chosenImprovement.cost[1].quantity;
        return updatedResources;
      } else if (chosenImprovement.improvement === "Pasture") {
        updatedResources[0].amount -= chosenImprovement.cost[0].quantity;
        updatedResources[2].amount -= chosenImprovement.cost[1].quantity;
        updatedResources[3].amount -= chosenImprovement.cost[2].quantity;
        return updatedResources;
      } else if (chosenImprovement.improvement === "Lumber Mill") {
        updatedResources[0].amount -= chosenImprovement.cost[0].quantity;
        return updatedResources;
      } else if (chosenImprovement.improvement === "Well") {
        updatedResources[0].amount -= chosenImprovement.cost[0].quantity;
        updatedResources[1].amount -= chosenImprovement.cost[1].quantity;
        return updatedResources;
      }
    });
  }
  function handleBenefits(chosenImprovement: ImprovementOption) {
    setResources((prevResources) => {
      const updatedResources = [...prevResources];
      if (chosenImprovement.improvement === "House") {
        updatedResources[0].amount +=
          chosenImprovement.resourcesProduced.quantity;

        return updatedResources;
      } else if (chosenImprovement.improvement === "Field") {
        updatedResources[2].amount +=
          chosenImprovement.resourcesProduced.quantity;
        return updatedResources;
      } else if (chosenImprovement.improvement === "Pasture") {
        updatedResources[4].amount +=
          chosenImprovement.resourcesProduced.quantity;
        return updatedResources;
      } else if (chosenImprovement.improvement === "Lumber Mill") {
        updatedResources[1].amount +=
          chosenImprovement.resourcesProduced.quantity;
      } else if (chosenImprovement.improvement === "Well") {
        updatedResources[3].amount +=
          chosenImprovement.resourcesProduced.quantity;
      }
    });
  }

  // setResources((prevResources) => {
  //   const updatedResources = [...prevResources];
  //   chosenImprovement.cost.forEach((cost) => {
  //     const index = updatedResources.findIndex((resource) => resource.type === cost.type);
  //     updatedResources[index].amount -= cost.quantity;
  //   });
  //   return updatedResources;
  // })};
  //   setResources((prevResources) => {
  //     const resourceIndex = prevResources.findIndex(
  //       (resource) => resource.type === chosenImprovement.cost[].type
  //     );
  //     let updatedResource = { ...prevResources[resourceIndex] };
  //     chosenImprovement.cost.forEach((cost) => {
  //       updatedResource.amount -= cost.quantity;
  //     });
  //     const updatedResources = [...prevResources];
  //     updatedResources[resourceIndex] = updatedResource;

  //     return updatedResources;
  //   });
  // }

  function handleUpgrade(i: number) {
    setImprovements((prevLevels) => {
      const prevLevel = prevLevels[i];
      let newLevel = {
        ...prevLevel,
        level: prevLevel.level++,
      };
      return [...prevLevels.slice(0, i), newLevel, ...prevLevels.slice(i + 1)];
    });
  }
  function handleDowngrade(i: number) {
    setImprovements((prevLevels) => {
      const prevLevel = prevLevels[i];
      let newLevel = {
        ...prevLevel,
        level: prevLevel.level--,
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
