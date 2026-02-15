import type { Meta, StoryObj } from "@storybook/react";
import { Heart } from "./Heart";
import { Share } from "./Share";
import { Search } from "./Search";
import { Info } from "./Info";
import { Warning } from "./Warning";
import { TwitterIcon, LinkedInIcon, InstagramIcon } from "./SocialIcons";

const meta = {
  title: "Icons/Overview",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const AllIcons: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-white mb-4 font-semibold">Heart Icons</h3>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <Heart variant="outline" className="text-white" />
            <p className="text-white text-xs mt-2">Outline</p>
          </div>
          <div className="text-center">
            <Heart variant="filled" className="text-white" />
            <p className="text-white text-xs mt-2">Filled</p>
          </div>
          <div className="text-center">
            <Heart variant="gradient" />
            <p className="text-white text-xs mt-2">Gradient</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-white mb-4 font-semibold">Share Icons</h3>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <Share variant="default" className="text-white" />
            <p className="text-white text-xs mt-2">Default</p>
          </div>
          <div className="text-center">
            <Share variant="gradient" />
            <p className="text-white text-xs mt-2">Gradient</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-white mb-4 font-semibold">Utility Icons</h3>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <Search className="text-white" />
            <p className="text-white text-xs mt-2">Search</p>
          </div>
          <div className="text-center">
            <Info />
            <p className="text-white text-xs mt-2">Info</p>
          </div>
          <div className="text-center">
            <Warning />
            <p className="text-white text-xs mt-2">Warning</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-white mb-4 font-semibold">Social Icons</h3>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <TwitterIcon />
            <p className="text-white text-xs mt-2">Twitter/X</p>
          </div>
          <div className="text-center">
            <LinkedInIcon />
            <p className="text-white text-xs mt-2">LinkedIn</p>
          </div>
          <div className="text-center">
            <InstagramIcon />
            <p className="text-white text-xs mt-2">Instagram</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Individual icon stories
export const HeartIcons: StoryObj = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <Heart variant="outline" className="text-white" size={32} />
        <p className="text-white text-sm mt-2">Outline</p>
      </div>
      <div className="text-center">
        <Heart variant="filled" className="text-danger" size={32} />
        <p className="text-white text-sm mt-2">Filled (Danger)</p>
      </div>
      <div className="text-center">
        <Heart variant="gradient" size={32} />
        <p className="text-white text-sm mt-2">Gradient</p>
      </div>
    </div>
  ),
};

export const ShareIcons: StoryObj = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <Share variant="default" className="text-white" size={24} />
        <p className="text-white text-sm mt-2">Default</p>
      </div>
      <div className="text-center">
        <Share variant="gradient" size={24} />
        <p className="text-white text-sm mt-2">Gradient</p>
      </div>
    </div>
  ),
};

export const SocialIcons: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h4 className="text-white mb-3">With Wrapper (default)</h4>
        <div className="flex items-center gap-4">
          <TwitterIcon withWrapper={true} />
          <LinkedInIcon withWrapper={true} />
          <InstagramIcon withWrapper={true} />
        </div>
      </div>
      <div>
        <h4 className="text-white mb-3">Without Wrapper</h4>
        <div className="flex items-center gap-4">
          <TwitterIcon withWrapper={false} />
          <LinkedInIcon withWrapper={false} />
          <InstagramIcon withWrapper={false} />
        </div>
      </div>
    </div>
  ),
};

export const IconSizes: StoryObj = {
  render: () => (
    <div className="flex items-end gap-6">
      <div className="text-center">
        <Heart variant="gradient" size={16} />
        <p className="text-white text-xs mt-2">16px</p>
      </div>
      <div className="text-center">
        <Heart variant="gradient" size={24} />
        <p className="text-white text-xs mt-2">24px</p>
      </div>
      <div className="text-center">
        <Heart variant="gradient" size={32} />
        <p className="text-white text-xs mt-2">32px</p>
      </div>
      <div className="text-center">
        <Heart variant="gradient" size={48} />
        <p className="text-white text-xs mt-2">48px</p>
      </div>
    </div>
  ),
};
