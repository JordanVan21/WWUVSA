import logoAsset from "@/assets/wwu-vsa-logo.png.asset.json";

export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt=""
      aria-hidden="true"
      className={`shrink-0 object-contain ${className}`}
    />
  );
}