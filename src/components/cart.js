import React from "react";

export default function cart({ name, email }) {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow">
      <img alt="robots" src="https://robohash.org/test?200*200 " />
      <div>
        <h2> {name} </h2>
        <p> {email} </p>
      </div>
    </div>
  );
}
