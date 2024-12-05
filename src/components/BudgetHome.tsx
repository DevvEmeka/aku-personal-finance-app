// import React, { useState, useEffect } from "react";
// import BudgetForm from "./BudgetForm";
// import CampaignList from "./CampaignList";

// export type Campaign = {
//   id: string;
//   name: string;
//   color: string;
//   maxSpend: number;
//   category: "Entertainment" | "Bills" | "Dining out" | "Personal care";
// };

// const BudgetHome: React.FC = () => {
//   const [campaigns, setCampaigns] = useState<Campaign[]>([]);

//   // Load data from localStorage
//   useEffect(() => {
//     const savedCampaigns = localStorage.getItem("campaigns");
//     if (savedCampaigns) {
//       setCampaigns(JSON.parse(savedCampaigns));
//     }
//   }, []);

//   // Sync data to localStorage
//   useEffect(() => {
//     localStorage.setItem("campaigns", JSON.stringify(campaigns));
//   }, [campaigns]);

//   const addCampaign = (newCampaign: Campaign) => {
//     setCampaigns((prev) => [...prev, newCampaign]);
//   };

//   const updateCampaign = (id: string, updatedCampaign: Partial<Campaign>) => {
//     setCampaigns((prev) =>
//       prev.map((campaign) =>
//         campaign.id === id ? { ...campaign, ...updatedCampaign } : campaign
//       )
//     );
//   };

//   const deleteCampaign = (id: string) => {
//     setCampaigns((prev) => prev.filter((campaign) => campaign.id !== id));
//   };

//   return (
//     <div className="p-6">
//       <BudgetForm addCampaign={addCampaign} />
//       <CampaignList
//         campaigns={campaigns}
//         updateCampaign={updateCampaign}
//         deleteCampaign={deleteCampaign}
//       />
//     </div>
//   );
// };

// export default BudgetHome;



import React, { useState } from "react";
import BudgetForm from "./BudgetForm";
import CampaignList from "./CampaignList";

export type Campaign = {
  id: string;
  name: string;
  color: string;
  maxSpend: number;
  category: "Entertainment" | "Transportation" | "Personal Care" | "Education" | "Lifestyle" | "Bills" | "Dining out" | "General";
};

const BudgetHome: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [usedColors, setUsedColors] = useState<string[]>([]);

  const addCampaign = (newCampaign: Campaign) => {
    setCampaigns((prev) => [...prev, newCampaign]);
  };

  const updateUsedColors = (color: string, action: "add" | "remove") => {
    setUsedColors((prev) =>
      action === "add" ? [...prev, color] : prev.filter((col) => col !== color)
    );
  };

  const deleteCampaign = (id: string) => {
    const campaignToDelete = campaigns.find((c) => c.id === id);
    if (campaignToDelete) {
      updateUsedColors(campaignToDelete.color, "remove"); // Free up the color
    }
    setCampaigns((prev) => prev.filter((campaign) => campaign.id !== id));
  };

  return (
    <div className="p-6">
      <BudgetForm
        addCampaign={addCampaign}
        usedColors={usedColors}
        updateUsedColors={updateUsedColors}
      />
      <CampaignList campaigns={campaigns} deleteCampaign={deleteCampaign} />
    </div>
  );
};

export default BudgetHome;
