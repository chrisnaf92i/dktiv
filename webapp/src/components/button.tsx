"use client"
import styled from "styled-components";
import {dmSans} from "@/global-style";
import colors from "@/lib/colors";

export const Button = styled.button<{$type: "primary" | "secondary" | "terciary", $enabled: boolean }>`
    background-color: ${
        ({$enabled, $type}) => 
                $enabled ?
                        {
                            "primary": colors.primary.blue,
                            "secondary": "transparent",
                            "terciary": "transparent",
                        }[$type]
                        : colors.opacity.blue10
    };
    color: ${
            ({$enabled, $type}) =>
                    $enabled ?
                            {
                                "primary": colors.base.white,
                                "secondary": colors.primary.blue,
                                "terciary": colors.primary.blue
                            }[$type]
                            : colors.terciary.grey400
    };
    border: ${({ $enabled, $type }) =>
        !$enabled || $type != "secondary" ? "none" : `1px solid ${colors.primary.blue}`
    };
    font-family: ${dmSans.style.fontFamily}, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    border-radius: 8px;
    padding: 12px;
    cursor: pointer;
`

export const SocialButton = styled.button`
    background: ${colors.base.white};
    border: 1px solid ${colors.terciary.grey300};
    border-radius: 8px;
    font-family: ${dmSans.style.fontFamily}, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    padding: 12px;
    cursor: pointer;
`