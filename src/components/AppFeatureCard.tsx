interface AppFeatureCardProps {
  title: string
  description: string
  icon: string
}

export default function AppFeatureCard({ title, description, icon }: AppFeatureCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl text-orange-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  )
}
