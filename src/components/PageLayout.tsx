"use client"

import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100 selection:bg-orange-500 selection:text-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
