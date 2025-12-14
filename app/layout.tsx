import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <footer className='py-4 justify-center items-center font-sans font-bold text-center text-gray-500 text-sm'>
        Hecho con❤️por la gente de  Vercel <br />
        @sebastián tovar chavez 0626✅
      </footer>
    </html>
  );
}
