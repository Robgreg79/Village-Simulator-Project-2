import { useState } from "react";
import { Map } from "./Map";
import { ResourceView } from "./ResourcesView";
import { Resource } from "../Models/Resource";
import { Improvement } from "../Models/Improvement";
import "../StyleSheets/App.css";
import { ResourceLine } from "./ResourceLine";
import PersonIcon from '../Assets/PersonIcon.png';
import LumberIcon from '../Assets/LumberIcon.png';
import GrainIcon from '../Assets/GrainIcon.png';
import WaterIcon from '../Assets/WaterIcon.png';
import SheepIcon from '../Assets/SheepIcon.png'

export function App() {
  const [resources, setResources] = useState<Resource[]>([
    {
      icon: PersonIcon,
      type: "People",
      amount: 1,
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

 const [improvements, setImprovements] = useState<Improvement[]>([])
  return (
    <div>
      <Map improvements ={improvements} />
      <ResourceView resources={resources} />
    </div>
  );
}
