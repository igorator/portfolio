'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/app/shared/lib/utils/cn';

const randomString = () => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?~';
  return chars[Math.floor(Math.random() * chars.length)];
};

const getWords = (txt: string) => {
  return txt.split('').map((_, index) => {
    const scrambled = randomString();
    return (
      <span key={index} className='char'>
        {scrambled}
      </span>
    );
  });
};

interface TextEncryptedAnimationProps {
  text: string;
  className?: string;
  track?: number;
  duration?: number;
  delay?: number;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p';
}

export const TextEncryptedAnimation: React.FC<TextEncryptedAnimationProps> = ({
  text,
  className,
  track = 10,
  duration = 500,
  delay = 0,
  element: Element = 'span',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const scrambledText = getWords(text);
    ref.current.innerHTML = '';

    scrambledText.forEach((span) => {
      const spanNode = document.createElement('span');
      spanNode.innerText = span.props.children;
      spanNode.classList.add('char');
      ref.current?.appendChild(spanNode);
    });

    let index = 0;
    const chars = ref.current.querySelectorAll(
      '.char',
    ) as NodeListOf<HTMLElement>;

    const changeChar = (char: HTMLElement, originalText: string) => {
      let currentTrack = 0;
      const changeInterval = setInterval(() => {
        if (currentTrack < track) {
          char.innerText = randomString();
          currentTrack++;
        } else {
          char.innerText = originalText;
          clearInterval(changeInterval);
        }
      }, duration / track);
    };

    const interval = setTimeout(() => {
      const animationInterval = setInterval(() => {
        if (index < chars.length) {
          changeChar(chars[index], text[index]);
          index++;
        } else {
          clearInterval(animationInterval);
        }
      }, duration);
    }, delay);

    return () => clearTimeout(interval);
  }, [text, track, duration, delay]);

  return <Element ref={ref} className={cn('uppercase', className)} />;
};
