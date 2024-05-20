import { useState } from "react";
import '../Style-Sheets/EditImprovementDialog.css'
import { Improvement } from "../Models/Improvement";

export function EditImprovementDialog() {
  console.log('');


  return (
    <div id='editImprovementBox'>
      <div id='editImprovementLabels'>
        <label>Type</label>
        <label>Level</label>
        <label>Benefit</label>
        <label>Cost</label>
      </div>
      <div id='editImprovementButtons'>
        <button>Close</button>
        <button>Upgrade</button>
        <button>Downgrade</button>
        <button>Remove</button>
      </div>

    </div>
  )
  

}
