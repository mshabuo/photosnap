import React from "react"

export default function Social() {
  return (
    <div className="Social-Banner">
      <div className="Social-Banner-Items">
        <img
          src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/responsive.svg"
          alt="logo"
        />
        <h6>100% Responsive</h6>
        <p>
          No matter which device you're on, our site is fully responsive and
          stories look beautiful on any screen.
        </p>
      </div>
      <div className="Social-Banner-Items">
        <img
          src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/infinity.svg"
          alt="logo"
          className="Social-Banner-Items-Mid"
        />
        <h6>No Photo Upload Limit</h6>
        <p>
          Our tool has no limits on uploads or bandwidth, Freely upload in bulk
          and share all of your stories in one go
        </p>
      </div>
      <div className="Social-Banner-Items">
        <img
          src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/social.svg"
          alt="logo"
        />
        <h6>Available to Embed</h6>
        <p>
          Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
          videos, Google Maps, and more.
        </p>
      </div>
    </div>
  )
}
