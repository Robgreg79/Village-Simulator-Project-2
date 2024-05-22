

type ResourceType = "Person" | "Lumber" | "Grain" | "Sheep" | "Water";

type ResourceCost = {
    quantity: number;
    type: ResourceType;
  };
  
interface ImprovementOption {
  improvement: string;
  resourcesProduced: {
    quantity: number;
    type: ResourceType;
  };
  cost: ResourceCost [];
}

