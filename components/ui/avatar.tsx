interface AvatarProps {
  text: string;
}

export const Avatar = ({ text }: AvatarProps) => {
  return (
    <div className="flex gap-3">
      <div className="w-10 h-10 self-center rounded-xl overflow-hidden shadow-lg shadow-orange-500/20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 32 32"
        >
          <defs>
            <linearGradient id="avatar-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdba74" />
              <stop offset="100%" stopColor="#fda4af" />
            </linearGradient>
          </defs>
          <rect width="32" height="32" fill="url(#avatar-bg)" />
          <text
            x="13"
            y="19"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontSize="16"
            fontWeight="bold"
            fill="#1f1b19"
          >
            Ł
          </text>
        </svg>
      </div>
      <h3 className="hidden md:block self-center opacity-80">{text}</h3>
    </div>
  );
};

