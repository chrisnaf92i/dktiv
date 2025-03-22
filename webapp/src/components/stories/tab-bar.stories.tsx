import type {Meta, StoryObj}  from "@storybook/react";
import TabBar from "@/layouts/tab-bar";

const meta: Meta <typeof TabBar> = {
    title: "Components/Layout/Tab-bar",
    component: TabBar
}
export default meta;

type Story = StoryObj<typeof TabBar>;

export const Default: Story = {
    args: {
        children: "Heading 4"
    }
}

