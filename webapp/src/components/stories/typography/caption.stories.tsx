import type {Meta, StoryObj}  from "@storybook/react";
import { Caption} from "@/components/typography"
const meta: Meta <typeof Caption> = {
    title: "Components/Typography",
    component: Caption
}
export default meta;

type Story = StoryObj<typeof Caption>;

export const Default: Story = {
    args: {
        children: "Caption"
    }
}

