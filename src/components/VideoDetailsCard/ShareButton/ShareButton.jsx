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

function ShareMenu({ title, videoId }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <Button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#303030] hover:bg-[#3f3f3f] text-sm"
      >
        <Share2 size={18} />
        <span>Share</span>
      </Button>
    </div>
  );
}

export default ShareMenu;
