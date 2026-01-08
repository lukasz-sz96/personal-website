interface AvatarProps {
  title: string
  text: string
}

export const Avatar = ({ title, text }: AvatarProps) => {
  return (
    <div className="flex gap-3">
      <div className="w-12 h-12 self-center rounded-xl bg-linear-to-br from-primary/70 to-secondary/70 flex items-center justify-center text-stone-900 font-bold text-xl shadow-lg shadow-orange-500/20">
        <h2>{title}</h2>
      </div>
      <h3 className="self-center opacity-80">{text}</h3>
    </div>

  )
}