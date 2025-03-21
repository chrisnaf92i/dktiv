import type {Meta, StoryObj}  from "@storybook/react";
import {H1} from "@/components/typography";

const meta: Meta <typeof H1> = {
    title: "Components/Typography/Heading1",
    component: H1
}
export default meta;

type Story = StoryObj<typeof H1>;

export const Default: Story = {
    args: {
        children: "Heading 1"
    }
}

