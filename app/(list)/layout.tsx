export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='container mx-auto max-w-screen-md px-2 min-h-screen'>
      {children}
    </main>
  );
}
