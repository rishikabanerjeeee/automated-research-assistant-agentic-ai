import UploadCard from '../components/upload-card'
import QueryCard from '../components/query-card'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary to-secondary p-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UploadCard />
          <QueryCard />
        </div>
      </div>
    </main>
  )
}