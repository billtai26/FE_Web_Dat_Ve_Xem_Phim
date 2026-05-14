import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ReduxProvider } from '@/store/Provider'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang = "en">
      <body>
        <ReduxProvider>
          <AntdRegistry>
            {children}
          </AntdRegistry>
        </ReduxProvider>
      </body>
    </html>
  )
}
