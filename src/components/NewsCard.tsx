import Image from 'next/image'
import Link from 'next/link'

interface NewsCardProps {
  title: string
  subtitle: string
  date: string
  img: string
  href: string
}

export default function NewsCard({ title, subtitle, date, img, href }: NewsCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold mb-3">{date}</div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{title}</h3>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mb-5">{subtitle}</p>
        <Link href={href} className="inline-flex items-center text-orange-500 font-semibold hover:underline">
          Xem thêm
        </Link>
      </div>
    </article>
  )
}
