import { FormEvent, useState } from "react";
import { Resource } from "../Models/Resource";
interface AddImprovementDialogProps {
  OnAdd: () => void;
  OnCancel: () => void;
  typeOptions: ImprovementOption []
  };

export function AddImprovementDialog({
  OnAdd,
  OnCancel,
  typeOptions,
}: AddImprovementDialogProps) {
  const [formData, setFormData] = useState<ImprovementOption>({
    improvement: "House",
    resourcesProduced: { quantity: 5, type: "Person" },
    cost: [{
      quantity: 0,
      type: "Person"
    }],
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }
  
  //can map over options from array - value can be type
  //typeOptions.map
  return (
    <form onSubmit={handleSubmit} className="addForm">
      <label htmlFor="type">Type</label>
      <select name="type" id="type">
        <option value="house">House</option>
        <option value="field">Field</option>
        <option value="pasture">Pasture</option>
        <option value="lumberMill">Lumber Mill</option>
        <option value="well">Well</option>
      </select>
      <label htmlFor="benefit">Benefit</label>
      <p>
        {formData.resourcesProduced.quantity}
        {formData.resourcesProduced.type}
      </p>
      <label htmlFor="cost">Cost</label>
      <p>{}</p>
      {/* <button onClick={onClose}>Cancel</button> */}
      <button id="cancel" type="submit" onClick={OnCancel}>
        Cancel
      </button>
      <button id="add" type="submit" onClick={OnAdd}>
        Add
      </button>
    </form>
  );
}
