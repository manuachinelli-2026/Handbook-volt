import './globals.css'

export const metadata = {
  title: 'Handbook | Volt',
  description: 'El handbook interno de Volt — cultura, proceso y equipo.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  )
}
