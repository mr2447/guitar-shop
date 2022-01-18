// 1. Import classes
// ==================

import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

// Import any actions required for transformations.
import {fill} from "@cloudinary/url-gen/actions/resize";

const CloudImages = () => {


  // 2. Set your cloud name
  //========================

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'daz0iuak1'
    }
  });
  // https://api.cloudinary.com/v1_1/${daz0iuak1}/${477493591586566}/upload

  // 3. Get your image
  //===================

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image('v1642471913/x7fuzlrvx0ave3qgbf5t'); 
  const myImage2 = cld.image('v1642467506/Screen_Shot_2022-01-12_at_4.09.31_AM_qio5jh');
  const myImage3 = cld.image('v1642482826/ykmojmj90y3nllfi4wze')

  // 4. Transform your image
  //=========================

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(250).height(250));
  myImage2.resize(fill().width(250).height(250));
  myImage3.resize(fill().width(250).height(250));
  // 5. Deliver your image
  // =========================

  // Render the image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
      <AdvancedImage cldImg={myImage2} />
      <AdvancedImage cldImg={myImage3} />
    </div>
  )

};

export default CloudImages