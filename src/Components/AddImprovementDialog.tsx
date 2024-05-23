import { FormEvent, useState } from "react";
import { Resource } from "../Models/Resource";
import "../StyleSheets/AddImprovementDialog.css";


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
      <div className="form-row">
        <label className="form-left-side" htmlFor="type">Type</label>
        <select className="form-right-side" name="type" id="type" onChange={(e) => setFormData(typeOptions.find(option => e.target.value === option.improvement))}>
          {typeOptions.map(option => (
            <option key={option.improvement} value={option.improvement}>{option.improvement}</option>
          ))}
        </select>
      </div>
      <div className="form-row">
        <label className="form-left-side" htmlFor="benefit">Benefit</label>
        <span className="form-right-side">{formData.resourcesProduced.quantity} {formData.resourcesProduced.type}</span>
      </div>
      <div className="form-row">
        <label className="form-left-side" htmlFor="cost">Cost</label>
        <ul className="form-right-side">
          {formData.cost.map((costItem, index) => (
            <li key={index}>{costItem.quantity} {costItem.type}</li>
          ))}
        </ul>
      </div>
      <div className="form-row">
        <button className="cancel" type="button" onClick={OnCancel}>
          Cancel
        </button>
        <button type="submit">
          Add
        </button>
      </div>
    </form>
  );
}