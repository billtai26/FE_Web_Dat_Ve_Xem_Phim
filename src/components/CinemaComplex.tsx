"use client"
import React, { useState } from 'react';
import Image from 'next/image'; // 1. Tối ưu hóa toàn bộ hình ảnh bằng Next.js Image

// Mock Data chuẩn định dạng CyberSoft API
const mockCinemas = [
  {
    maHeThongRap: 'CGV',
    logo: 'https://movienew.cybersoft.edu.vn/hinhanh/cgv.png',
    lstCumRap: [
      { maCumRap: 'cgv-hung-vuong', tenCumRap: 'CGV Hùng Vương Plaza', diaChi: '126 Hùng Vương, Q.5', danhSachPhim: [
        { maPhim: 101, tenPhim: 'Đào, Phở Và Piano', hinhAnh: 'https://picsum.photos/id/33/100/150', lstLichChieuTheoPhim: ['09:10', '12:30', '15:45', '19:00', '21:30'] }
      ]},
      { maCumRap: 'cgv-aeon-binh-tan', tenCumRap: 'CGV Aeon Bình Tân', diaChi: 'Số 1 Đường số 17A, Bình Tân', danhSachPhim: [
        { maPhim: 102, tenPhim: 'Chuyến Xe Băng Giá', hinhAnh: 'https://picsum.photos/id/44/100/150', lstLichChieuTheoPhim: ['10:00', '14:15', '18:30', '22:00'] }
      ]}
    ]
  },
  {
    maHeThongRap: 'BHD',
    logo: 'https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png',
    lstCumRap: [
      { maCumRap: 'bhd-3-thang-2', tenCumRap: 'BHD Star 3 Tháng 2', diaChi: '3C Đường 3/2, Q.10', danhSachPhim: [
        { maPhim: 101, tenPhim: 'Đào, Phở Và Piano', hinhAnh: 'https://picsum.photos/id/33/100/150', lstLichChieuTheoPhim: ['11:00', '16:00', '20:45'] }
      ]}
    ]
  }
];

export default function CinemaComplex() {
  const [activeSystem, setActiveSystem] = useState(mockCinemas[0]);
  const [activeBranch, setActiveBranch] = useState(mockCinemas[0].lstCumRap[0]);

  return (
    <section id="cum-rap" className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">HỆ THỐNG CỤM RẠP LỚN</h2>
        <p className="text-zinc-500 mt-2 text-sm sm:text-base">Xem lịch chiếu thuận tiện nhất tại hệ thống rạp yêu thích của bạn</p>
      </div>

      {/* Bố cục 3 Cột của CyberSoft Layout */}
      {/* 2. Cập nhật thuộc tính chiều cao tối đa sang max-h-125 chuẩn Tailwind v4 */}
      <div className="bg-white border border-zinc-200 rounded-xl shadow-xs overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-500px dark:bg-zinc-900 dark:border-zinc-800">
        
        {/* Cột 1: Logo hệ thống rạp (MD: 2 Cột) */}
        <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-zinc-200 p-3 flex md:flex-col items-center justify-start gap-4 overflow-x-auto md:overflow-y-auto dark:border-zinc-800">
          {mockCinemas.map((cinema) => (
            <button
              key={cinema.maHeThongRap}
              onClick={() => {
                setActiveSystem(cinema);
                setActiveBranch(cinema.lstCumRap[0]);
              }}
              className={`p-2 rounded-full border-2 transition-all shrink-0 ${activeSystem.maHeThongRap === cinema.maHeThongRap ? 'border-orange-500 scale-105 bg-orange-50' : 'border-transparent hover:border-zinc-300'}`}
            >
              {/* Thay thế <img> bằng <Image /> của Next.js */}
              <Image 
                src={cinema.logo} 
                alt={cinema.maHeThongRap} 
                width={48} 
                height={48} 
                className="rounded-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Cột 2: Danh sách chi nhánh rạp (MD: 4 Cột - Đã đổi sang max-h-125) */}
        <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-zinc-200 max-h-125 overflow-y-auto dark:border-zinc-800">
          {activeSystem.lstCumRap.map((branch) => (
            <div
              key={branch.maCumRap}
              onClick={() => setActiveBranch(branch)}
              className={`p-4 border-b border-zinc-100 last:border-0 cursor-pointer transition-colors ${activeBranch.maCumRap === branch.maCumRap ? 'bg-orange-50/60 dark:bg-zinc-800' : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50'}`}
            >
              <h4 className="font-bold text-sm text-zinc-900 dark:text-white">{branch.tenCumRap}</h4>
              <p className="text-zinc-500 text-xs mt-1 truncate dark:text-zinc-400">{branch.diaChi}</p>
            </div>
          ))}
        </div>

        {/* Cột 3: Phim & Suất Chiếu (MD: 6 Cột - Đã đổi sang max-h-125) */}
        <div className="md:col-span-6 p-4 max-h-125 overflow-y-auto space-y-6">
          {activeBranch?.danhSachPhim?.map((movie) => (
            <div key={movie.maPhim} className="flex flex-col sm:flex-row gap-4 pb-6 border-b border-zinc-100 last:border-0">
              {/* Thay thế <img> bằng <Image /> của Next.js */}
              <Image 
                src={movie.hinhAnh} 
                alt={movie.tenPhim} 
                width={80} 
                height={112} 
                className="object-cover rounded-md shadow-sm bg-zinc-100 shrink-0 self-start"
              />
              <div className="flex-1">
                <h5 className="font-bold text-base text-zinc-900 dark:text-white">
                  <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded mr-2 font-bold">2D</span>
                  {movie.tenPhim}
                </h5>
                <p className="text-zinc-400 text-xs mt-1">Thời lượng: 120 phút - TIX 8.9</p>
                
                {/* Giờ chiếu */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-4">
                  {movie.lstLichChieuTheoPhim.map((time, idx) => (
                    <button
                      key={idx}
                      className="py-1.5 px-2 bg-zinc-50 hover:bg-orange-50 hover:text-orange-500 text-zinc-700 rounded text-xs font-semibold border border-zinc-200 hover:border-orange-300 transition-all text-center dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-orange-950/30"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
