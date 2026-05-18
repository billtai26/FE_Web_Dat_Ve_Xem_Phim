"use client"
import React from 'react';
import { Tabs } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import Image from 'next/image'; // 1. Tối ưu hóa hình ảnh theo chuẩn Next.js

interface Movie {
  maPhim: number;
  tenPhim: string;
  hinhAnh: string;
  moTa: string;
  danhGia: number;
  dangChieu: boolean;
  sapChieu: boolean;
}

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  const renderMovieGrid = (filteredMovies: Movie[]) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
        {filteredMovies.slice(0, 8).map((movie) => (
          <div key={movie.maPhim} className="group relative flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border border-zinc-100 dark:bg-zinc-800 dark:border-zinc-700">
            
            {/* Ảnh Phim & Overlay (2. Cập nhật aspect-[2/3] thành aspect-2/3) */}
            <div className="relative aspect-2/3 w-full overflow-hidden bg-zinc-200">
              {/* 3. Thay thế hoàn toàn thẻ <img> bằng <Image /> của Next.js */}
              <Image 
                src={movie.hinhAnh || 'https://picsum.photos/400/600'} 
                alt={movie.tenPhim}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-0.5 rounded text-xs backdrop-blur-xs flex items-center gap-1">
                ⭐ {movie.danhGia}/10
              </div>
              
              {/* Hover Mua Vé Button Overlay */}
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 p-4 text-center">
                <button className="text-white text-5xl hover:text-orange-500 transition duration-300 mb-3">
                  <PlayCircleOutlined />
                </button>
                {/* 4. Sửa lỗi trùng lặp transition-all và transition-transform */}
                <button className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-md translate-y-4 group-hover:translate-y-0 transition duration-300">
                  MUA VÉ NGAY
                </button>
              </div>
            </div>

            {/* Thông tin Phim */}
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-bold text-base text-zinc-900 line-clamp-1 group-hover:text-orange-500 transition-colors dark:text-white">
                  <span className="bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded mr-2 font-black">C18</span>
                  {movie.tenPhim}
                </h3>
                <p className="text-zinc-500 text-xs mt-1.5 line-clamp-2 dark:text-zinc-400">
                  {movie.moTa || 'Mô tả bộ phim đang được cập nhật...'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const tabsItems = [
    {
      key: '1',
      label: <span className="text-base sm:text-lg font-bold px-4">ĐANG CHIẾU</span>,
      children: renderMovieGrid(movies.filter(m => m.dangChieu)),
    },
    {
      key: '2',
      label: <span className="text-base sm:text-lg font-bold px-4">SẮP CHIẾU</span>,
      children: renderMovieGrid(movies.filter(m => m.sapChieu)),
    },
  ];

  return (
    <section id="lich-chieu" className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
      <Tabs 
        defaultActiveKey="1" 
        centered 
        items={tabsItems} 
        className="movie-tabs"
      />
    </section>
  );
}
