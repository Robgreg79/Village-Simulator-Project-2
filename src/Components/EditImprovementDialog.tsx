import { FormEvent, useState } from "react";
import "../StyleSheets/EditImprovementDialog.css";
import { Improvement } from "../Models/Improvement";
import { Resource } from "../Models/Resource";

interface EditImprovementDialogProp {
  OnClose: () => void;
  OnUpgrade: () => void;
  OnDowngrade: () => void;
  OnRemove: () => void;
  typeOptions: ImprovementOption[];
  improvements: ImprovementOption;
}

export function EditImprovementDialog({
  OnClose,
  OnUpgrade,
  OnDowngrade,
  OnRemove,
  typeOptions,
  improvements
}: EditImprovementDialogProp) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <form className="editFrom" id="editImprovementBox" onSubmit={handleSubmit}>
      <div id="editImprovementLabels">
        <label>Type</label>
        <label>Level</label>
        <label>Benefit</label>
        <label>Cost</label>
      </div>
      <div id="editImprovementButtons">
        <button onClick={OnClose}>Close</button>
        <button onClick={OnUpgrade}>Upgrade</button>
        <button  disabled={improvements.level === 1} onClick={OnDowngrade}>Downgrade</button>
        <button onClick={OnRemove}>Remove</button>
      </div>
    </form>
  );
}
