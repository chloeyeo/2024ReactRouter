import React from "react";

const Main = ({ vData }) => {
  return (
    <>
      <div className="visual d-flex">mainVisual</div>
      <div className="container">
        <div className="section">
          <ul className="prodList">
            {vData
              ? vData.slide(0, 4).map((obj) => {
                  return (
                    <li>
                      <img src={`./images/${obj.img}`} alt="img" />
                      {obj.title}
                    </li>
                  );
                })
              : "no data"}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
