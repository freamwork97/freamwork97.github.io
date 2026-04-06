'use client';

import { useState, useEffect } from 'react';
import styles from './BootScreen.module.css';

const BOOT_LINES: { text: string; result?: string; delay: number }[] = [
  { text: 'BIOS v2.4.1 initializing...',       result: 'OK',   delay: 0    },
  { text: 'Loading kernel modules...',          result: 'OK',   delay: 420  },
  { text: 'Mounting filesystem...',             result: 'OK',   delay: 780  },
  { text: 'Checking environment variables...',  result: 'OK',   delay: 1100 },
  { text: 'Compiling portfolio assets...',      result: 'OK',   delay: 1450 },
  { text: 'Starting windra@portfolio...',       result: 'OK',   delay: 1850 },
  { text: 'Welcome.',                                           delay: 2300 },
];

const FADE_DELAY = 2900;
const UNMOUNT_DELAY = 3500;

interface Props {
  onDone: () => void;
}

export default function BootScreen({ onDone }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach((line, i) => {
      timers.push(setTimeout(() => setVisibleCount(i + 1), line.delay));
    });

    timers.push(setTimeout(() => setFading(true), FADE_DELAY));
    timers.push(setTimeout(() => onDone(), UNMOUNT_DELAY));

    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <div className={`${styles.overlay} ${fading ? styles.fadeOut : ''}`}>
      <div className={styles.screen}>
        {BOOT_LINES.slice(0, visibleCount).map((line, i) => (
          <div key={i} className={`${styles.line} ${!line.result ? styles.welcome : ''}`}>
            {line.result ? (
              <>
                <span className={styles.text}>{line.text}</span>
                <span className={styles.result}>{line.result}</span>
              </>
            ) : (
              <span className={styles.welcomeText}>{line.text}</span>
            )}
          </div>
        ))}
        {visibleCount > 0 && visibleCount < BOOT_LINES.length && (
          <span className={styles.cursor}>█</span>
        )}
      </div>
    </div>
  );
}
