"use client"
import React, { useState } from 'react';
import { Drawer } from 'antd';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';

  const menuItems = [
    { key: 'lich-chieu', href: '/#lich-chieu', label: 'Lịch Chiếu' },
    { key: 'cum-rap', href: '/#cum-rap', label: 'Cụm Rạp' },
    { key: 'tin-tuc', href: '/news', label: 'Tin Tức' },
    { key: 'ung-dung', href: '/app', label: 'Ứng Dụng' },
  ];

  const isActiveLink = (href: string) => {
    if (href.startsWith('/#')) {
      return pathname === '/';
    }
    return pathname === href;
  };

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
            <Link
              key={item.key}
              href={item.href}
              className={`font-medium transition-colors ${isActiveLink(item.href) ? 'text-orange-500' : 'text-zinc-600 hover:text-orange-500 dark:text-zinc-300'}`}
            >
              {item.label}
            </Link>
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
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-lg ${isActiveLink(item.href) ? 'text-orange-500' : 'text-zinc-700 hover:text-orange-500'}`}
              >
                {item.label}
              </Link>
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
