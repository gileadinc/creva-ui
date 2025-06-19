import AuthBanner from './_components/auth-banner';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark:to-clrFirefly dark:from-clrBlackPearl size-full min-h-screen bg-linear-52 px-[40px]">
      <main className="grid h-full grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="max-sm:py-[4%]">{children}</div>
        <div className="hidden h-[calc(100vh-4%)] self-center lg:block">
          <AuthBanner />
        </div>
      </main>
    </div>
  );
}
