import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from ".";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Header_One: Story = {
  args: {
    tag: "h1",
    size: "3xl",
    children:
      "be parts correct potatoes sides donkey extra climate happily freedom relationship tape unit tall hung call cat window steady world front graph particular pick",
  },
};
export const Header_Five: Story = {
  args: {
    tag: "h5",
    size: "2xl",
    children: "be parts correct potatoes sides donkey hung call cat window steady world front graph particular pick",
  },
};

export const Span: Story = {
  args: {
    tag: "span",
    weight: "thin",
    children: "be parts correct potatoes sides donkey hung call cat window steady world front graph particular pick",
  },
};

export const Div: Story = {
  args: {
    tag: "div",
    weight: "bold",
    children: "be parts correct potatoes sides donkey hung call cat window steady world front graph particular pick",
  },
};
