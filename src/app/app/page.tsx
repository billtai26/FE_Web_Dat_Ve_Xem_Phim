import PageLayout from '@/components/PageLayout'
import AppFeatureCard from '@/components/AppFeatureCard'

const features = [
  {
    title: 'Mua vé nhanh chóng',
    description: 'Tìm suất chiếu, chọn ghế và thanh toán chỉ trong vài bước nhanh gọn.',
    icon: '🎟️',
  },
  {
    title: 'Lưu vé và đơn đặt',
    description: 'Quản lý lịch sử đặt vé và thông tin thành viên tập trung trên ứng dụng.',
    icon: '🧾',
  },
  {
    title: 'Thông báo ưu đãi',
    description: 'Nhận thông báo tự động khi có chương trình giảm giá hoặc suất chiếu đặc biệt.',
    icon: '🔔',
  },
  {
    title: 'Tải nhanh trên di động',
    description: 'Ứng dụng mượt mà trên cả iOS và Android với trải nghiệm tối ưu.',
    icon: '📱',
  },
]

export default function AppPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.35em] font-semibold opacity-90">Ứng dụng CYBERFLIX</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold">Trải nghiệm đặt vé tiện lợi mọi lúc mọi nơi</h1>
          <p className="mt-4 max-w-3xl mx-auto text-zinc-100/90 leading-relaxed">Tải ứng dụng để đặt vé nhanh, check-in tự động và nhận ưu đãi nội bộ ngay trên điện thoại.</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="rounded-full bg-white/10 px-8 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-white/20 transition">App Store</button>
            <button className="rounded-full bg-white/10 px-8 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-white/20 transition">Google Play</button>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 dark:bg-zinc-950 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-orange-500 font-semibold">Tính năng nổi bật</p>
              <h2 className="mt-4 text-4xl font-extrabold text-zinc-900 dark:text-white">Ứng dụng đặt vé thông minh và đầy đủ tính năng</h2>
              <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">Dễ dàng tìm phim, so sánh lịch chiếu, lưu rạp ưa thích và nhận thông báo khi có vé giá tốt.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {features.map((item) => (
                <AppFeatureCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-zinc-900 py-20">
        <div className="max-w-6xl mx-auto px-4 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white">Tải ứng dụng ngay để không bỏ lỡ suất chiếu hấp dẫn</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">Ứng dụng hỗ trợ đặt vé dành riêng cho Android và iOS, giúp trải nghiệm mượt mà và nhanh chóng hơn so với web.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-orange-500 px-6 py-3 text-white font-semibold hover:bg-orange-600 transition">Tải iOS</button>
              <button className="rounded-full bg-zinc-900 px-6 py-3 text-white font-semibold hover:bg-zinc-800 transition">Tải Android</button>
            </div>
          </div>
          <div className="rounded-[2rem] bg-gradient-to-br from-orange-200 to-white p-6 shadow-2xl shadow-orange-200/50">
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[2rem] bg-zinc-900 p-5 text-white">
              <div className="absolute inset-x-0 top-5 flex items-center justify-between px-4 text-sm opacity-70">
                <span>CYBERFLIX App</span>
                <span>10:24</span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="mb-6 rounded-3xl bg-zinc-950/80 p-4">
                  <h3 className="text-xl font-semibold">Hot Movie</h3>
                  <p className="text-sm text-zinc-300 mt-2">Mua vé dễ dàng, chọn ghế và nhận thông báo nhanh.</p>
                </div>
                <div className="grid gap-3 text-sm">
                  <div className="rounded-3xl bg-zinc-800/70 p-4">Lịch chiếu yêu thích</div>
                  <div className="rounded-3xl bg-zinc-800/70 p-4">Phòng vé VIP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
