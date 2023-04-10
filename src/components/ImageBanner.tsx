import React from "react";

interface ImageBannerProps {
  imgUrl: string | undefined;
}

const ImageBanner = ({ imgUrl }: ImageBannerProps) => {
  if (imgUrl) {
    return <img src={imgUrl} className="img-fluid w-100 rounded" alt="" />;
  }
  return <></>;
};

export default ImageBanner;
