"use client";
import React from 'react';
import { Box, Button, Flex, HStack, Image, Text } from '@chakra-ui/react';
import { IoNotificationsOutline, IoChevronDown } from "react-icons/io5";
import userImage from "../../assets/images/user-image.jpg";
import Link from 'next/link';
import LogoIcon from "../../assets/images/logo-icon.png";
import { useUser } from '@/hooks/useUser';

const Header = () => {
    const { user } = useUser();

    return (
        <HStack justifyContent={"space-between"} bgColor={"#5D3FD3"} borderBottom={"1px solid #fff"} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" p={"12px 25px"}>
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
                        <Image src={userImage.src} alt='userImage' />
                        <Text display={"flex"} color={"#fff"} gap={"0.5px"} alignItems={"center"}>{user?.sudo_name} <IoChevronDown /></Text>
                    </Flex>
                </Box>
            </Flex >
        </HStack >
    );
};

export default Header;