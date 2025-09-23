import React, { useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { Share2 } from "lucide-react";
import { Button } from "../../ui/button";

function ShareMenu({ title, videoId }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <Button
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer items-center cursor-pointe gap-2 px-4 py-2 rounded-full bg-[#303030] hover:bg-[#3f3f3f] text-sm"
      >
        <Share2 size={18} />
        <span>Share</span>
      </Button>
      {open && (
        <div className="absolute mt-2 p-3 bg-white shadow-lg rounded-lg flex gap-3 z-50">
          <FacebookShareButton url={videoId} quote={title}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>

          <TwitterShareButton url={videoId} title={title}>
            <TwitterIcon size={40} round />
          </TwitterShareButton>

          <WhatsappShareButton url={videoId} title={title} separator=":: ">
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>
        </div>
      )}
    </div>
  );
}

export default ShareMenu;
