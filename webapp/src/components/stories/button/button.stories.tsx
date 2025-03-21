import type {Meta, StoryObj}  from "@storybook/react";
import {Button} from "@/components/button";

const meta: Meta <typeof Button> = {
    title: "Components/Button/Classic",
    component: Button
}
export default meta;

type Story = StoryObj<{ $type: "primary" | "secondary" | "terciary", $enabled: boolean }>;



export const ButtonStory: Story = {
    args: {
        $type: "primary",
        $enabled: true
    },
    render: args => <Button {...args}>Cliquer sur moi</Button>
}



ButtonStory.argTypes = {
    $type: {
        control: "select",
        options: [
            "primary",
            "secondary",
            "terciary"
        ]
    },
    $enabled: {
        control: "boolean",
    }
}