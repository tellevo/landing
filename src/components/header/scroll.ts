import { $ } from '@builder.io/qwik';

export const smoothScroll = $((targetId: string) => {
  const target = document.getElementById(targetId);
  if (target) {
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
});