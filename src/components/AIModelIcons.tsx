interface IconProps {
  size?: number;
  className?: string;
}

export function OllamaIcon({ size = 32, className = '' }: IconProps) {
  return (
    <img
      src="/ollama-color.png"
      alt="Ollama"
      width={size}
      height={size}
      className={`invert ${className}`}
      style={{ filter: 'invert(1)' }}
    />
  );
}

export function OpenAIIcon({ size = 32, className = '' }: IconProps) {
  return (
    <img
      src="/openai-color.png"
      alt="OpenAI"
      width={size}
      height={size}
      className={`invert ${className}`}
      style={{ filter: 'invert(1)' }}
    />
  );
}

export function ClaudeIcon({ size = 32, className = '' }: IconProps) {
  return (
    <img
      src="/claude-color.png"
      alt="Claude"
      width={size}
      height={size}
      className={className}
    />
  );
}

export function GrokIcon({ size = 32, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="32" height="32" rx="6" fill="#000000"/>
      <path d="M16 8l8 8-8 8-8-8z" fill="white"/>
      <circle cx="16" cy="16" r="3" fill="#000000"/>
    </svg>
  );
}

export function QwenIcon({ size = 32, className = '' }: IconProps) {
  return (
    <img
      src="/qwen-color.png"
      alt="Qwen"
      width={size}
      height={size}
      className={className}
    />
  );
}
