import { useEffect, useRef } from 'react';

function Starfield({ className = '', starCount = 90 }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const mediaQuery = typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null;
    const prefersReducedMotion = Boolean(mediaQuery?.matches);

    if (prefersReducedMotion) {
      return undefined;
    }

    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) {
      return undefined;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return undefined;
    }

    let stars = [];
    let width = 0;
    let height = 0;
    let isVisible = true;

    const buildStars = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.7 + 0.8,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.35 + 0.12,
      }));
    };

    const draw = () => {
      if (!isVisible) {
        return;
      }

      context.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        star.y += star.speed;

        if (star.y > height) {
          star.y = -10;
          star.x = Math.random() * width;
        }

        context.beginPath();
        context.fillStyle = `rgba(148, 163, 184, ${star.alpha})`;
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVisible = entry.isIntersecting;

        if (isVisible && !animationRef.current) {
          animationRef.current = requestAnimationFrame(draw);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(container);
    buildStars();
    animationRef.current = requestAnimationFrame(draw);

    const handleResize = () => buildStars();
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [starCount]);

  return <canvas ref={containerRef} className={`starfield ${className}`.trim()} aria-hidden="true" />;
}

export default Starfield;
