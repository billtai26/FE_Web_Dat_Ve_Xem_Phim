import Link from 'next/link'
import PageLayout from '@/components/PageLayout'

export default function NotFound() {
  return (
    <PageLayout>
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-zinc-950 text-white py-20">
        <div className="max-w-3xl mx-auto rounded-3xl border border-zinc-800 bg-zinc-900/95 p-10 text-center shadow-2xl shadow-black/40">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-500 font-semibold">404 | Không tìm thấy trang</p>
          <h1 className="mt-6 text-6xl font-black">Oops!</h1>
          <p className="mt-6 text-zinc-400 leading-relaxed">Trang bạn đang tìm không tồn tại hoặc đã bị thay đổi. Quay lại trang chủ để tiếp tục khám phá lịch chiếu và tin tức.</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/" className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition">Về trang chủ</Link>
            <Link href="/news" className="rounded-full border border-zinc-700 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition">Xem tin tức</Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
