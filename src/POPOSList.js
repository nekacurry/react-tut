// src/POPOSList.js

import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';


function POPOSList() {
  return (
    <div className="POPOSList">
      <POPOSSpace
        name="50 California St."
        address="50 California St."
        image="50-california-st.jpg"
      />
      <POPOSSpace 
        name="100 Pine St."
        address="100 Pine St."
        image="100-pine.jpg"
      />
      <POPOSSpace 
        name="101 California St."
        address="101 California St."
        image="101-california.jpg"
      />
      <POPOSSpace 
        name="343 Sansome Roof Garden"
        address="343 Sansome Ave."
        image="343-sansome-roof-garden.jpg"
      />
      <POPOSSpace 
        name="555 California St."
        address="555 California St."
        image="555-california.jpg"
      />
      <POPOSSpace
        name="Citigroup Center"
        address="346 Plaza Rd."
        image="citigroup-center.jpg"
      />
    </div>
  )
}

export default POPOSList