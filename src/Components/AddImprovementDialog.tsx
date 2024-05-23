import { FormEvent, useState } from "react";
import { Resource } from "../Models/Resource";
interface AddImprovementDialogProps {
  OnAdd: (chosen: any) => void;
  OnCancel: () => void;
  typeOptions: ImprovementOption []
  };

export function AddImprovementDialog({
  OnAdd,
  OnCancel,
  typeOptions,
}: AddImprovementDialogProps) {

  const [formData, setFormData] = useState<ImprovementOption>(typeOptions[0]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    OnAdd({formData})
    console.log(formData)
  }
  
  return (
    <form onSubmit={handleSubmit} className="addForm">
    <label htmlFor="type">Type</label><br />
    <select name="type" id="type" onChange={(value) => setFormData(typeOptions.find(option => value.target.value === option.improvement))}>
      <option value="House">House</option>
      <option value="Field">Field</option>
      <option value="Pasture">Pasture</option>
      <option value="Lumber Mill">Lumber Mill</option>
      <option value="Well">Well</option>
    </select><br />
    <label htmlFor="benefit">Benefit</label><br /> 
    <p>{formData.resourcesProduced.quantity} {formData.resourcesProduced.type}</p>
    <label htmlFor="cost">Cost</label><br />
    {formData.cost.map((costItem: ResourceCost, index :number) => (
        <p key={index}>{costItem.quantity} {costItem.type}</p>
      ))}
      <button id="cancel" type="submit" onClick={OnCancel}>
        Cancel
      </button>
      <button id="add" type="submit" onClick= {OnAdd}>
        Add
      </button>
    </form>
  );
}