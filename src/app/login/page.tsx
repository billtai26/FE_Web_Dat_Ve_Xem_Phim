"use client"

import PageLayout from '@/components/PageLayout'
import AuthForm from '@/components/AuthForm'

export default function LoginPage() {
  return (
    <PageLayout>
      <section className="min-h-[calc(100vh-8rem)] flex items-center bg-[radial-gradient(circle_at_top,_rgba(255,140,0,0.15),_transparent_45%)] py-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-10 px-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-500 font-semibold">Tài khoản người dùng</p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">Chào mừng trở lại với CYBERFLIX</h1>
            <p className="mt-4 max-w-2xl mx-auto text-zinc-500 dark:text-zinc-400">Đăng nhập để xem lịch chiếu, quản lý vé và nhận ưu đãi đặc biệt.</p>
          </div>
          <AuthForm mode="login" />
        </div>
      </section>
    </PageLayout>
  )
}
