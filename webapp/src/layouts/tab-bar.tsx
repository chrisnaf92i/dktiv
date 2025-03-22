"use client"
import styled from "styled-components";
import colors from "@/lib/colors";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";

export default function TabBar() {
    const pathname = usePathname()
    const route = useRouter()
    const tabs = [
        {
            name: "Acceuil",
            path: "/",
            lightIcon: "/images/icon/tab-bar/home-light.svg",
            darkIcon: "/images/icon/tab-bar/home-dark.svg"
        },
        {
            name: "Carte des missions",
            path: "/missions",
            lightIcon: "/images/icon/tab-bar/pin-light.svg",
            darkIcon: "/images/icon/tab-bar/pin-dark.svg"
        },
        {
            name: "Calendrier des missions",
            path: "/calendar",
            lightIcon: "/images/icon/tab-bar/calendar-add-light.svg",
            darkIcon: "/images/icon/tab-bar/calendar-add-dark.svg"
        },
        {
            name: "Récompense",
            path: "/gift",
            lightIcon: "/images/icon/tab-bar/ticket-light.svg",
            darkIcon: "/images/icon/tab-bar/ticket-dark.svg"
        }
    ]
    return (
        <TabBarContainer>
            {
                tabs.map((tab, id) => (
                    <Tab onClick={() => route.push(tab.path)} key={id} selected={tab.path == pathname}>
                        <Image src={tab.path == pathname ? tab.darkIcon : tab.lightIcon} alt={tab.name} width={32} height={32}/>
                    </Tab>
                ))
            }
        </TabBarContainer>
    )
}

const TabBarContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 24px;
    left: 50%;
    width: 75%;
    transform: translateX(-50%);
    border-radius: 50px;
    background: ${colors.base.black};
    padding: 8px
`;

const Tab = styled.button<{selected: boolean}>`
    padding:8px;
    border-radius: 100%;
    border: none;
    background: ${({selected}) => selected ? colors.primary.yellow : "transparent"};
`

