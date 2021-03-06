import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "./button";

function Card(props) {
  const handleClick = (author, cover) => {
    const modal = document.getElementById("new-modal");

    if (modal) {
      modal.classList.add("show-it");
      modal.onclick = function () {
        modal.classList.remove("show-it");
      };
      document.querySelector("#new-modal img").src = cover;
      document.querySelector("#new-modal .text-modal").innerHTML =
        "Photo by " + author;
    } else {
      alert(`Photo by ${author}`);
    }
  };

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
    const APPLICATION_ID = "ZQAdORSuwHm163xjMIbl5yMJ-zsX5WzIh_0Lkk838UE";
    // const APPLICATION_ID = "ac2-HvUhAOzPFPk75RLNf7m5EoG-Zl1dT4TBaRM9Ptc";
    const PAGE_RANDOM = Math.round(Math.random() * (4 - 1) + 1);
    const PER_PAGE = 5;
    let KEY_WORD = "model";
    if (props.category) {
      KEY_WORD = props.category;
    }
    axios
      .get(
        `https://api.unsplash.com/search/collections?client_id=${APPLICATION_ID}&page=${PAGE_RANDOM}&&per_page=${PER_PAGE}&query=${KEY_WORD}`
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
      <div className="wrapper-grid">
        {people.results.map((img) => (
          <CardItem
            key={img.title}
            className="item-grid"
            role="button"
            tabindex="0"
            style={{
              backgroundImage:
                props.custom === true
                  ? "url(" + img.cover_photo.urls.small + ")"
                  : null,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          >
            <div class="overlay"></div>
            <Button
              hoverefect
              // primary
              // success
              role="button"
              title={`see more details about ` + img.title}
              onClick={() =>
                handleClick(
                  img.user.first_name + " " + img.user.last_name,
                  img.cover_photo.urls.small
                )
              }
            >
              More About
            </Button>
          </CardItem>
        ))}
      </div>
    </div>
  );
}

export default Card;
