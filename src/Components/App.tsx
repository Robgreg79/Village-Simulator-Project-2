import { useState } from "react";
import { Map } from "./Map";
import { ResourceView } from "./ResourcesView";
import "../StyleSheets/App.css";

export function App() {
  return (
    <div>
      <Map />
      <ResourceView />
    </div>
  );
}
