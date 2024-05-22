import { ResourceLine } from "./ResourceLine";
import { useState } from "react";
import { Resource } from "../Models/Resource";

export function ResourceView({ resources }: { resources: Resource[] }) {
  return (
    <table>
      <tr>
        <th>Resource</th>
        <th>Available</th>
      </tr>

      {resources.map((resource, index) => (
        <ResourceLine key={index} resource={resource} />
      ))}
    </table>
  );
}
