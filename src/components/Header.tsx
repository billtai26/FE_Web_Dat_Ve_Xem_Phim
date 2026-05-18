"use client"
import React, { useState } from 'react';
import { Drawer } from 'antd';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { key: 'lich-chieu', label: <a href="#lich-chieu" className="font-medium hover:text-orange-500 transition-colors">Lịch Chiếu</a> },
    { key: 'cum-rap', label: <a href="#cum-rap" className="font-medium hover:text-orange-500 transition-colors">Cụm Rạp</a> },
    { key: 'tin-tuc', label: <a href="#tin-tuc" className="font-medium hover:text-orange-500 transition-colors">Tin Tức</a> },
    { key: 'ung-dung', label: <a href="#ung-dung" className="font-medium hover:text-orange-500 transition-colors">Ứng Dụng</a> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all dark:bg-zinc-900/95">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo CyberSoft Style */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-600">
            CYBERFLIX
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map(item => (
            <div key={item.key}>{item.label}</div>
          ))}
        </nav>

        {/* User Actions (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="flex items-center space-x-1 text-zinc-600 hover:text-orange-500 transition dark:text-zinc-300">
            <UserOutlined />
            <span className="font-medium text-sm">Đăng Nhập</span>
          </Link>
          <span className="text-zinc-300">|</span>
          <Link href="/register" className="font-medium text-sm text-zinc-600 hover:text-orange-500 transition dark:text-zinc-300">
            Đăng Ký
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-zinc-600 hover:text-orange-500 transition dark:text-zinc-300"
          onClick={() => setOpen(true)}
        >
          <MenuOutlined className="text-xl" />
        </button>
      </div>

      {/* Mobile Sidebar Drawer */}
      <Drawer
        title="Danh Mục Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        size="default" // FIX: Thay thế width={280} thành size="default" để xóa bỏ hoàn toàn Warning Antd
      >
        <div className="flex flex-col space-y-6">
          <nav className="flex flex-col space-y-4">
            {menuItems.map(item => (
              <div key={item.key} onClick={() => setOpen(false)} className="text-lg">
                {item.label}
              </div>
            ))}
          </nav>
          <hr className="border-zinc-200" />
          <div className="flex flex-col space-y-3">
            <Link href="/login" onClick={() => setOpen(false)} className="flex items-center space-x-2 text-zinc-700">
              <UserOutlined /> <span className="font-medium">Đăng Nhập</span>
            </Link>
            <Link href="/register" onClick={() => setOpen(false)} className="font-medium text-zinc-700">
              Đăng Ký
            </Link>
          </div>
        </div>
      </Drawer>
    </header>
  );
}
