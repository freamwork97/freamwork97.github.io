'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import TerminalDots from '@/components/atoms/TerminalDots/TerminalDots';
import styles from './TerminalHero.module.css';

interface TerminalLine {
  text: string;
  cls?: string;
}

const PAGES: Record<string, string> = {
  profile:  '/profile',
  tis:      '/tis',
  projects: '/project',
  news:     '/news',
  now:      '/now',
  deploy:   '/deploy',
};

function escHtml(s: string) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

export default function TerminalHero() {
  const router = useRouter();
  const [lines, setLines] = useState<TerminalLine[]>([
    { text: '✓ session initialized — type \'help\' for available commands.', cls: 'green' },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [lines]);

  function addLines(newLines: TerminalLine[]) {
    setLines(prev => [...prev, ...newLines]);
  }

  function runCommand(raw: string) {
    const trimmed = raw.trim();
    if (!trimmed) return;
    setHistory(prev => [trimmed, ...prev]);
    setHistIdx(-1);

    addLines([{ text: `windra@portfolio:~$ ${escHtml(trimmed)}`, cls: 'cmd' }]);

    const [cmd, ...args] = trimmed.toLowerCase().split(/\s+/);

    if (cmd === 'goto') {
      const target = args[0] ?? '';
      if (PAGES[target]) {
        addLines([{ text: `Navigating to ${target}...`, cls: 'green' }]);
        setTimeout(() => router.push(PAGES[target]), 600);
      } else {
        addLines([{ text: `goto: unknown page '${escHtml(target)}'. Run 'ls' to see available pages.`, cls: 'red' }]);
      }
      return;
    }

    switch (cmd) {
      case 'help':
        addLines([
          { text: 'Available commands:', cls: 'blue' },
          { text: '  help          — show this message' },
          { text: '  whoami        — about me' },
          { text: '  skills        — tech stack' },
          { text: '  ls            — list pages' },
          { text: '  goto [page]   — navigate to page' },
          { text: '  contact       — contact info' },
          { text: '  date          — current date & time' },
          { text: '  clear         — clear terminal' },
        ]);
        break;
      case 'whoami': case 'about':
        addLines([
          { text: 'Name   : 정승용 (Windra)', cls: 'green' },
          { text: 'Role   : QA Engineer × Full-Stack Developer' },
          { text: 'Bio    : 개발을 좋아하는 QA 엔지니어.' },
          { text: '         지식을 테스트하고, 성장을 검증하며, 배움을 기록으로 증명합니다.' },
        ]);
        break;
      case 'skills':
        addLines([
          { text: '[STACK] scanning...', cls: 'yellow' },
          { text: '  → Python  FastAPI  MySQL  GitHub  HTML/CSS/JS', cls: 'purple' },
          { text: '[STACK] scan complete.', cls: 'green' },
        ]);
        break;
      case 'ls':
        addLines([
          { text: 'Available pages:', cls: 'blue' },
          ...Object.keys(PAGES).map(p => ({ text: `  → ${p}` })),
          { text: 'Usage: goto [page]', cls: 'dim' },
        ]);
        break;
      case 'contact':
        addLines([
          { text: 'GitHub : https://github.com/freamwork97', cls: 'blue' },
          { text: 'Email  : freamwork@kakao.com', cls: 'blue' },
        ]);
        break;
      case 'date':
        addLines([{ text: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul', hour12: false }), cls: 'green' }]);
        break;
      case 'clear':
        setLines([]);
        break;
      case 'github':
        window.open('https://github.com/freamwork97', '_blank');
        addLines([{ text: 'Opening GitHub...', cls: 'green' }]);
        break;
      case 'sudo': case 'su':
        addLines([{ text: 'Permission denied. Nice try.', cls: 'red' }]);
        break;
      case 'exit':
        addLines([{ text: 'logout: Cannot exit — you are always here.', cls: 'dim' }]);
        break;
      default:
        addLines([{ text: `command not found: ${escHtml(cmd)} — try 'help'`, cls: 'red' }]);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      runCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (histIdx < history.length - 1) {
        const next = histIdx + 1;
        setHistIdx(next);
        setInput(history[next]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIdx > 0) {
        const next = histIdx - 1;
        setHistIdx(next);
        setInput(history[next]);
      } else {
        setHistIdx(-1);
        setInput('');
      }
    }
  }

  return (
    <div className={styles.terminal} onClick={() => inputRef.current?.focus()}>
      <div className={styles.header}>
        <TerminalDots size="md" />
        <span className={styles.title}>windra@portfolio ~ bash</span>
        <span className={styles.hint}>type &apos;help&apos; to get started</span>
      </div>
      <div ref={outputRef} className={styles.output}>
        {lines.map((line, i) => (
          <div key={i} className={`${styles.line} ${line.cls ? styles[line.cls] : ''}`}>
            {line.text}
          </div>
        ))}
      </div>
      <div className={styles.inputLine}>
        <span className={styles.prompt}>windra@portfolio:~$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className={styles.input}
          autoComplete="off"
          spellCheck={false}
          placeholder="enter command..."
          aria-label="terminal input"
        />
      </div>
    </div>
  );
}
