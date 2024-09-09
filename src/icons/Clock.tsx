export function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" {...props}>
      <g stroke="currentColor">
        <circle cx="6" cy="6" r="5.5" />
        <path d="M5.747 2.47v3.782h3.278" />
      </g>
    </svg>
  );
}
