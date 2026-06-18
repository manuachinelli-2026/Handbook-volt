'use client'

export function YoutubeEmbed({ id, title = 'Feature video' }) {
  if (!id) return null
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?modestbranding=1&rel=0&showinfo=0&controls=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}
