import React, { useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { Share2, Copy } from "lucide-react";
import { Button } from "../../ui/button";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ShareMenu({ title, videoId }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <div className="relative inline-block">
      <Button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#303030] hover:bg-[#3f3f3f] text-sm"
      >
        <Share2 size={18} />
        <span>Share</span>
      </Button>

      {open && (
        <div className="absolute mt-2 p-3 bg-[#3f3f3f] shadow-lg rounded-lg flex flex-wrap md:flex-nowrap gap-3 z-50">
          <FacebookShareButton url={videoId} quote={title}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>

          <TwitterShareButton url={videoId} title={title}>
            <TwitterIcon size={40} round />
          </TwitterShareButton>

          <WhatsappShareButton url={videoId} title={title} separator=":: ">
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>

          {/* Copy Link Button */}
          <CopyToClipboard
            text={videoId}
            onCopy={() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2000); // hide message after 2s
            }}
          >
            <button className="flex items-center gap-2 p-1 rounded-lg bg-gray-200 hover:bg-gray-300 text-[15px]">
              <Copy size={25} />
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </CopyToClipboard>
        </div>
      )}
    </div>
  );
}

export default ShareMenu;
