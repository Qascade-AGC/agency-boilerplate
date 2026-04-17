export const metadata = {
  title: "Agency Boilerplate",
  description: "Base template for client projects",
}

import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
