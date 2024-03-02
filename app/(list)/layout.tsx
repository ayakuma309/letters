export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='bg-gray-100'>
      <div className='container mx-auto max-w-screen-md px-2 min-h-screen'>
        <div className='sm:ml-20 mx-auto pt-10 py-4'>{children}</div>
      </div>
    </main>
  );
}
