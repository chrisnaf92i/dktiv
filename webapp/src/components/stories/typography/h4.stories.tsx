import type {Meta, StoryObj}  from "@storybook/react";
import {H4} from "@/components/typography";

const meta: Meta <typeof H4> = {
    title: "Components/Typography/Heading4",
    component: H4
}
export default meta;

type Story = StoryObj<typeof H4>;

export const Default: Story = {
    args: {
        children: "Heading 4"
    }
}

