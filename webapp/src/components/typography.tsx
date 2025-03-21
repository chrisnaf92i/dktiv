"use client"
import styled from "styled-components";

export const H1 = styled.h1`
    font-size: 36px;
    font-weight: 800;
    line-height: 48px;
`
export const H2 = styled.h2`
    font-size: 28px;
    font-weight: 600;
    line-height: 48px
`
export const H3 = styled.h3`
    font-size: 24px;
    font-weight: 600;
    line-height: 40px;
`
export const H4 = styled.h4`
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
`
export const H5 = styled.h5`
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;
`
export const BodyText = styled.p<{$type:
        "Regular16" | "Regular18" | "Regular20" | "Medium16" | "Medium18" | "Medium20" | "Bold16" | "Bold18" | "Bold20"
}>`
    font-size: ${({$type}) => {
        return {
            "Regular16": "16",
            "Regular18": "18",
            "Regular20": "20",
            "Medium16": "16",
            "Medium18": "18",
            "Medium20": "20",
            "Bold16": "16",
            "Bold18": "18",
            "Bold20": "20"
        }[$type]
    }}px;
    
    font-weight: ${({$type}) => {
        return {
            "Regular16": "400",
            "Regular18": "400",
            "Regular20": "400",
            "Medium16": "500",
            "Medium18": "500",
            "Medium20": "500",
            "Bold16": "700",
            "Bold18": "700",
            "Bold20": "700"
        }[$type]}
    };
`

export const Caption = styled.p<{$type: "Regular14" | "Medium14" | "Bold14"}>`
    font-size: 14px;
    font-weight: ${({$type}) => {
        return {
            "Regular14": "400",
            "Medium14": "500",
            "Bold14": "700",
        }[$type]
    }}
`