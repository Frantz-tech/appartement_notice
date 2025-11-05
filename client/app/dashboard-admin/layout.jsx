export const metadata = {
  title: 'Dashboard Admin',
  description: ' Interface complète pour gérer les données de l’appartement. '
}

export default function AdminLayout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}
