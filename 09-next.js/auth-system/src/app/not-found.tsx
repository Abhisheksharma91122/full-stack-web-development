import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
        <h1 className='text-3xl font-bold'>404 - Page Not Found</h1>
        <p className='text-lg'>The page you are looking for does not exist.</p>
        <Link href="/" className='mt-4 text-blue-500 hover:underline'>
          Go back to Home
        </Link>
    </div>
  )
}