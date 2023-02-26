import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`MUDr. Blandína Lipková, PhD.`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(4),
            height: rhythm(4),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          MUDr. Blandína Lipková, PhD. Súkromná očná ambulancia v Žiline <br />
          speaks: 🇸🇰 🇬🇧 🇩🇪 🇮🇹
        </p>
      </div>
    );
  }
}

export default Bio;
