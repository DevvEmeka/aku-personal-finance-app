import React from "react";
import { Campaign } from "./BudgetHome";

const CampaignList: React.FC<{
  campaigns: Campaign[];
  updateCampaign: (id: string, updatedCampaign: Partial<Campaign>) => void;
  deleteCampaign: (id: string) => void;
}> = ({ campaigns, updateCampaign, deleteCampaign }) => {
  return (
    <div className="space-y-4">
      {campaigns.map((campaign) => (
        <div key={campaign.id} className="p-4 border rounded flex justify-between">
          <div>
            <h3>{campaign.name}</h3>
            <p>Max Spend: ${campaign.maxSpend}</p>
            <p>Category: {campaign.category}</p>
            <div
              className="w-6 h-6"
              style={{ backgroundColor: campaign.color }}
            ></div>
          </div>
          <div>
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded"
              onClick={() => updateCampaign(campaign.id, { maxSpend: campaign.maxSpend + 10 })}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => deleteCampaign(campaign.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampaignList;
