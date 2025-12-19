interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function AnimatedButton({ text, onClick, href, className = '' }: AnimatedButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        className={`shiny-cta ${className}`}
        aria-label={text}
        title={text}
      >
        <span>{text}</span>
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`shiny-cta ${className}`}
      type="button"
      aria-label={text}
      title={text}
    >
      <span>{text}</span>
    </button>
  );
}
