import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Next.js & Tailwind CSS Starter</title>
        <meta name="description" content="A Next.js project with Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2">
            <div className="flex space-x-4 items-center">
              <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <span className="font-bold">VHD...</span>
              </a>
              <div className="hidden md:flex space-x-2">
                <a href="#" className="py-5 px-3 text-gray-900 hover:text-gray-600">About</a>
                <a href="#" className="py-5 px-3 text-gray-900 hover:text-gray-600">Events</a>
                <a href="#" className="py-5 px-3 text-gray-900 hover:text-gray-600">Team</a>
                <a href="#" className="py-5 px-3 text-gray-900 hover:text-gray-600">Sponsorship</a>
              </div>
            </div>
            <div className="flex justify-end items-center space-x-1">
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Login</a>
            </div>
          </div>
        </div>
      </nav>

      <header className="text-center pt-20 pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800">
            Unlocking the marvels of human development so we can understand disease and program cells for regenerative medicine.
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Join our community and make a difference.
            </h2>
            <p className="text-gray-700 text-lg mt-4">
              Join our consortium to make a positive impact in your industry. Connect with like-minded professionals and stay up-to-date on industry developments.
            </p>
          </div>
          <img src="https://via.placeholder.com/400" alt="Placeholder" className="rounded-lg shadow-lg" />
        </div>
      </main>
    </div>
  )
}
