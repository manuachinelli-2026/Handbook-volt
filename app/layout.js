import './globals.css'
import { LanguageProvider } from '@/contexts/language'

export const metadata = {
  title: 'Volt Guide',
  description: 'Descubrí todo lo que podés hacer con Volt.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full bg-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
