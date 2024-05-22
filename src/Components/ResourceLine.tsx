import { useState } from "react";
import { Resource } from "../Models/Resource";

interface ResourceLineProps {
  resource: Resource;
}

export function ResourceLine({ resource }: ResourceLineProps) {
  return (
    <tr className="resource-line">
      <td className="resource-left">
        {/* <img src={}>{resource.icon}</img> */}
        {resource.type}{" "}
      </td>
      <td className="resource-right">{resource.amount}</td>
    </tr>
  );
}
