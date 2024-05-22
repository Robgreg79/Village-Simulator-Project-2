import { useState } from "react";
import "../StyleSheets/EditImprovementDialog.css";
import { Improvement } from "../Models/Improvement";
import { Resource } from "../Models/Resource";
interface EditImprovementDialogProp {
  OnClose: () => void;
  OnUpgrade: () => void;
  OnDowngrade: () => void;
  OnRemove: () => void;
  typeOptions: ImprovementOption[];
}

export function EditImprovementDialog({
  OnClose,
  OnUpgrade,
  OnDowngrade,
  OnRemove,
  typeOptions,
}: EditImprovementDialogProp) {
  console.log("");

  return (
    <div className="editFrom" id="editImprovementBox">
      <div id="editImprovementLabels">
        <label>Type</label>
        <label>Level</label>
        <label>Benefit</label>
        <label>Cost</label>
      </div>
      <div id="editImprovementButtons">
        <button onClick={OnClose}>Close</button>
        <button onClick={OnUpgrade}>Upgrade</button>
        <button onClick={OnDowngrade}>Downgrade</button>
        <button onClick={OnRemove}>Remove</button>
      </div>
    </div>
  );
}
