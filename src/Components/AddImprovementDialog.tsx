import { useState } from "react";

export function AddImprovementDialog() {
  return (
  <form className="addForm">
    <label htmlFor="type">Type</label>
    <select name="type" id="type">
      <option value="house">House</option>
      <option value="field">Field</option>
      <option value="pasture">Pasture</option>
      <option value="lumberMill">Lumber Mill</option>
      <option value="well">Well</option>
    </select>
    <label htmlFor="benefit">Benefit</label>
    <label htmlFor="cost">Cost</label>
    <button>Cancel</button>
    <button>Add</button>
  </form>
  );
}
