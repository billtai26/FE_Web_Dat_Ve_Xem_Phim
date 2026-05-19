"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { mockCinemas } from '@/store/mockCinemas';

export default function CinemaComplex() {
  const [activeSystem, setActiveSystem] = useState(mockCinemas[0]);
  const [activeBranch, setActiveBranch] = useState(mockCinemas[0].lstCumRap[0]);

  return (
    <section id="cum-rap" className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-zinc-900 dark:text-white font-['Segoe_UI',BlinkMacSystemFont,'Arial',sans-serif]">
          HỆ THỐNG CỤM RẠP LỚN
        </h2>
        <p className="text-zinc-500 mt-2 text-sm sm:text-base">Xem lịch chiếu thuận tiện nhất tại hệ thống rạp yêu thích của bạn</p>
      </div>

      {/* SỬA ĐỔI 1: Thay thế md:h-[600px] thành md:h-150 theo khuyến nghị tối ưu của Tailwind v4 */}
      <div className="bg-white border border-zinc-200 rounded-xl shadow-xs overflow-hidden grid grid-cols-1 md:grid-cols-12 md:h-150 dark:bg-zinc-900 dark:border-zinc-800">
        
        {/* Cột 1: Logo hệ thống rạp (MD: 2 Cột) */}
        {/* SỬA ĐỔI 2: Thay thế [scrollbar-width:none] thành scrollbar-none */}
        <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-zinc-200 p-3 flex md:flex-col items-center justify-start gap-4 overflow-x-auto md:h-full md:overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none dark:border-zinc-800">
          {mockCinemas.map((cinema) => (
            <button
              key={cinema.maHeThongRap}
              onClick={() => {
                setActiveSystem(cinema);
                setActiveBranch(cinema.lstCumRap[0]);
              }}
              className={`p-2 rounded-full border-2 transition-all shrink-0 ${activeSystem.maHeThongRap === cinema.maHeThongRap ? 'border-orange-500 scale-105 bg-orange-50' : 'border-transparent hover:border-zinc-300'}`}
            >
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

        {/* Cột 2: Danh sách chi nhánh rạp (MD: 4 Cột) */}
        {/* SỬA ĐỔI 3: Thay thế [scrollbar-width:none] thành scrollbar-none */}
        <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-zinc-200 md:h-full overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none dark:border-zinc-800">
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

        {/* Cột 3: Phim & Suất Chiếu (MD: 6 Cột) */}
        {/* SỬA ĐỔI 4: Thay thế [scrollbar-width:none] thành scrollbar-none */}
        <div className="md:col-span-6 p-4 md:h-full overflow-y-auto space-y-6 [&::-webkit-scrollbar]:hidden scrollbar-none">
          {activeBranch?.danhSachPhim?.map((movie) => (
            <div key={movie.maPhim} className="flex flex-col sm:flex-row gap-4 pb-6 border-b border-zinc-100 last:border-0">
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
