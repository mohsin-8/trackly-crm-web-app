"use client";
import React from 'react';
import Link from 'next/link';
import { Box, Button, List, Text, VStack } from "@chakra-ui/react";
// import { IoIosLogOut } from "react-icons/io";
// import { FaTrophy } from "react-icons/fa";
// import { SiGoogleads } from "react-icons/si";
// import { GoProjectRoadmap } from "react-icons/go";
// import { IoCreateOutline, IoPersonSharp } from "react-icons/io5"
// import { PiMicrosoftTeamsLogo, PiKanbanLight } from "react-icons/pi";
// import { FaUsers } from "react-icons/fa6";
import { AiFillDashboard } from "react-icons/ai";
import { FaBinoculars, FaDonate, FaTrophy, FaCommentDollar, FaUsersCog } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

const Sidebar = () => {
    return (
        <Box as="nav" w="90px" h="100vh" bg="#5D3FD3" boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">
            <VStack display="block" gap="4" align="start">
                <Box overflowY="auto" h="calc(100vh - 80px)" p="20px 25px 60px">
                    <Box mb="20px">
                        <Link href="/dashboard" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><AiFillDashboard color='#fff' size={24} /></Link>
                    </Box>
                    <Box mb="20px">
                        <Link href="/dashboard" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><FaBinoculars color='#fff' size={24} /></Link>
                    </Box>
                    <Box mb="20px">
                        <Link href="/dashboard" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><FaDonate color='#fff' size={24} /></Link>
                    </Box>
                    <Box mb="20px">
                        <Link href="/dashboard" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><FaTrophy color='#fff' size={24} /></Link>
                    </Box>
                    <Box mb="20px">
                        <Link href="/dashboard" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><FaCommentDollar color='#fff' size={24} /></Link>
                    </Box>
                    <Box mb="20px">
                        <Link href="/dashboard" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><FaUsersCog color='#fff' size={24} /></Link>
                    </Box>
                    <Box mb="20px">
                        <Link href="/dashboard" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><FaSackDollar color='#fff' size={24} /></Link>
                    </Box>
                    {/* <Box mb="20px">
                        <Box mb="15px">
                            <Text fontSize="14px" fontWeight={500} color="#fff">Sales</Text>
                        </Box>
                        <List.Root listStyleType="none">
                            <List.Item marginBottom="15px">
                                <Link href="/sales/leads" style={{ color: "#fff", display: "flex", alignItems: "center", gap: "6px" }}><SiGoogleads size={20} /> Leads</Link>
                            </List.Item>
                            <List.Item marginBottom="15px">
                                <Link href="#" style={{ color: "#fff", display: "flex", alignItems: "center", gap: "6px" }}><FaTrophy size={20} /> Orders</Link>
                            </List.Item>
                            <List.Item marginBottom="15px">
                                <Link href="#" style={{ color: "#fff", display: "flex", alignItems: "center", gap: "6px" }}><FaTrophy size={20} /> Invoices</Link>
                            </List.Item>
                        </List.Root>
                    </Box>
                    <Box mb="20px">
                        <Box mb="15px">
                            <Text fontSize="14px" fontWeight={500} color="#fff">Project Management</Text>
                        </Box>
                        <List.Root listStyleType="none">
                            <List.Item marginBottom="15px">
                                <Link href="/projects" style={{ color: "#fff", display: "flex", alignItems: "center", gap: "6px" }}><GoProjectRoadmap size={20} /> Projects List</Link>
                            </List.Item>
                            <List.Item marginBottom="15px">
                                <Link href="/dashboard" style={{ color: "#fff", display: "flex", alignItems: "center", gap: "6px" }}><IoCreateOutline size={20} /> Create Project</Link>
                            </List.Item>
                            <List.Item marginBottom="15px">
                                <Link href="/dashboard" style={{ color: "#fff", display: "flex", alignItems: "center", gap: "6px" }}><PiKanbanLight size={20} /> Kanban Board</Link>
                            </List.Item>
                            <List.Item marginBottom="15px">
                                <Link href="/dashboard" style={{ color: "#fff", display: "flex", alignItems: "center", gap: "6px" }}><IoPersonSharp size={20} /> Clients</Link>
                            </List.Item>
                        </List.Root>
                    </Box>
                    <Box mb="20px">
                        <Box mb="15px">
                            <Text fontSize="14px" fontWeight={500} color="#fff">HR Management</Text>
                        </Box>
                        <List.Root listStyleType="none">
                            <List.Item marginBottom="15px">
                                <Link href="/hr/users" style={{ color: "#fff", display: "flex", alignItems: "center", gap: "6px" }}><FaUsers size={20} /> Users</Link>
                            </List.Item>
                            <List.Item marginBottom="15px">
                                <Link href="/dashboard" style={{ color: "#fff", display: "flex", alignItems: "center", gap: "6px" }}><PiMicrosoftTeamsLogo size={20} /> Teams</Link>
                            </List.Item>
                        </List.Root>
                    </Box> */}
                </Box>
            </VStack>
        </Box>
    )
}

export default Sidebar;