'use client';

import { useState } from 'react';
import LogEntry from '@/components/molecules/LogEntry/LogEntry';
import styles from './NewsList.module.css';

interface NewsLink {
  href: string;
  title: string;
}

interface Props {
  links: readonly NewsLink[];
  perPage?: number;
  maxButtons?: number;
}

export default function NewsList({ links, perPage = 7, maxButtons = 5 }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(links.length / perPage));
  const startIndex = (currentPage - 1) * perPage;
  const pageLinks = links.slice(startIndex, startIndex + perPage);

  const startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxButtons - 1);

  const changePage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {pageLinks.map((link, i) => (
        <LogEntry
          key={startIndex + i}
          time={`[${String(startIndex + i + 1).padStart(3, '0')}]`}
          status="debug"
        >
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.title}
          </a>
        </LogEntry>
      ))}

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={styles.btn}
            onClick={() => changePage(1)}
            disabled={currentPage === 1}
          >
            «
          </button>
          <button
            className={styles.btn}
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ‹ 이전
          </button>

          {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
            <button
              key={page}
              className={`${styles.btn} ${page === currentPage ? styles.active : ''}`}
              onClick={() => changePage(page)}
            >
              {page}
            </button>
          ))}

          <button
            className={styles.btn}
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            다음 ›
          </button>
          <button
            className={styles.btn}
            onClick={() => changePage(totalPages)}
            disabled={currentPage === totalPages}
          >
            »
          </button>

          <span className={styles.info}>
            {currentPage} / {totalPages} 페이지 ({links.length}개)
          </span>
        </div>
      )}
    </>
  );
}
