import type {Meta, StoryObj}  from "@storybook/react";
import {H5} from "@/components/typography";

const meta: Meta <typeof H5> = {
    title: "Components/Typography/Heading5",
    component: H5
}
export default meta;

type Story = StoryObj<typeof H5>;

export const Default: Story = {
    args: {
        children: "Heading 5"
    }
}

