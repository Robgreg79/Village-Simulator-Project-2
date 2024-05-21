import { useState } from "react";
import { Map } from "./Map";
import { ResourceView } from "./ResourcesView";
import { Resource } from "../Models/Resource";
import { Improvement } from "../Models/Improvement";
import "../StyleSheets/App.css";
import { ResourceLine } from "./ResourceLine";

export function App() {

  const [resources, setResources] = useState<Resource[]>
  ([
    {
      icon: "",
      type: "People",
      amount: 1
    },
    {
      icon: "",
      type: "Lumber",
      amount: 5
    },
    {
      icon: "",
      type: "Grain",
      amount: 5
    },
    {
      icon: "",
      type: "Water",
      amount: 5
    },
    {
      icon: "",
      type: "Sheep",
      amount: 1
    }
  ]) 

  return (
    <div>
      <Map />
      <ResourceView resources={resources}/>
    </div>
  );
}
