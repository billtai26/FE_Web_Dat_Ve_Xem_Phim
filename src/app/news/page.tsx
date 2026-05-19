import PageLayout from '@/components/PageLayout'
import NewsCard from '@/components/NewsCard'

const newsList = [
  {
    id: '1',
    title: 'Lịch chiếu lễ hội điện ảnh tháng 5',
    subtitle: 'Cập nhật các suất chiếu đặc biệt, ưu đãi vé và rạp chiếu mùa lễ hội phim.',
    date: '15/05/2026',
    img: 'https://picsum.photos/id/1049/1000/700',
    href: '#',
  },
  {
    id: '2',
    title: 'Công nghệ AR/VR sẽ thay đổi trải nghiệm rạp phim?',
    subtitle: 'Những xu hướng mới giúp người xem tương tác với nội dung theo cách chưa từng có.',
    date: '10/05/2026',
    img: 'https://picsum.photos/id/1084/1000/700',
    href: '#',
  },
  {
    id: '3',
    title: 'Top 5 bộ phim Marvel hot nhất hiện nay',
    subtitle: 'Danh sách phim bom tấn tạo nên cơn sốt phòng vé toàn cầu vào mùa hè này.',
    date: '07/05/2026',
    img: 'https://picsum.photos/id/1074/1000/700',
    href: '#',
  },
]

export default function NewsPage() {
  return (
    <PageLayout>
      <section className="bg-zinc-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-400 font-semibold">Tin tức điện ảnh</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold">Tin tức & Cập nhật</h1>
          <p className="mt-4 max-w-3xl mx-auto text-zinc-300">Xem những tin tức mới nhất về rạp chiếu, phim bom tấn và ưu đãi đặc biệt chỉ có trên CYBERFLIX.</p>
        </div>
      </section>

      <section className="bg-zinc-50 dark:bg-zinc-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {newsList.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-zinc-950 py-16">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-orange-500 font-semibold">Cập nhật nhanh</p>
            <h2 className="mt-4 text-3xl font-extrabold text-zinc-900 dark:text-white">Thông báo khuyến mãi và sự kiện hấp dẫn</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">Nhận tin tức quan trọng về vé giảm giá, suất chiếu sớm và các chương trình thành viên mới. CYBERFLIX luôn cập nhật từng phút để bạn không bỏ lỡ.</p>
          </div>
          <div className="rounded-3xl border border-zinc-200 bg-orange-50 p-8 shadow-sm dark:border-zinc-800 dark:bg-orange-950/10">
            <h3 className="text-2xl font-bold text-orange-600">Đăng ký nhận bản tin</h3>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">Nhập email để nhận tin khuyến mãi và lịch chiếu mới nhất trực tiếp vào hộp thư.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email của bạn"
                className="min-w-0 flex-1 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-orange-400"
              />
              <button className="rounded-2xl bg-orange-500 px-6 py-3 text-white font-semibold hover:bg-orange-600 transition">Đăng ký</button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
