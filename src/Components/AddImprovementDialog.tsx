import { useState } from "react"


export function AddImprovementDialog(){

  const [ formData, setFormData ] = useState({improvement: "", resourcesProduced: {quantity: 25, type:"lemon"}, cost: ""})

  const typeOptions = [
    {
      improvement: "House",
      resourcesProduced: {
        quantity: 5,
        type: "People"
      },
      cost: [
        {
          quantity: 5,
          type: "Lumber"
        },
        {
          quantity: 5,
          type: "Grain"
        },
        {
          quantity: 5,
          type: "Water"
        },
        {
          quantity: 1,
          type: "Sheep"
        },
      ]
    },    
    {
      improvement: "Field",
      resourcesProduced: {
        quantity: 10,
        type: "Grain"
      },
      cost: [
        {
          quantity: 1,
          type: "Person"
        },
        {
          quantity: 2,
          type: "Water"
        }
      ]
    },    
    {
      improvement: "Pasture",
      resourcesProduced: {
        quantity: 5,
        type: "Sheep"
      },
      cost: [
        {
          quantity: 1,
          type: "Person"
        },
        {
          quantity: 2,
          type: "Grain"
        },
        {
          quantity: 2,
          type: "Water"
        },
      ]
    },
    {
      improvement: "Lumber Mill",
      resourcesProduced: {
        quantity: 10,
        type: "Lumber"
      },
      cost: [
        {
          quantity: 1,
          type: "Person"
        }
      ]
    },    
    {
      improvement: "Well",
      resourcesProduced: {
        quantity: 10,
        type: "Water"
      },
      cost: [
        {
          quantity: 1,
          type: "Person"
        },
        {
          quantity: 2,
          type: "Lumber"
        },
      ]
    },
  ]

  function handleSubmit() {

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
    <p>{formData.resourcesProduced.quantity}{formData.resourcesProduced.type}</p>
    <label htmlFor="cost">Cost</label>
    <p>{}</p>
    {/* <button onClick={onClose}>Cancel</button> */}
    <button type="submit">Add</button>
  </form>
  )

}