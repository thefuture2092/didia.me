import React from 'react';
import useScript from 'react-script-hook';

const FollowButtons = () => {
  useScript({src: 'https://platform.twitter.com/widgets.js'});

  return (
    <div>
      <a
        href="https://twitter.com/didia_aristote?ref_src=twsrc%5Etfw"
        className="twitter-follow-button"
        data-size="large"
        data-show-count="false"
      >
        Follow @didia_aristote
      </a>
    </div>
  );
};

export default FollowButtons;
