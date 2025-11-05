import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-evenly py-32 px-16 bg-white dark:bg-black '>
        <div className='flex flex-col items-center gap-6 text-center sm:items-start sm:text-left'>
          <h1 className='max-w-2xl      text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50'>
            WELCOME !
          </h1>
        </div>
        <div className='flex flex-col gap-4 text-base font-medium sm:flex-row'>
          <Link href='/dashboard-admin'>
            <div className='flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]'>
              {' '}
              Admin
            </div>
          </Link>
          <Link href='/dashboard-guest'>
            <div className='flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]'>
              {' '}
              Guest
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
