import React from "react";
import "@assets/story-template.scss"; 

const TarkaLogo: React.FunctionComponent = () => {
    const tarka: string[][] = [
        ["T", "A", "R", "K", "A"],
        ["_U", "I"],
      ];

    return (
        <div className="logo">
        {tarka.map(function (word) {
          return (
            <div>
              {word.map(function (letter) {
                return letter !== "_U" ? (
                  <span>{letter}</span>
                ) : (
                  <span className="underscore">{letter}</span>
                );
              })}
            </div>
          );
        })}
      </div>
    );
};

export default TarkaLogo;
