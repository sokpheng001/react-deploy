
"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
export function Filter() {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Cosmetic</Sidebar.Item>
            <Sidebar.Item href="#">Book</Sidebar.Item>
            <Sidebar.Item href="#">Coca-Cola</Sidebar.Item>
            <Sidebar.Item href="#">Toy</Sidebar.Item>
            <Sidebar.Item href="#">Drink</Sidebar.Item>
            <Sidebar.Item href="#">Clothes</Sidebar.Item>
            <Sidebar.Item href="#">Shirts</Sidebar.Item>
            <Sidebar.Item href="#">Electrics</Sidebar.Item>
            <Sidebar.Item href="#">Bread</Sidebar.Item>
            <Sidebar.Item href="#">Computer</Sidebar.Item>
            <Sidebar.Item href="#">Energy Drink</Sidebar.Item>
            <Sidebar.Item href="#">FSkincare</Sidebar.Item>
            <Sidebar.Item href="#">Food</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
