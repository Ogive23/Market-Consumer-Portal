import Lottie from "lottie-react";
import LoadingAsset from "../../../public/static/lottie/loading.json";

export default function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        placeContent: "center",
      }}
    >
      <Lottie
        animationData={LoadingAsset}
        loop={true}
        style={{ height: window.innerHeight / 2 }}
      />
    </div>
  );
}
