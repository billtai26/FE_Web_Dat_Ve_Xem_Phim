"use client"

import PageLayout from '@/components/PageLayout'
import AuthForm from '@/components/AuthForm'

export default function RegisterPage() {
  return (
    <PageLayout>
      <section className="min-h-[calc(100vh-8rem)] flex items-center bg-[radial-gradient(circle_at_top,_rgba(0,112,255,0.12),_transparent_40%)] py-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-10 px-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-500 font-semibold">Tạo tài khoản mới</p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">Tham gia cộng đồng CYBERFLIX</h1>
            <p className="mt-4 max-w-2xl mx-auto text-zinc-500 dark:text-zinc-400">Đăng ký để lưu vé, cập nhật phim mới, và nhận nhiều ưu đãi khi mua vé.</p>
          </div>
          <AuthForm mode="register" />
        </div>
      </section>
    </PageLayout>
  )
}
