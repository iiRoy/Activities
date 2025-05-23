'use client';
interface PageTitleProps {
  children: React.ReactNode;
}

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <div className='flex gap-4'>
      <div className='bg-[var(--secondaryColor)] h-auto p-1 rounded-2xl w-[1%]'></div>
      <h1 className='font-bold text-[5vmax] text-text'>{children}</h1>
    </div>
  );
}
