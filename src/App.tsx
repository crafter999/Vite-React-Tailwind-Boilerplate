// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { toast } from 'sonner'
import './App.css'
import { Toaster } from '@/components/ui/sonner'

function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 via-pink-500 to-yellow-400">
      <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
        Welcome
      </h1>
      <p className="text-xl text-white mb-8 max-w-xl text-center">
        Discover the magic of modern web development with a beautiful, responsive landing page powered by React and Tailwind CSS.
      </p>
      <a
        href="#"
        className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:bg-purple-100 transition"
        onClick={()=>{toast("Shadcn works!")}}
      >
        Get Started
      </a>
    </div>
    <Toaster position="top-center" />
    </>
  )
}

export default App
