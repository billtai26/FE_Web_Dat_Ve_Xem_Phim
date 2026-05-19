"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, setIsLoading } from '@/store/movieSlice';
<<<<<<< HEAD
import { RootState } from '@/store/index';
import PageLayout from '@/components/PageLayout';
import HomeCarousel from '@/components/HomeCarousel';
import MovieList from '@/components/MovieList';
import CinemaComplex from '@/components/CinemaComplex';
import NewsCard from '@/components/NewsCard';
import AppFeatureCard from '@/components/AppFeatureCard';

=======

// Định nghĩa chuẩn kiểu dữ liệu từ Store của bạn
import { RootState } from '@/store/index'; 

// Import các sub-component
import Header from '@/components/Header';
import HomeCarousel from '@/components/HomeCarousel';
import MovieList from '@/components/MovieList';
import CinemaComplex from '@/components/CinemaComplex';
import Footer from '@/components/Footer';

// Hằng số mock data tĩnh ổn định cho toàn bộ ứng dụng trang chủ
>>>>>>> e1ea5fcfffafac35ee6649ff8ed5581293d8a64c
const LOCAL_MOVIES = [
  { maPhim: 1, tenPhim: 'Captain America: Brave New World', hinhAnh: 'https://picsum.photos/id/10/400/600', moTa: 'Kỷ nguyên thế giới mới của đội trưởng Mỹ hành động kịch tính.', danhGia: 9, dangChieu: true, sapChieu: false },
  { maPhim: 2, tenPhim: 'Iron Man 4: The Legacy', hinhAnh: 'https://picsum.photos/id/15/400/600', moTa: 'Sự trở lại đầy bí ẩn của bộ giáp sắt công nghệ tối tân.', danhGia: 8, dangChieu: true, sapChieu: false },
  { maPhim: 3, tenPhim: 'Avatar: The Way of Water', hinhAnh: 'https://picsum.photos/id/22/400/600', moTa: 'Khám phá đại dương Pandora huyền ảo vĩ đại.', danhGia: 10, dangChieu: true, sapChieu: false },
  { maPhim: 4, tenPhim: 'Mufasa: Vua Sư Tử', hinhAnh: 'https://picsum.photos/id/29/400/600', moTa: 'Huyền thoại về vị vua vĩ đại nhất của thảo nguyên xanh.', danhGia: 7, dangChieu: false, sapChieu: true },
];

<<<<<<< HEAD
const newsList = [
  {
    id: '1',
    title: 'Lịch chiếu lễ hội điện ảnh tháng 5',
    subtitle: 'Cập nhật các suất chiếu đặc biệt, ưu đãi vé và rạp chiếu mùa lễ hội phim.',
    date: '15/05/2026',
    img: 'https://picsum.photos/id/1049/1000/700',
    href: '/news',
  },
  {
    id: '2',
    title: 'Công nghệ AR/VR sẽ thay đổi trải nghiệm rạp phim?',
    subtitle: 'Những xu hướng mới giúp người xem tương tác với nội dung theo cách chưa từng có.',
    date: '10/05/2026',
    img: 'https://picsum.photos/id/1084/1000/700',
    href: '/news',
  },
  {
    id: '3',
    title: 'Top 5 bộ phim Marvel hot nhất hiện nay',
    subtitle: 'Danh sách phim bom tấn tạo nên cơn sốt phòng vé toàn cầu vào mùa hè này.',
    date: '07/05/2026',
    img: 'https://picsum.photos/id/1074/1000/700',
    href: '/news',
  },
];

const appFeatures = [
  { title: 'Đặt vé nhanh', description: 'Chọn phim, ghế xem và thanh toán ngay trên điện thoại.', icon: '🎟️' },
  { title: 'Lưu lịch sử', description: 'Xem lại vé đã mua, lịch chiếu và rạp yêu thích.', icon: '🧾' },
  { title: 'Ưu đãi riêng', description: 'Thông báo khuyến mãi và voucher dành riêng cho thành viên.', icon: '🔔' },
  { title: 'Mượt mà trên di động', description: 'Giao diện thân thiện với màn hình nhỏ và thao tác bằng một tay.', icon: '📱' },
];

=======
>>>>>>> e1ea5fcfffafac35ee6649ff8ed5581293d8a64c
export default function Home() {
  const dispatch = useDispatch();
  const { movieList } = useSelector((state: RootState) => state.movie);

  useEffect(() => {
<<<<<<< HEAD
=======
    // THAY THẾ TOÀN BỘ API: Đưa trực tiếp dữ liệu Mock vào Redux Store mà không cần thông qua Axios call nữa
>>>>>>> e1ea5fcfffafac35ee6649ff8ed5581293d8a64c
    dispatch(setIsLoading(true));
    dispatch(setMovies(LOCAL_MOVIES));
    dispatch(setIsLoading(false));
  }, [dispatch]);

  return (
<<<<<<< HEAD
    <PageLayout>
      <HomeCarousel />
      <MovieList movies={movieList && movieList.length > 0 ? movieList : LOCAL_MOVIES} />
      <CinemaComplex />

      <section id="tin-tuc" className="bg-white dark:bg-zinc-950 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-500 font-semibold">Tin tức nổi bật</p>
          <h2 className="mt-4 text-4xl font-extrabold text-zinc-900 dark:text-white">Cập nhật mới nhất từ thế giới phim</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">Tin tức, bài viết và sự kiện điện ảnh chọn lọc cho cộng đồng CYBERFLIX.</p>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-12 grid gap-8 lg:grid-cols-3">
          {newsList.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="/news" className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-white font-semibold shadow-lg shadow-orange-200/50 hover:bg-orange-600 transition">Xem thêm tin tức</a>
        </div>
      </section>

      <section id="ung-dung" className="bg-zinc-50 dark:bg-black py-20">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-orange-500 font-semibold">Ứng dụng di động</p>
            <h2 className="mt-4 text-4xl font-extrabold text-zinc-900 dark:text-white">Tải app CYBERFLIX - đặt vé dễ dàng</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">Kết nối với ứng dụng để mua vé nhanh hơn, nhận thông báo chương trình, và lưu mọi lịch sử đặt vé trong một chạm.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="/app" className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-white font-semibold hover:bg-orange-600 transition">Xem app</a>
              <a href="/login" className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-8 py-3 text-zinc-900 font-semibold hover:bg-zinc-100 transition">Đăng nhập</a>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {appFeatures.map((feature) => (
              <AppFeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
=======
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
>>>>>>> e1ea5fcfffafac35ee6649ff8ed5581293d8a64c
  );
}
