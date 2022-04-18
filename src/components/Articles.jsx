import React from "react"
import { Link } from "react-router-dom"

export default function Articles() {
  const articles = [
    {
      title: "The Mountains",
      author: "John Applessed",
      url: "https://ice-nas.fra1.digitaloceanspaces.com/development/play/mountains.jpg",
    },
    {
      title: "Sunset Cityscapes",
      author: "Benjamin Cruz",
      url: "https://ice-nas.fra1.digitaloceanspaces.com/development/play/cityscape.jpg",
    },
    {
      title: "18 Days Voyage",
      author: "Alexei Bordodin",
      url: "https://ice-nas.fra1.digitaloceanspaces.com/development/play/hiker.jpg",
    },
    {
      title: "Architecturals",
      author: "Samantha Brooke",
      url: "https://ice-nas.fra1.digitaloceanspaces.com/development/play/building.jpg",
    },
  ]

  return (
    <>
      <div className="Article-One-Container">
        <div className="Article-One-Item">
          <h2>CREATE AND SHARE YOUR PHOTO STORIES</h2>
          <p>
            Photoshop is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <h6>
            GET AN INVITE &nbsp; &nbsp; &nbsp;
            <span className="Article-Arrow">&#10230;</span>
          </h6>
        </div>
        <img
          src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/banner1.jpg"
          alt="play"
          className="Article-One-Image"
        />
      </div>
      <div className="Article-One-Container">
        <img
          src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/banner2.jpg"
          alt="study"
          className="Article-One-Image"
        />
        <div className="Article-One-Invite">
          <h2>BEAUTIFUL STORIES EVERY TIME</h2>
          <p>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <h6>
            VIEW THE STORIES &nbsp; &nbsp; &nbsp;
            <span className="Article-Arrow">&#10230;</span>
          </h6>
        </div>
      </div>
      <div className="Article-One-Container">
        <div className="Article-One-Invite">
          <h2>DESIGNED FOR EVERYONE</h2>
          <p>
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>

          <h6>
            VIEW THE STORIES &nbsp; &nbsp; &nbsp;
            <span className="Article-Arrow">&#10230;</span>
          </h6>
        </div>
        <img
          src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/banner3.jpg"
          alt="photographer"
          className="Article-One-Image"
        />
      </div>

      <div className="Article-Four-Container">
        {articles.map(({ title, author, url }) => {
          return (
            <div
              className="Article-Four-Images-Container"
              style={{ backgroundImage: `url(${url})` }}
            >
              <div className="Article-Contents">
                <div style={{ lineHeight: "0.1px" }}>
                  <h5> {title}</h5>
                  <p style={{ fontSize: "10px" }}>{author}</p>
                </div>
                <br></br>
                <div className="Article-Four-Text">
                  <p>
                    READ STORY &nbsp; &nbsp; &nbsp;
                    <span className="Article-Arrow">&#10230;</span>
                  </p>
                </div>
              </div>
            </div>
          )
        })}
        {/* 
        <div className="Article-Four-Image1-Container">
          <div className="Article-Contents">
            <h5>The Mountains</h5>
            <p style={{ "font-size": "10px" }}>by John Appleseed</p>
            <div>
              <p>READ STORY</p>
            </div>
          </div>
        </div>
        <div className="Article-Four-Image2-Container">
          <div>
            <h6>Sunset Cityscapes</h6>
            <p>by Benjamin Cruz</p>
            <div>
              <p>READ STORY</p>
            </div>
          </div>
        </div>
        <div className="Article-Four-Image3-Container">
          <div>
            <h6>18 Days Voyage</h6>
            <p>by Alexel Borodin</p>
            <div>
              <p>READ STORY</p>
            </div>
          </div>
        </div>
        <div className="Article-Four-Image4-Container">
          <div className="Article-Contents">
            <h6>Architecturals</h6>
            <p>by Samantha Brooke</p>
            <div>
              <p>READ STORY</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}
