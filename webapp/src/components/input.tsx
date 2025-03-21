"use client"

import styled from "styled-components";
import colors from "@/lib/colors";
import {dmSans} from "@/global-style";
import {ChangeEventHandler} from "react";

export const Input = styled.input<{ $withIcon: boolean}>`
    padding: 12px 16px;
    font-size: 16px;
    font-family: ${dmSans.style.fontFamily}, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    border: 1px solid ${colors.terciary.grey300};
    color: ${colors.base.black};
    border-radius: 8px;
    gap:8px;
    outline: none;
        
    &::placeholder {
        color:${colors.terciary.grey300};
    }
`

export const Label = styled.label`
    color: ${colors.base.black};
    font-family: ${dmSans.style.fontFamily};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    display: flex;
    flex-direction: column;
`

type TextInputProps = {
    label: string
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const TextInput = ({label, placeholder, onChange}: TextInputProps) => {
    return (
        <Label>
            {label}
            <Input placeholder={placeholder} onChange={onChange}  $withIcon={false}/>
        </Label>
    )
}