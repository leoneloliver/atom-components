import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "./button";

function Card() {
  const CardItem = styled.div`
    border: 1px solid #efefef;
    padding: 24px;
    img {
      border-radius: 50%;
      margin: 0 auto;
    }
  `;

  const [people, setPeople] = useState({ results: [] });
  const icon =
    "https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Instagram-Outline-512.png";

  useEffect(() => {
    // axios.get(`https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=10`)
    const APPLICATION_ID = "ZQAdORSuwHm163xjMIbl5yMJ-zsX5WzIh_0Lkk838UE";
    // const APPLICATION_ID = "ac2-HvUhAOzPFPk75RLNf7m5EoG-Zl1dT4TBaRM9Ptc";
    const PAGE_RANDOM = Math.round(Math.random() * (4 - 1) + 1);
    const PER_PAGE = 3;
    const KEY_WORD = "girls";
    axios
      .get(
        `https://api.unsplash.com/search/collections?client_id=${APPLICATION_ID}&page=${PAGE_RANDOM}&per_page=${PER_PAGE}&query=${KEY_WORD}`
        // `https://api.unsplash.com/photos/?client_id=${APPLICATION_ID}&page=5&query=makeup`
      )
      .then((data) => {
        setPeople(data.data);
        console.log(data.data.results);
        // console.log(data.data.results[0].cover_photo.urls.small);
      })
      .catch(console.error);
  }, [setPeople]);

  return (
    <div>
      <div className="parent">
        {people.results.map((img) => (
          <CardItem key={img.title} className="item-carousel">
            <div className="icon-container d-none">
              <img className="img-ico" src={icon} alt="instagram ico" />
            </div>
            <div
              className="fullgallery-container-x"
              style={{
                // backgroundImage: "url(" + img.cover_photo.urls.small + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              <img
                alt={"Picture of " + img.title}
                src={img.user.profile_image.large}
              />
              <h3 role="presentation">
                {img.user.first_name} {img.user.last_name}
              </h3>

              <Button
                hoverefect
                // primary
                role="button"
                title={`see more details about ` + img.title}
              >
                More About
              </Button>
            </div>
          </CardItem>
        ))}
      </div>
    </div>
  );
}

export default Card;
