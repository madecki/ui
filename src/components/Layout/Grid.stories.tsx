import type { Meta, StoryObj } from "@storybook/react";
import { Grid, GridItem } from "./Grid";

const meta = {
  title: "Layout/Grid",
  component: Grid,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    cols: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 12],
    },
    gap: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gray p-5 rounded-md text-white text-center">{children}</div>
);

export const ThreeColumns: Story = {
  args: {
    cols: 3,
    gap: "5",
    children: (
      <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box>
      </>
    ),
  },
};

export const TwoColumns: Story = {
  args: {
    cols: 2,
    gap: "5",
    children: (
      <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    cols: 4,
    gap: "4",
    children: (
      <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box>
        <Box>7</Box>
        <Box>8</Box>
      </>
    ),
  },
};

export const TwelveColumnGrid: Story = {
  args: {
    cols: 12,
    gap: "2",
    children: (
      <>
        {Array.from({ length: 12 }, (_, i) => (
          <Box key={i}>{i + 1}</Box>
        ))}
      </>
    ),
  },
};

export const WithColSpan: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Grid cols={4} gap="4">
      <GridItem colSpan={2}>
        <div className="bg-success p-5 rounded-md text-white text-center">
          Span 2
        </div>
      </GridItem>
      <GridItem>
        <Box>1</Box>
      </GridItem>
      <GridItem>
        <Box>1</Box>
      </GridItem>
      <GridItem>
        <Box>1</Box>
      </GridItem>
      <GridItem colSpan={3}>
        <div className="bg-info p-5 rounded-md text-white text-center">
          Span 3
        </div>
      </GridItem>
    </Grid>
  ),
};

export const FullWidthSpan: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Grid cols={3} gap="4">
      <GridItem colSpan="full">
        <div className="bg-warning p-5 rounded-md text-white text-center">
          Full Width Header
        </div>
      </GridItem>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <GridItem colSpan="full">
        <div className="bg-danger p-5 rounded-md text-white text-center">
          Full Width Footer
        </div>
      </GridItem>
    </Grid>
  ),
};

export const DashboardLayout: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Grid cols={12} gap="5">
      <GridItem colSpan={12}>
        <div className="bg-darkgray p-5 rounded-md text-white">Header</div>
      </GridItem>
      <GridItem colSpan={3}>
        <div className="bg-gray p-5 rounded-md text-white h-32">Sidebar</div>
      </GridItem>
      <GridItem colSpan={6}>
        <div className="bg-gray p-5 rounded-md text-white h-32">Main Content</div>
      </GridItem>
      <GridItem colSpan={4}>
        <div className="bg-success p-5 rounded-md text-white">Card 1</div>
      </GridItem>
      <GridItem colSpan={4}>
        <div className="bg-info p-5 rounded-md text-white">Card 2</div>
      </GridItem>
      <GridItem colSpan={4}>
        <div className="bg-warning p-5 rounded-md text-white">Card 3</div>
      </GridItem>
    </Grid>
  ),
};

export const DifferentGaps: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div className="flex flex-col gap-10">
      <div>
        <p className="text-lightgray text-sm mb-2">gap="2"</p>
        <Grid cols={3} gap="2">
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </Grid>
      </div>
      <div>
        <p className="text-lightgray text-sm mb-2">gap="5"</p>
        <Grid cols={3} gap="5">
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </Grid>
      </div>
      <div>
        <p className="text-lightgray text-sm mb-2">gap="10"</p>
        <Grid cols={3} gap="10">
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </Grid>
      </div>
    </div>
  ),
};
