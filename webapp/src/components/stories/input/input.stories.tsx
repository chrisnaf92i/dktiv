import type {Meta, StoryObj}  from "@storybook/react";
import {TextInput} from "@/components/input";

const meta: Meta <typeof TextInput> = {
    title: "Components/Input/TextInput",
    component: TextInput
}
export default meta;

type Story = StoryObj<typeof TextInput>;



export const TextInputStory: Story = {
    render: () => <TextInput label="Input" placeholder="Ceci est un placeholder"/>
}


