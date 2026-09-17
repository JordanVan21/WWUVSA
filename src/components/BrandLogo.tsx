export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/wwu-vsa-logo.png"
      alt=""
      aria-hidden="true"
      className={`shrink-0 object-contain ${className}`}
    />
  );
}
