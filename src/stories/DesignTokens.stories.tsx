import type { Meta, StoryObj } from "@storybook/react";

const DesignTokens = () => null;

const meta = {
  title: "Design System/Tokens",
  component: DesignTokens,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof DesignTokens>;

export default meta;
type Story = StoryObj<typeof meta>;

const colors = [
  { name: "primary", value: "#1E1E1E", textColor: "white" },
  { name: "darkgray", value: "#272727", textColor: "white" },
  { name: "gray", value: "#3A3A3A", textColor: "white" },
  { name: "lightgray", value: "#6D6D6D", textColor: "white" },
  { name: "icongray", value: "#BFBFBF", textColor: "black" },
  { name: "white", value: "#FCFAF7", textColor: "black" },
  { name: "success", value: "#87BB54", textColor: "black" },
  { name: "danger", value: "#CB5065", textColor: "white" },
  { name: "warning", value: "#EDA867", textColor: "black" },
  { name: "info", value: "#714E8E", textColor: "white" },
  { name: "blue", value: "#2084E1", textColor: "white" },
  { name: "neutral", value: "#E1E1E1", textColor: "black" },
];

const spacing = [
  { name: "1", value: "4px" },
  { name: "2", value: "8px" },
  { name: "3", value: "12px" },
  { name: "4", value: "14px" },
  { name: "5", value: "16px" },
  { name: "6", value: "20px" },
  { name: "7", value: "24px" },
  { name: "8", value: "28px" },
  { name: "9", value: "32px" },
  { name: "10", value: "40px" },
];

const typography = [
  { name: "xs", value: "12px" },
  { name: "sm", value: "14px" },
  { name: "md", value: "16px" },
  { name: "lg", value: "18px" },
  { name: "xl", value: "20px" },
  { name: "2xl", value: "24px" },
  { name: "3xl", value: "29px" },
  { name: "4xl", value: "34px" },
];

const borderRadius = [
  { name: "sm", value: "10px" },
  { name: "md", value: "20px" },
  { name: "circle", value: "50%" },
];

export const ColorPalette: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Color Palette</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {colors.map((color) => (
          <div key={color.name} className="flex flex-col">
            <div
              className="h-20 rounded-md flex items-end p-3"
              style={{ backgroundColor: color.value }}
            >
              <span
                className="text-sm font-medium"
                style={{ color: color.textColor }}
              >
                {color.name}
              </span>
            </div>
            <div className="mt-2">
              <p className="text-white text-sm font-mono">{color.value}</p>
              <p className="text-lightgray text-xs">bg-{color.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold text-white mb-4">Gradient</h3>
        <div className="h-20 rounded-md bg-gradient flex items-end p-3">
          <span className="text-white text-sm font-medium">gradient</span>
        </div>
        <p className="text-lightgray text-xs mt-2">bg-gradient</p>
      </div>
    </div>
  ),
};

export const SpacingScale: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Spacing Scale</h2>
      <div className="flex flex-col gap-4">
        {spacing.map((space) => (
          <div key={space.name} className="flex items-center gap-4">
            <div className="w-16 text-right">
              <span className="text-lightgray text-sm">{space.name}</span>
            </div>
            <div
              className="bg-blue rounded-sm"
              style={{ width: space.value, height: "24px" }}
            />
            <span className="text-white text-sm font-mono">{space.value}</span>
            <span className="text-lightgray text-xs">p-{space.name}, m-{space.name}, gap-{space.name}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const TypographyScale: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Typography Scale</h2>
      <div className="flex flex-col gap-5">
        {typography.map((type) => (
          <div key={type.name} className="flex items-baseline gap-4">
            <div className="w-16 text-right">
              <span className="text-lightgray text-sm">{type.name}</span>
            </div>
            <span
              className="text-white"
              style={{ fontSize: type.value }}
            >
              The quick brown fox
            </span>
            <span className="text-lightgray text-xs font-mono">{type.value}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const BorderRadiusScale: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Border Radius</h2>
      <div className="flex gap-8 items-end">
        {borderRadius.map((radius) => (
          <div key={radius.name} className="flex flex-col items-center">
            <div
              className="w-20 h-20 bg-blue"
              style={{ borderRadius: radius.value }}
            />
            <p className="text-white text-sm mt-3">{radius.name}</p>
            <p className="text-lightgray text-xs font-mono">{radius.value}</p>
            <p className="text-lightgray text-xs">rounded-{radius.name}</p>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const AllTokens: Story = {
  render: () => (
    <div className="flex flex-col gap-16">
      {/* Colors */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {colors.map((color) => (
            <div key={color.name}>
              <div
                className="h-16 rounded-md flex items-end p-2"
                style={{ backgroundColor: color.value }}
              >
                <span
                  className="text-xs font-medium"
                  style={{ color: color.textColor }}
                >
                  {color.name}
                </span>
              </div>
              <p className="text-lightgray text-xs mt-1">{color.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Spacing */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Spacing</h2>
        <div className="flex flex-wrap gap-4">
          {spacing.map((space) => (
            <div key={space.name} className="flex flex-col items-center">
              <div
                className="bg-success"
                style={{ width: space.value, height: space.value }}
              />
              <span className="text-white text-xs mt-2">{space.name}</span>
              <span className="text-lightgray text-xs">{space.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Typography</h2>
        <div className="space-y-2">
          {typography.map((type) => (
            <div key={type.name} className="flex items-baseline gap-4">
              <span className="text-lightgray text-xs w-10">{type.name}</span>
              <span className="text-white" style={{ fontSize: type.value }}>
                Aa
              </span>
              <span className="text-lightgray text-xs">{type.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Border Radius */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Border Radius</h2>
        <div className="flex gap-6">
          {borderRadius.map((radius) => (
            <div key={radius.name} className="flex flex-col items-center">
              <div
                className="w-16 h-16 bg-info"
                style={{ borderRadius: radius.value }}
              />
              <span className="text-white text-xs mt-2">{radius.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
