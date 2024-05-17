import { useState } from "react";

interface Resource {
  icon: HTMLImageElement,
  type: string,
  amount: number
};

interface ResourceLineProps {
  resource: Resource
};

export function ResourceLine () {

    const [resource, setResource] = useState(['People', 'Grain', 'Sheep', 'Lumber', 'Water'])

  return (
    <div className="resource-line">
      {/* <span>{resource.type} {resource.amount}</span> */}
    </div>
  )

}
