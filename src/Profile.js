import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Profile() {
  return (
    <div className="social-container">
        <SocialIcon url="https://www.linkedin.com/in/Pratyush2710/" style={{ height: 40, width: 40 , margin: 10}}/>
        <SocialIcon url="https://github.com/Pratyush2710" style={{ height: 40, width: 40 ,margin: 10}} bgColor="black"/>
        <SocialIcon url="https://www.youtube.com/channel/UCe8FEKp8Ym1QyR8K0L49I9Q" style={{ height: 40, width: 40 ,margin: 10}}/>
        <SocialIcon url="https://www.facebook.com/Pratyush.music" style={{ height: 40, width: 40 ,margin: 10}}/>     
    </div>
  );
}