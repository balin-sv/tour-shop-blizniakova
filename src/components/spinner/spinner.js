import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../assets/lotti.json";

const Spinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255,255,255,0.85)",
      }}
    >
      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
};

export default Spinner;
