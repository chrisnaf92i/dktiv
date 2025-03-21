import type {Meta, StoryObj}  from "@storybook/react";
import {BodyText} from "@/components/typography";

const meta: Meta <typeof BodyText> = {
    title: "Components/Typography/BodyText",
    component: BodyText
}
export default meta;

type Story = StoryObj<typeof BodyText>;

export const Default: Story = {
    args: {
        children: "BodyText"
    }
}

