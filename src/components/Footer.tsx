import React from 'react';
import { AppleOutlined, AndroidOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';
import Image from 'next/image';

export default function Footer() {
  const partners = [
    'https://movienew.cybersoft.edu.vn/hinhanh/cgv.png',
    'https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png',
    'https://movienew.cybersoft.edu.vn/hinhanh/galaxy-cinema.png',
    'https://movienew.cybersoft.edu.vn/hinhanh/cinestar.png',
    'https://movienew.cybersoft.edu.vn/hinhanh/lotte-cinema.png',
    'https://movienew.cybersoft.edu.vn/hinhanh/megags.png'
  ];

  return (
    <footer className="bg-zinc-900 text-zinc-400 text-sm border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Cột 1 */}
        <div className="space-y-4">
          <h3 className="font-bold text-base tracking-wider text-orange-500">CYBERFLIX</h3>
          <p className="text-xs leading-relaxed">
            Ứng dụng đặt vé xem phim trực tuyến hàng đầu Việt Nam. Trải nghiệm điện ảnh đỉnh cao chỉ với vài lượt click chuột.
          </p>
        </div>

        {/* Cột 2: Đối tác thương hiệu */}
        <div>
          <h3 className="text-white font-bold text-sm mb-4">ĐỐI TÁC CHIẾN LƯỢC</h3>
          <div className="grid grid-cols-3 gap-3">
            {partners.map((logo, index) => {
              // FIX: Sử dụng khối lệnh { return (...) } để chứa comment an toàn, tránh lỗi biên dịch JSX
              return (
                <Image 
                  key={index} 
                  src={logo} 
                  alt="Partner" 
                  width={40}
                  height={40}
                  className="rounded-full bg-white p-0.5 object-contain grayscale hover:grayscale-0 transition duration-300" 
                />
              );
            })}
          </div>
        </div>

        {/* Cột 3: Mobile Apps */}
        <div className="space-y-3">
          <h3 className="text-white font-bold text-sm mb-2">TẢI ỨNG DỤNG</h3>
          <div className="flex flex-col gap-2">
            <button className="flex items-center space-x-2 bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-3 rounded-md transition text-xs">
              <AppleOutlined className="text-lg" /> <span>App Store</span>
            </button>
            <button className="flex items-center space-x-2 bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-3 rounded-md transition text-xs">
              <AndroidOutlined className="text-lg" /> <span>Google Play</span>
            </button>
          </div>
        </div>

        {/* Cột 4: Mạng xã hội */}
        <div>
          <h3 className="text-white font-bold text-sm mb-4">KẾT NỐI VỚI CHÚNG TÔI</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-blue-500 transition"><FacebookOutlined /></a>
            <a href="#" className="hover:text-red-500 transition"><YoutubeOutlined /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-500">
        © 2026 CYBERFLIX. Toàn bộ bản quyền được bảo lưu. Phát triển bởi Phan Xuân Anh Tài.
      </div>
    </footer>
  );
}
