import { useState } from "react";
import '../Style-Sheets/EditImprovementDialog.css'

export function EditImprovementDialog() {
  console.log('');


  return (
    <div id='editImprovement'>
      <label>Type</label>
      <label>Level</label>
      <label>Benefit</label>
      <label>Cost</label>
      <div>
        <button>Close</button>
        <button>Upgrade</button>
        <button>Downgrade</button>
        <button>Remove</button>
      </div>

    </div>
  )
  

}
