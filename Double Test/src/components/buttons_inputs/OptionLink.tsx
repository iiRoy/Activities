'use client';

import { usePathname } from 'next/navigation';
import withIconDecorator from '../decorators/IconDecorator';
import { useMemo } from 'react';
import { useTransition } from '../TransitionContext'; // ajusta path

interface OptionLinkProps {
  label: string;
  Icon: React.FC<{
    width?: number | string;
    height?: number | string;
    strokeColor?: string;
    fillColor?: string;
    className?: string;
  }>;
  href?: string;
  forceActive?: boolean;
}

const OptionLink: React.FC<OptionLinkProps> = ({ label, Icon, href, forceActive }) => {
  const pathname = usePathname();
  const isActive = href ? pathname === href : false;
  const isHovered = forceActive;
  const { triggerTransition } = useTransition();

  const DecoratedIcon = useMemo(() => withIconDecorator(Icon), [Icon]);

  const classes = `
    option-link group
    ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}
    transition-colors duration-300 ease-in-out
    flex justify-center items-center gap-2
  `;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (href && href !== pathname) {
      triggerTransition(href);
    }
  };

  const content = (
    <>
      <div
        className={`
          option-icon flex items-center justify-center
          transition-transform duration-300 ease-in-out
          ${isActive ? 'active scale-110' : 'scale-100'}
        `}
      >
        <DecoratedIcon
          strokeColor='#2E1C31'
          fillColor='currentColor'
          width='2rem'
          height='2rem'
          className='transition-colors duration-300 ease-in-out'
        />
      </div>
      <span className='option-label hidden lg:block'>{label}</span>
    </>
  );

  return href ? (
    <a href={href} onClick={handleClick} className={classes}>
      {content}
    </a>
  ) : (
    <span className={classes}>{content}</span>
  );
};

export default OptionLink;
