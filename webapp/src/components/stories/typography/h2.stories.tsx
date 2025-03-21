import type {Meta, StoryObj}  from "@storybook/react";
import {H2} from "@/components/typography";

const meta: Meta <typeof H2> = {
    title: "Components/Typography/Heading2",
    component: H2
}
export default meta;

type Story = StoryObj<typeof H2>;

export const Default: Story = {
    args: {
        children: "Heading 2"
    }
}

