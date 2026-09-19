import { useEffect, useState } from 'react';

function useTypewriter(words, options = {}) {
  const {
    typeSpeed = 110,
    deleteSpeed = 50,
    pauseDuration = 1200,
  } = options;

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) {
      return undefined;
    }

    const mediaQuery = typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null;
    const reducedMotion = Boolean(mediaQuery?.matches);

    if (reducedMotion) {
      setDisplayedText(words[0] ?? '');
      setIsDeleting(false);
      return undefined;
    }

    const currentWord = words[index % words.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextValue = currentWord.slice(0, displayedText.length + 1);
        setDisplayedText(nextValue);

        if (nextValue === currentWord) {
          setIsDeleting(true);
          return;
        }
      }

      if (isDeleting) {
        const nextValue = currentWord.slice(0, displayedText.length - 1);
        setDisplayedText(nextValue);

        if (nextValue === '') {
          setIsDeleting(false);
          setIndex((currentIndex) => (currentIndex + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : (displayedText === '' ? typeSpeed : typeSpeed));

    if (!isDeleting && displayedText === currentWord) {
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);

      return () => {
        clearTimeout(pauseTimeout);
        clearTimeout(timeout);
      };
    }

    return () => clearTimeout(timeout);
  }, [words, displayedText, isDeleting, index, typeSpeed, deleteSpeed, pauseDuration]);

  return {
    text: displayedText,
    isDeleting,
    currentWord: words[index % words.length],
  };
}

export default useTypewriter;
