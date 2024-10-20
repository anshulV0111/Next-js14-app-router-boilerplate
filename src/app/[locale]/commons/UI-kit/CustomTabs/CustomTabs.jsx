'use client';

import './CustomTabsStyle.scss';
import React, { useState } from 'react';

function CustomTabs({ tabData, initIndex = 0 }) {
  const [activeTab, setActiveTab] = useState(tabData?.[initIndex]?.id);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="custom-tabs">
      <div className="tab-nav-box">
        {tabData?.map((item) => (
          <button
            key={item?.id}
            type="button"
            className={`tab-button ${
              activeTab === item?.id
                ? 'tab-button-active'
                : ''
            }`}
            onClick={() => handleTabChange(item?.id)}
          >
            {item?.title}
          </button>
        ))}
      </div>
      {tabData?.map((item) => (
        <div
          key={`tab-content-${item?.id}`}
          className={`tab-content-${item?.id} ${
            activeTab === item?.id ? 'block' : 'hidden'
          }`}
        >
          {item?.renderComponent}
        </div>
      ))}
    </div>
  );
}

export default CustomTabs;
