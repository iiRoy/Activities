'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import withIconDecorator from '../decorators/IconDecorator';
import { useMemo } from 'react';

interface SubmenuLinkProps {
  label: string;
  Icon: React.FC<{
    width?: number | string;
    height?: number | string;
    strokeColor?: string;
    fillColor?: string;
    className?: string;
  }>;
  href: string;
}

const SubmenuLink: React.FC<SubmenuLinkProps> = ({ label, Icon, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const DecoratedIcon = useMemo(() => withIconDecorator(Icon), [Icon]);

  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 px-4 py-2 rounded-md
        transition-colors
        ${isActive ? 'bg-[#a04ea7] font-semibold' : 'hover:bg-[#a04ea7]'}
        text-white
      `}
    >
      <DecoratedIcon
        strokeColor={'var(--primaryColor)'}
        strokeWidth={0.7}
        fillColor={'currentColor'}
        width={'1.5rem'}
        height={'1.5rem'}
      />
      <span className='text-sm'>{label}</span>
    </Link>
  );
};

export default SubmenuLink;
