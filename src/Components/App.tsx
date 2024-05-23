import { useState } from "react";
import { Map } from "./Map";
import { ResourceView } from "./ResourcesView";
import { Resource } from "../Models/Resource";
import { Improvement } from "../Models/Improvement";
import "../StyleSheets/App.css";
import { ResourceLine } from "./ResourceLine";

export function App() {
  const [improvements, setImprovements] = useState<ImprovementOption[]>([]);
  function handleAdd( chosenImprovement : any) {
    setImprovements((prevImprovement) => [...prevImprovement, chosenImprovement]);
    console.log(improvements)
  }
  const [resources, setResources] = useState<Resource[]>([
    {
      icon: "",
      type: "People",
      amount: 1,
    },
    {
      icon: "",
      type: "Lumber",
      amount: 5,
    },
    {
      icon: "",
      type: "Grain",
      amount: 5,
    },
    {
      icon: "",
      type: "Water",
      amount: 5,
    },
    {
      icon: "",
      type: "Sheep",
      amount: 1,
    },
  ]);

  return (
    <div>
      <Map OnAdd = {handleAdd} />
      <ResourceView resources={resources} />
    </div>
  );
}
