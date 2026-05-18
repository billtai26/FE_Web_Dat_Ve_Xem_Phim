"use client"
import React from 'react';
import { Carousel, Select, Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import Image from 'next/image'; // 1. Import component Image tối ưu của Next.js

const mockBanners = [
  { id: 1, title: 'Captain America: Brave New World', img: 'https://picsum.photos/id/10/1920/1080', trailer: '#' },
  { id: 2, title: 'Iron Man 4: The Return', img: 'https://picsum.photos/id/15/1920/1080', trailer: '#' },
  { id: 3, title: 'Avatar: The Way of Water', img: 'https://picsum.photos/id/22/1920/1080', trailer: '#' },
];

export default function HomeCarousel() {
  return (
    <div className="relative group">
      {/* Ant Design Carousel */}
      <Carousel autoplay effect="fade" dots={{ className: 'custom-dots' }}>
        {mockBanners.map((banner) => (
          <div key={banner.id} className="relative h-[40vh] sm:h-[60vh] lg:h-[75vh] w-full bg-black overflow-hidden">
            {/* 2. Thay thế <img> bằng <Image />, sử dụng 'fill' để co giãn tự động theo khung relative */}
            <Image 
              src={banner.img} 
              alt={banner.title} 
              fill
              sizes="100vw"
              priority={banner.id === 1} // 3. Tối ưu hóa chỉ số LCP cho banner đầu tiên hiển thị lập tức
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="text-white text-5xl md:text-7xl hover:text-orange-500 transition-all transform hover:scale-110">
                <PlayCircleOutlined />
              </button>
              <h2 className="text-white font-bold text-lg md:text-2xl mt-4 px-4 text-center drop-shadow-md">
                {banner.title}
              </h2>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Quick Booking Bar (Responsive: Ẩn trên Mobile nhỏ, Hiện từ Tablet/Desktop) */}
      <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-5xl px-4 z-20">
        <div className="bg-white p-4 rounded-lg shadow-xl grid grid-cols-5 gap-3 items-center border border-zinc-100 dark:bg-zinc-800 dark:border-zinc-700">
          <Select placeholder="Chọn phim" className="w-full" showSearch options={[{ value: '1', label: 'Captain America' }]} />
          <Select placeholder="Chọn rạp" className="w-full" showSearch options={[{ value: '1', label: 'CGV'}]} />
          <Select placeholder="Chọn ngày xem" className="w-full" showSearch options={[{ value: '1', label: '24/05/2026'}]} />
          <Select placeholder="Chọn suất chiếu" className="w-full" showSearch options={[{ value: '1', label: '10:00'}]} />
          
          {/* 4. Cập nhật bg-gradient-to-r sang bg-linear-to-r theo chuẩn Tailwind v4 */}
          <Button type="primary" danger className="w-full h-9 bg-linear-to-r from-orange-500 to-red-600 font-semibold border-none">
            MUA VÉ NHANH
          </Button>
        </div>
      </div>
    </div>
  );
}
