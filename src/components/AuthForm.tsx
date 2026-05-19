"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Alert, Button, Checkbox, Input, Typography } from 'antd'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'

const { Text, Title } = Typography

type AuthFormProps = {
  mode: 'login' | 'register'
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '', remember: false })
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'success' | 'error' | ''>('')

  const isLogin = mode === 'login'

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setStatus('')
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!form.email.trim() || !form.password.trim() || (!isLogin && !form.name.trim())) {
      setStatus('error')
      setMessage('Vui lòng điền đầy đủ thông tin để tiếp tục.')
      return
    }

    if (!isLogin && form.password !== form.confirmPassword) {
      setStatus('error')
      setMessage('Mật khẩu và xác nhận mật khẩu không khớp.')
      return
    }

    setStatus('success')
    setMessage(isLogin ? 'Đăng nhập thành công (demo).' : 'Đăng ký thành công (demo).')
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 max-w-6xl mx-auto px-4 py-16">
      <div className="bg-white/95 dark:bg-zinc-950/95 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-lg">
        <Title level={2} className="!text-3xl !font-extrabold !text-zinc-900 dark:!text-white">
          {isLogin ? 'Đăng Nhập' : 'Tạo Tài Khoản'}
        </Title>
        <Text className="text-zinc-500 dark:text-zinc-400 block mb-6">
          {isLogin
            ? 'Đăng nhập để quản lý lịch sử đặt vé và nhận ưu đãi nhanh chóng.'
            : 'Đăng ký ngay để bắt đầu mua vé và theo dõi tin tức phim mới nhất.'}
        </Text>

        {status && (
          <Alert
            className="mb-6"
            type={status}
            message={message}
            showIcon
          />
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <Input
                size="large"
                placeholder="Họ và tên"
                prefix={<UserOutlined />}
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
          )}

          <div>
            <Input
              size="large"
              placeholder="Email"
              type="email"
              prefix={<MailOutlined />}
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>

          <div>
            <Input.Password
              size="large"
              placeholder="Mật khẩu"
              prefix={<LockOutlined />}
              value={form.password}
              onChange={(e) => handleChange('password', e.target.value)}
            />
          </div>

          {!isLogin && (
            <div>
              <Input.Password
                size="large"
                placeholder="Xác nhận mật khẩu"
                prefix={<LockOutlined />}
                value={form.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
              />
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Checkbox
              checked={form.remember}
              onChange={(e) => handleChange('remember', e.target.checked)}
            >
              Ghi nhớ đăng nhập
            </Checkbox>
            <Link href={isLogin ? '/register' : '/login'} className="text-sm text-orange-500 hover:text-orange-600 transition">
              {isLogin ? 'Chưa có tài khoản? Đăng ký' : 'Đã có tài khoản? Đăng nhập'}
            </Link>
          </div>

          <Button htmlType="submit" type="primary" size="large" className="w-full bg-orange-500 border-none hover:bg-orange-600">
            {isLogin ? 'Đăng Nhập' : 'Đăng Ký'}
          </Button>
        </form>
      </div>

      <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
        <div className="rounded-3xl bg-orange-50/90 dark:bg-orange-950/20 p-8 border border-orange-100 dark:border-orange-800 shadow-sm">
          <Title level={4} className="!text-2xl !text-orange-600">Lợi ích khi dùng CYBERFLIX</Title>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3"><span className="font-semibold">•</span> Quản lý vé dễ dàng, check-in nhanh.</li>
            <li className="flex gap-3"><span className="font-semibold">•</span> Nhận ưu đãi, voucher và thông báo sớm.</li>
            <li className="flex gap-3"><span className="font-semibold">•</span> Lưu lịch sử xem phim và rạp yêu thích.</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white/95 dark:bg-zinc-950/95 border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm">
          <Title level={5} className="!text-xl !font-bold">Kết nối nhanh</Title>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            Dùng tài khoản để truy cập mọi chức năng đặt vé và tin tức ứng dụng.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Button type="default" className="bg-zinc-100 hover:bg-zinc-200 text-zinc-800">App Store</Button>
            <Button type="default" className="bg-zinc-100 hover:bg-zinc-200 text-zinc-800">Google Play</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
