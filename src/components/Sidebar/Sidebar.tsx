"use client";
import React, { useState } from 'react';
import NextLink from "next/link";
import "./Sidebar.css";
import { Box, List, Text, Link, VStack, Accordion, Span } from "@chakra-ui/react";
import { AiFillDashboard } from "react-icons/ai";
import { FaBinoculars, FaDonate, FaTrophy, FaCommentDollar, FaUsersCog, FaHeadphones, FaGem, FaFeatherAlt, FaFingerprint, FaFlagCheckered, FaBriefcase, FaFileCode, FaPuzzlePiece, FaFileInvoiceDollar } from "react-icons/fa";
import { FaSackDollar, FaComments } from "react-icons/fa6";
import * as Tooltip from '@radix-ui/react-tooltip';

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);
    const [sideBarName, setSideBarName] = useState('');

    const onSideBarMenuMouseOver = (name: string) => {
        if (sideBarName === name && isActive) {
            setIsActive(false);
            setSideBarName('');
        } else {
            setSideBarName(name);
            setIsActive(true);
        }
    };
    const items = [
        { value: "a", title: "Brand Management", links: [{ text: "Companies", link: "/dashboard" }, { text: "Websites", link: "/dashboard" }, { text: "Categories", link: "/dashboard" }, { text: "Packages", link: "/dashboard" }, { text: "Promotions", link: "/dashboard" }] },
        { value: "b", title: "User Management", links: [{ text: "Users", link: "/dashboard" }, { text: "Departments", link: "/dashboard" }, { text: "Designations", link: "/dashboard" }, { text: "Active Users", link: "/dashboard" }, { text: "Roles", link: "/settings/roles" }, { text: "Migrate Production Teams", link: "/dashboard" }] },
        { value: "c", title: "IBU & Teams Management", links: [{ text: "Teams", link: "/dashboard" }, { text: "Default Teams", link: "/dashboard" }, { text: "Business Unit Teams", link: "/dashboard" }, { text: "Business Units", link: "/dashboard" }] },
        { value: "d", title: "General Management", links: [{ text: "Customer Sources", link: "/dashboard" }, { text: "Reports", link: "/dashboard" }, { text: "Email", link: "/dashboard" }, { text: "Adword Accounts", link: "/dashboard" }, { text: "Bank Accounts", link: "/dashboard" }] },
    ];

    return (
        <Box as="nav" display="flex" w={isActive ? "480px" : "75px"} transition={"all ease 0.3s"} h="100vh" bg="var(--theme-color)" className="sidebar" boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">
            <VStack display="block" gap="4" align="start">
                <Box overflowY="auto" className='scrollCSS' h="100%" p="20px 25px">
                    <Tooltip.Provider delayDuration={100}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <Box
                                    mb="20px"
                                    cursor="pointer"
                                    onClick={() => onSideBarMenuMouseOver('dashboards')}
                                    _hover={{ opacity: 0.8 }}
                                >
                                    <AiFillDashboard color="#fff" size={24} />
                                </Box>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    side="right"
                                    sideOffset={8}
                                    style={{
                                        backgroundColor: '#3c2b7f',
                                        color: '#fff',
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        fontSize: 14,
                                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    Dashboards
                                    <Tooltip.Arrow
                                        style={{ fill: '#3c2b7f' }}
                                    />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>

                    <Tooltip.Provider delayDuration={100}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <Box
                                    mb="20px"
                                    cursor="pointer"
                                    onClick={() => onSideBarMenuMouseOver('leads')}
                                    _hover={{ opacity: 0.8 }}
                                >
                                    <FaBinoculars color='#fff' size={24} />
                                </Box>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    side="right"
                                    sideOffset={8}
                                    style={{
                                        backgroundColor: '#3c2b7f',
                                        color: '#fff',
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        fontSize: 14,
                                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    Leads
                                    <Tooltip.Arrow
                                        style={{ fill: '#3c2b7f' }}
                                    />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                    <Tooltip.Provider delayDuration={100}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <Box
                                    mb="20px"
                                    cursor="pointer"
                                    onClick={() => onSideBarMenuMouseOver('orders')}
                                    _hover={{ opacity: 0.8 }}
                                >
                                    <FaTrophy color='#fff' size={24} />
                                </Box>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    side="right"
                                    sideOffset={8}
                                    style={{
                                        backgroundColor: '#3c2b7f',
                                        color: '#fff',
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        fontSize: 14,
                                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    Orders
                                    <Tooltip.Arrow
                                        style={{ fill: '#3c2b7f' }}
                                    />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                    <Tooltip.Provider delayDuration={100}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <Box
                                    mb="20px"
                                    cursor="pointer"
                                    onClick={() => onSideBarMenuMouseOver('transactions')}
                                    _hover={{ opacity: 0.8 }}
                                >
                                    <FaDonate color='#fff' size={24} />
                                </Box>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    side="right"
                                    sideOffset={8}
                                    style={{
                                        backgroundColor: '#3c2b7f',
                                        color: '#fff',
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        fontSize: 14,
                                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    Transactions
                                    <Tooltip.Arrow
                                        style={{ fill: '#3c2b7f' }}
                                    />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                    <Tooltip.Provider delayDuration={100}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <Box
                                    mb="20px"
                                    cursor="pointer"
                                    onClick={() => onSideBarMenuMouseOver('merchants')}
                                    _hover={{ opacity: 0.8 }}
                                >
                                    <FaCommentDollar color='#fff' size={24} />
                                </Box>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    side="right"
                                    sideOffset={8}
                                    style={{
                                        backgroundColor: '#3c2b7f',
                                        color: '#fff',
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        fontSize: 14,
                                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    Merchants
                                    <Tooltip.Arrow
                                        style={{ fill: '#3c2b7f' }}
                                    />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                    <Tooltip.Provider delayDuration={100}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <Box
                                    mb="20px"
                                    cursor="pointer"
                                    onClick={() => onSideBarMenuMouseOver('hr-management')}
                                    _hover={{ opacity: 0.8 }}
                                >
                                    <FaUsersCog color='#fff' size={24} />
                                </Box>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    side="right"
                                    sideOffset={8}
                                    style={{
                                        backgroundColor: '#3c2b7f',
                                        color: '#fff',
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        fontSize: 14,
                                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    HR Management
                                    <Tooltip.Arrow
                                        style={{ fill: '#3c2b7f' }}
                                    />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                    <Tooltip.Provider delayDuration={100}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <Box
                                    mb="20px"
                                    cursor="pointer"
                                    onClick={() => onSideBarMenuMouseOver('finance')}
                                    _hover={{ opacity: 0.8 }}
                                >
                                    <FaSackDollar color='#fff' size={24} />
                                </Box>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    side="right"
                                    sideOffset={8}
                                    style={{
                                        backgroundColor: '#3c2b7f',
                                        color: '#fff',
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        fontSize: 14,
                                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    Finance
                                    <Tooltip.Arrow
                                        style={{ fill: '#3c2b7f' }}
                                    />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                    <Tooltip.Provider delayDuration={100}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <Box
                                    mb="20px"
                                    cursor="pointer"
                                    onClick={() => onSideBarMenuMouseOver('chat')}
                                    _hover={{ opacity: 0.8 }}
                                >
                                    <FaComments color='#fff' size={24} />
                                </Box>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    side="right"
                                    sideOffset={8}
                                    style={{
                                        backgroundColor: '#3c2b7f',
                                        color: '#fff',
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        fontSize: 14,
                                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    Chat
                                    <Tooltip.Arrow
                                        style={{ fill: '#3c2b7f' }}
                                    />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                    <Tooltip.Provider delayDuration={100}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <Box
                                    mb="20px"
                                    cursor="pointer"
                                    onClick={() => onSideBarMenuMouseOver('call-center')}
                                    _hover={{ opacity: 0.8 }}
                                >
                                    <FaHeadphones color='#fff' size={24} />
                                </Box>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    side="right"
                                    sideOffset={8}
                                    style={{
                                        backgroundColor: '#3c2b7f',
                                        color: '#fff',
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        fontSize: 14,
                                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    Call Center
                                    <Tooltip.Arrow
                                        style={{ fill: '#3c2b7f' }}
                                    />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                    <Tooltip.Provider delayDuration={100}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <Box
                                    mb="20px"
                                    cursor="pointer"
                                    onClick={() => onSideBarMenuMouseOver('my-performance')}
                                    _hover={{ opacity: 0.8 }}
                                >
                                    <FaGem color='#fff' size={24} />
                                </Box>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    side="right"
                                    sideOffset={8}
                                    style={{
                                        backgroundColor: '#3c2b7f',
                                        color: '#fff',
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        fontSize: 14,
                                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    My Performance
                                    <Tooltip.Arrow
                                        style={{ fill: '#3c2b7f' }}
                                    />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                    <Tooltip.Provider delayDuration={100}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <Box
                                    mb="20px"
                                    cursor="pointer"
                                    onClick={() => onSideBarMenuMouseOver('reports')}
                                    _hover={{ opacity: 0.8 }}
                                >
                                    <FaFileInvoiceDollar color='#fff' size={24} />
                                </Box>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    side="right"
                                    sideOffset={8}
                                    style={{
                                        backgroundColor: '#3c2b7f',
                                        color: '#fff',
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        fontSize: 14,
                                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    Reports
                                    <Tooltip.Arrow
                                        style={{ fill: '#3c2b7f' }}
                                    />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                    <Tooltip.Provider delayDuration={100}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <Box
                                    mb="20px"
                                    cursor="pointer"
                                    onClick={() => onSideBarMenuMouseOver('blogs')}
                                    _hover={{ opacity: 0.8 }}
                                >
                                    <FaFeatherAlt color='#fff' size={24} />
                                </Box>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    side="right"
                                    sideOffset={8}
                                    style={{
                                        backgroundColor: '#3c2b7f',
                                        color: '#fff',
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        fontSize: 14,
                                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    Blogs
                                    <Tooltip.Arrow
                                        style={{ fill: '#3c2b7f' }}
                                    />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                    <Tooltip.Provider delayDuration={100}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <Box
                                    mb="20px"
                                    cursor="pointer"
                                    onClick={() => onSideBarMenuMouseOver('settings')}
                                    _hover={{ opacity: 0.8 }}
                                >
                                    <FaFingerprint color='#fff' size={24} />
                                </Box>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    side="right"
                                    sideOffset={8}
                                    style={{
                                        backgroundColor: '#3c2b7f',
                                        color: '#fff',
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        fontSize: 14,
                                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    Settings
                                    <Tooltip.Arrow
                                        style={{ fill: '#3c2b7f' }}
                                    />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                    <Tooltip.Provider delayDuration={100}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <Box
                                    mb="20px"
                                    cursor="pointer"
                                    onClick={() => onSideBarMenuMouseOver('knowledge-base')}
                                    _hover={{ opacity: 0.8 }}
                                >
                                    <FaFlagCheckered color='#fff' size={24} />
                                </Box>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    side="right"
                                    sideOffset={8}
                                    style={{
                                        backgroundColor: '#3c2b7f',
                                        color: '#fff',
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        fontSize: 14,
                                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    Knowledge Base
                                    <Tooltip.Arrow
                                        style={{ fill: '#3c2b7f' }}
                                    />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                    <Tooltip.Provider delayDuration={100}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <Box
                                    mb="20px"
                                    cursor="pointer"
                                    onClick={() => onSideBarMenuMouseOver('projects')}
                                    _hover={{ opacity: 0.8 }}
                                >
                                    <FaBriefcase color='#fff' size={24} />
                                </Box>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    side="right"
                                    sideOffset={8}
                                    style={{
                                        backgroundColor: '#3c2b7f',
                                        color: '#fff',
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        fontSize: 14,
                                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    Projects
                                    <Tooltip.Arrow
                                        style={{ fill: '#3c2b7f' }}
                                    />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                    <Tooltip.Provider delayDuration={100}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <Box
                                    mb="20px"
                                    cursor="pointer"
                                    onClick={() => onSideBarMenuMouseOver('brand-tasks')}
                                    _hover={{ opacity: 0.8 }}
                                >
                                    <FaFileCode color='#fff' size={24} />
                                </Box>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    side="right"
                                    sideOffset={8}
                                    style={{
                                        backgroundColor: '#3c2b7f',
                                        color: '#fff',
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        fontSize: 14,
                                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    Brand Tasks
                                    <Tooltip.Arrow
                                        style={{ fill: '#3c2b7f' }}
                                    />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                    <Tooltip.Provider delayDuration={100}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <Box
                                    mb="20px"
                                    cursor="pointer"
                                    onClick={() => onSideBarMenuMouseOver('quality-assurance')}
                                    _hover={{ opacity: 0.8 }}
                                >
                                    <FaPuzzlePiece color='#fff' size={24} />
                                </Box>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content
                                    side="right"
                                    sideOffset={8}
                                    style={{
                                        backgroundColor: '#3c2b7f',
                                        color: '#fff',
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        fontSize: 14,
                                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    Quality Assurance
                                    <Tooltip.Arrow
                                        style={{ fill: '#3c2b7f' }}
                                    />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                </Box>
            </VStack>
            <Box overflowY="auto" display={isActive ? "flex" : "none"} borderLeft={"1px solid #fff"} bg="var(--theme-color)" w={"100%"} className='scrollCSS' h="100%" p="10px 20px">
                <Box mb="20px" w="100%" display={sideBarName == 'dashboards' ? "block" : "none"}>
                    <Text as={"h2"} mb={"25px"} display={"flex"} gap={"10px"} p={"10px 20px 0px"} alignItems={"center"} fontSize={"18px"} fontWeight={600} color={"#fff"}><AiFillDashboard color='#fff' size={24} /> Dashboards</Text>
                    <List.Root listStyleType={"none"}>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} fontSize={"14px"} fontWeight={500} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} fontSize={"14px"} fontWeight={500} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Sale Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} fontSize={"14px"} fontWeight={500} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Chargeback / Refund Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} fontSize={"14px"} fontWeight={500} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Agent Performance Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} fontSize={"14px"} fontWeight={500} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Q/A Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} fontSize={"14px"} fontWeight={500} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Expense Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} fontSize={"14px"} fontWeight={500} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Project Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} fontSize={"14px"} fontWeight={500} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Member Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} fontSize={"14px"} fontWeight={500} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Production Performance Dashboard</Link></List.Item>
                    </List.Root>
                </Box>
                <Box mb="20px" w="100%" display={sideBarName == 'leads' ? "block" : "none"}>
                    <Text as={"h2"} mb={"25px"} display={"flex"} gap={"10px"} p={"10px 20px 0px"} alignItems={"center"} fontSize={"18px"} fontWeight={600} color={"#fff"}><AiFillDashboard color='#fff' size={24} /> Leads</Text>
                    <List.Root listStyleType={"none"}>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                    </List.Root>
                </Box>
                <Box mb="20px" w="100%" display={sideBarName == 'orders' ? "block" : "none"}>
                    <Text as={"h2"} mb={"25px"} display={"flex"} gap={"10px"} p={"10px 20px 0px"} alignItems={"center"} fontSize={"18px"} fontWeight={600} color={"#fff"}><AiFillDashboard color='#fff' size={24} /> Orders</Text>
                    <List.Root listStyleType={"none"}>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                    </List.Root>
                </Box>
                <Box mb="20px" w="100%" display={sideBarName == 'transactions' ? "block" : "none"}>
                    <Text as={"h2"} mb={"25px"} display={"flex"} gap={"10px"} p={"10px 20px 0px"} alignItems={"center"} fontSize={"18px"} fontWeight={600} color={"#fff"}><AiFillDashboard color='#fff' size={24} /> Transactions</Text>
                    <List.Root listStyleType={"none"}>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                    </List.Root>
                </Box>
                <Box mb="20px" w="100%" display={sideBarName == 'merchants' ? "block" : "none"}>
                    <Text as={"h2"} mb={"25px"} display={"flex"} gap={"10px"} p={"10px 20px 0px"} alignItems={"center"} fontSize={"18px"} fontWeight={600} color={"#fff"}><AiFillDashboard color='#fff' size={24} /> Merchants</Text>
                    <List.Root listStyleType={"none"}>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                    </List.Root>
                </Box>
                <Box mb="20px" w="100%" display={sideBarName == 'hr-management' ? "block" : "none"}>
                    <Text as={"h2"} mb={"25px"} display={"flex"} gap={"10px"} p={"10px 20px 0px"} alignItems={"center"} fontSize={"18px"} fontWeight={600} color={"#fff"}><AiFillDashboard color='#fff' size={24} /> HR Management</Text>
                    <List.Root listStyleType={"none"}>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                    </List.Root>
                </Box>
                <Box mb="20px" w="100%" display={sideBarName == 'finance' ? "block" : "none"}>
                    <Text as={"h2"} mb={"25px"} display={"flex"} gap={"10px"} p={"10px 20px 0px"} alignItems={"center"} fontSize={"18px"} fontWeight={600} color={"#fff"}><AiFillDashboard color='#fff' size={24} /> Finance</Text>
                    <List.Root listStyleType={"none"}>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                    </List.Root>
                </Box>
                <Box mb="20px" w="100%" display={sideBarName == 'chat' ? "block" : "none"}>
                    <Text as={"h2"} mb={"25px"} display={"flex"} gap={"10px"} p={"10px 20px 0px"} alignItems={"center"} fontSize={"18px"} fontWeight={600} color={"#fff"}><AiFillDashboard color='#fff' size={24} /> Chat</Text>
                    <List.Root listStyleType={"none"}>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                    </List.Root>
                </Box>
                <Box mb="20px" w="100%" display={sideBarName == 'call-center' ? "block" : "none"}>
                    <Text as={"h2"} mb={"25px"} display={"flex"} gap={"10px"} p={"10px 20px 0px"} alignItems={"center"} fontSize={"18px"} fontWeight={600} color={"#fff"}><AiFillDashboard color='#fff' size={24} /> Call Center</Text>
                    <List.Root listStyleType={"none"}>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                    </List.Root>
                </Box>
                <Box mb="20px" w="100%" display={sideBarName == 'my-performance' ? "block" : "none"}>
                    <Text as={"h2"} mb={"25px"} display={"flex"} gap={"10px"} p={"10px 20px 0px"} alignItems={"center"} fontSize={"18px"} fontWeight={600} color={"#fff"}><AiFillDashboard color='#fff' size={24} /> My Performance</Text>
                    <List.Root listStyleType={"none"}>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                    </List.Root>
                </Box>
                <Box mb="20px" w="100%" display={sideBarName == 'reports' ? "block" : "none"}>
                    <Text as={"h2"} mb={"25px"} display={"flex"} gap={"10px"} p={"10px 20px 0px"} alignItems={"center"} fontSize={"18px"} fontWeight={600} color={"#fff"}><AiFillDashboard color='#fff' size={24} /> Reports</Text>
                    <List.Root listStyleType={"none"}>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                    </List.Root>
                </Box>
                <Box mb="20px" w="100%" display={sideBarName == 'blogs' ? "block" : "none"}>
                    <Text as={"h2"} mb={"25px"} display={"flex"} gap={"10px"} p={"10px 20px 0px"} alignItems={"center"} fontSize={"18px"} fontWeight={600} color={"#fff"}><AiFillDashboard color='#fff' size={24} /> Blogs</Text>
                    <List.Root listStyleType={"none"}>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                    </List.Root>
                </Box>
                <Box mb="20px" w="100%" display={sideBarName == 'settings' ? "block" : "none"}>
                    <Text as={"h2"} mb={"25px"} display={"flex"} gap={"10px"} p={"10px 20px 0px"} alignItems={"center"} fontSize={"18px"} fontWeight={600} color={"#fff"}><AiFillDashboard color='#fff' size={24} /> Settings</Text>
                    <List.Root listStyleType={"none"}>
                        <Accordion.Root collapsible>
                            {items.map((item, index) => (
                                <Accordion.Item key={index} value={item.value} border="unset">
                                    <Accordion.ItemTrigger p="10px">
                                        <Span flex="1" color="#fff">{item.title}</Span>
                                        <Accordion.ItemIndicator color="#fff" />
                                    </Accordion.ItemTrigger>
                                    <Accordion.ItemContent pl="10px">
                                        <Accordion.ItemBody>
                                            {item?.links?.map((linkItem, linkIndex) => (
                                                <Box key={linkIndex}>
                                                    <Link
                                                        as={NextLink}
                                                        color="#fff"
                                                        p="10px 20px"
                                                        borderRadius="10px"
                                                        w="100%"
                                                        _hover={{ bgColor: "#3c2b7f" }}
                                                        textDecor="none"
                                                        href={linkItem?.link}
                                                        outline={"none"}
                                                    >
                                                        {linkItem?.text}
                                                    </Link>
                                                </Box>
                                            ))}
                                        </Accordion.ItemBody>
                                    </Accordion.ItemContent>
                                </Accordion.Item>
                            ))}
                        </Accordion.Root>

                    </List.Root>
                </Box>
                <Box mb="20px" w="100%" display={sideBarName == 'knowledge-base' ? "block" : "none"}>
                    <Text as={"h2"} mb={"25px"} display={"flex"} gap={"10px"} p={"10px 20px 0px"} alignItems={"center"} fontSize={"18px"} fontWeight={600} color={"#fff"}><AiFillDashboard color='#fff' size={24} /> Knowledge Base</Text>
                    <List.Root listStyleType={"none"}>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                    </List.Root>
                </Box>
                <Box mb="20px" w="100%" display={sideBarName == 'projects' ? "block" : "none"}>
                    <Text as={"h2"} mb={"25px"} display={"flex"} gap={"10px"} p={"10px 20px 0px"} alignItems={"center"} fontSize={"18px"} fontWeight={600} color={"#fff"}><AiFillDashboard color='#fff' size={24} /> Projects</Text>
                    <List.Root listStyleType={"none"}>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                    </List.Root>
                </Box>
                <Box mb="20px" w="100%" display={sideBarName == 'brand-tasks' ? "block" : "none"}>
                    <Text as={"h2"} mb={"25px"} display={"flex"} gap={"10px"} p={"10px 20px 0px"} alignItems={"center"} fontSize={"18px"} fontWeight={600} color={"#fff"}><AiFillDashboard color='#fff' size={24} /> Brand Tasks</Text>
                    <List.Root listStyleType={"none"}>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                    </List.Root>
                </Box>
                <Box mb="20px" w="100%" display={sideBarName == 'quality-assurance' ? "block" : "none"}>
                    <Text as={"h2"} mb={"25px"} display={"flex"} gap={"10px"} p={"10px 20px 0px"} alignItems={"center"} fontSize={"18px"} fontWeight={600} color={"#fff"}><AiFillDashboard color='#fff' size={24} /> Quality Assurance</Text>
                    <List.Root listStyleType={"none"}>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                        <List.Item><Link as={NextLink} color="#fff" textDecor={"none"} mb={"10px"} p={"10px 20px"} w={"100%"} outline={"none"} borderRadius={"10px"} transition={"all ease 0.3s"} _hover={{ bgColor: "#3c2b7f" }} href="/dashboard">Leads Dashboard</Link></List.Item>
                    </List.Root>
                </Box>
            </Box>
        </Box >
    )
}

export default Sidebar;