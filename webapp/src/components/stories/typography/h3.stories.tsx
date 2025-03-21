import type {Meta, StoryObj}  from "@storybook/react";
import {H3} from "@/components/typography";

const meta: Meta <typeof H3> = {
    title: "Components/Typography/Heading3",
    component: H3
}
export default meta;

type Story = StoryObj<typeof H3>;

export const Default: Story = {
    args: {
        children: "Heading 3"
    }
}

