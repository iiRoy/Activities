'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface PaginationProps {
  currentPage?: number; // el índice de la página actual (no el número visible, sino el índice del array)
  totalPages?: number;
  pageLinks: string[]; // nuevo: arreglo con los href de cada página
  variant?: 'primary' | 'secondary-shade' | 'accent';
  onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 0,
  totalPages = 1,
  pageLinks,
  variant = 'primary',
  onPageChange,
}) => {
  const [activeIndex, setActiveIndex] = useState(currentPage);

  const getPageClass = (index: number) => {
    const isActive = index === activeIndex;
    return `page ${isActive ? `active active-${variant}` : ''}`;
  };

  const handlePageClick = (index: number) => {
    setActiveIndex(index);
    onPageChange?.(index);
  };

  return (
    <div className='pagination'>
      {pageLinks.map((href, index) => (
        <Link
          key={index}
          href={href}
          className={getPageClass(index)}
          onClick={() => handlePageClick(index)}
        >
          {index + 1}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
