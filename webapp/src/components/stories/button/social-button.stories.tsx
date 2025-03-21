import type {Meta, StoryObj}  from "@storybook/react";
import {SocialButton} from "@/components/button";

const meta: Meta <typeof SocialButton> = {
    title: "Components/Button/Social",
    component: SocialButton
}
export default meta;

type Story = StoryObj<typeof SocialButton>;



export const ButtonStory: Story = {
    render: () => <SocialButton>Cliquer sur moi</SocialButton>
}


