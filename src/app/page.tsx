"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, setIsLoading } from '@/store/movieSlice';

// Định nghĩa chuẩn kiểu dữ liệu từ Store của bạn
import { RootState } from '@/store/index'; 

// Import các sub-component
import Header from '@/components/Header';
import HomeCarousel from '@/components/HomeCarousel';
import MovieList from '@/components/MovieList';
import CinemaComplex from '@/components/CinemaComplex';
import Footer from '@/components/Footer';

// Hằng số mock data tĩnh ổn định cho toàn bộ ứng dụng trang chủ
const LOCAL_MOVIES = [
  { maPhim: 1, tenPhim: 'Captain America: Brave New World', hinhAnh: 'https://picsum.photos/id/10/400/600', moTa: 'Kỷ nguyên thế giới mới của đội trưởng Mỹ hành động kịch tính.', danhGia: 9, dangChieu: true, sapChieu: false },
  { maPhim: 2, tenPhim: 'Iron Man 4: The Legacy', hinhAnh: 'https://picsum.photos/id/15/400/600', moTa: 'Sự trở lại đầy bí ẩn của bộ giáp sắt công nghệ tối tân.', danhGia: 8, dangChieu: true, sapChieu: false },
  { maPhim: 3, tenPhim: 'Avatar: The Way of Water', hinhAnh: 'https://picsum.photos/id/22/400/600', moTa: 'Khám phá đại dương Pandora huyền ảo vĩ đại.', danhGia: 10, dangChieu: true, sapChieu: false },
  { maPhim: 4, tenPhim: 'Mufasa: Vua Sư Tử', hinhAnh: 'https://picsum.photos/id/29/400/600', moTa: 'Huyền thoại về vị vua vĩ đại nhất của thảo nguyên xanh.', danhGia: 7, dangChieu: false, sapChieu: true },
];

export default function Home() {
  const dispatch = useDispatch();
  const { movieList } = useSelector((state: RootState) => state.movie);

  useEffect(() => {
    // THAY THẾ TOÀN BỘ API: Đưa trực tiếp dữ liệu Mock vào Redux Store mà không cần thông qua Axios call nữa
    dispatch(setIsLoading(true));
    dispatch(setMovies(LOCAL_MOVIES));
    dispatch(setIsLoading(false));
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* 1. Thanh điều hướng Header */}
      <Header />

      {/* Toàn bộ bố cục trang chủ nội dung mẫu */}
      <main className="flex-1 flex flex-col">
        {/* 2. Banner lớn Carousel */}
        <HomeCarousel />

        {/* 3. Tab danh sách phim truyền dữ liệu mẫu từ Store */}
        <MovieList movies={movieList && movieList.length > 0 ? movieList : LOCAL_MOVIES} />
        
        {/* 4. Khung tương tác hệ thống cụm rạp */}
        <CinemaComplex />
      </main>

      {/* 5. Chân trang Footer đối tác */}
      <Footer />
    </div>
  );
}
