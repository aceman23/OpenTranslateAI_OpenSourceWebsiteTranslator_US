import { LucideIcon } from 'lucide-react';

interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: LucideIcon;
}

export function AnimatedButton({ text, onClick, href, className = '', icon: Icon }: AnimatedButtonProps) {
  const content = (
    <span className="flex items-center gap-2">
      {Icon && <Icon className="w-5 h-5" />}
      {text}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`shiny-cta ${className}`}
        aria-label={text}
        title={text}
      >
        {content}
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
      {content}
    </button>
  );
}
