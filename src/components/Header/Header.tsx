"use client";
import React from 'react';
import { Box, Flex, HStack, Image, Text, Button, Menu, Portal } from '@chakra-ui/react';
import { IoNotificationsOutline, IoChevronDown } from "react-icons/io5";
import userImage from "../../assets/images/user-image.jpg";
import Link from 'next/link';
import LogoIcon from "../../assets/images/logo-icon.png";
import { useRouter } from 'next/navigation';
import axios from "@/lib/axios";

const Header = () => {
    const router = useRouter();

    const handleLogout = async () => {
        const res = await axios.post("/api/auth/logout");
        router.push("/");
    };

    return (
        <HStack justifyContent={"space-between"} bgColor={"var(--theme-color)"} borderBottom={"1px solid #fff"} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" p={"12px 25px"}>
            <Flex alignItems={"center"} gap={6}>
                <Link href="/dashboard" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Image src={LogoIcon.src} alt='logo-icon' />
                    <Text fontSize="24px" fontWeight="700" color="#fff">Trickly</Text>
                </Link>
            </Flex>

            <Flex alignItems={"center"} gap={6}>
                <Button
                    position="relative"
                    _hover={{ bg: "none" }}
                    bg={"none"}
                    border={"none"}
                    outline={"none"}
                    p={"unset"}
                    _before={{
                        content: '""',
                        position: 'absolute',
                        top: '10px',
                        right: '12px',
                        w: '8px',
                        h: '8px',
                        bgColor: 'red',
                        borderRadius: '50%',
                    }}
                >
                    <IoNotificationsOutline size={20} color='#fff' />
                </Button>

                <Box>
                    <Flex gap={2} cursor={"pointer"}>
                        <Menu.Root>
                            <Menu.Trigger asChild>
                                <Button size="sm" bgColor={"transparent"} outline={"none"}>
                                    <Image src={userImage.src} alt='userImage' /> <IoChevronDown />
                                </Button>
                            </Menu.Trigger>
                            <Portal>
                                <Menu.Positioner>
                                    <Menu.Content p="10px">
                                        <Menu.Item value="Profile Settings" cursor={"pointer"} p="5px" mb="5px" onSelect={() => router.push("/profile-settings")}>
                                            Profile Settings
                                        </Menu.Item>
                                        <Menu.Item p="5px" cursor={"pointer"} value="Log Out" onClick={handleLogout}>
                                            Log Out
                                        </Menu.Item>
                                    </Menu.Content>
                                </Menu.Positioner>
                            </Portal>
                        </Menu.Root>
                    </Flex>
                </Box>
            </Flex >
        </HStack >
    );
};

export default Header;