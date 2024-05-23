import { FormEvent, useState } from "react";
import { Resource } from "../Models/Resource";
import "../StyleSheets/AddImprovementDialog.css";

interface AddImprovementDialogProps {
  OnAdd: (chosen: any) => void;
  OnCancel: () => void;
  typeOptions: ImprovementOption[];
}

export function AddImprovementDialog({
  OnAdd,
  OnCancel,
  typeOptions,
}: AddImprovementDialogProps) {
  const [improvement, setImprovement] = useState<ImprovementOption>(typeOptions[0]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    OnAdd( improvement )
    console.log(improvement);
  }

  return (
    <form onSubmit={handleSubmit} className="addForm">
      <label htmlFor="type">Improvement Type</label>
      <br />
      <select
        name="type"
        id="type"
        onChange={(value) =>
          setImprovement(
            typeOptions.find(
              (option) => value.target.value === option.improvement
            ) || typeOptions[0] 
          )
        }
      >
        <option value="House">House</option>
        <option value="Field">Field</option>
        <option value="Pasture">Pasture</option>
        <option value="Lumber Mill">Lumber Mill</option>
        <option value="Well">Well</option>
      </select>
      <br />
      <img
        id="typeIcon"
        style={{ height: "60px", padding: "8px" }}
        src={improvement.icon}
      />{" "}
      <br />
      <label htmlFor="benefit">Benefit</label>
      <br />
      <p>
        {improvement.resourcesProduced.quantity} {improvement.resourcesProduced.type}
      </p>
      <label htmlFor="cost">Cost</label>
      <br />
      {improvement.cost.map((costItem: ResourceCost, index: number) => (
        <p key={index}>
          {costItem.quantity} {costItem.type}
        </p>
      ))}
      <button id="cancel" type= "button" onClick={OnCancel}>
        Cancel
      </button>
      <button
        id="add"
        type="submit"
      >
        Add
      </button>
    
    </form>
  );
}
