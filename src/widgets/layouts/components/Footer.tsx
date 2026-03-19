import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-[rgba(196,197,217,0.1)] pt-8 pb-12 mt-auto md:pt-12">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-6 md:flex-row md:gap-0">
        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="text-[12px] font-medium text-[#747688] hover:text-[#0052ae]"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-[12px] font-medium text-[#747688] hover:text-[#0052ae]"
          >
            Terms of Service
          </Link>
          <Link
            href="/data-sources"
            className="text-[12px] font-medium text-[#747688] hover:text-[#0052ae]"
          >
            Data Sources
          </Link>
        </div>
        <div className="text-center md:text-right">
          <p className="text-[12px] font-medium text-[#747688]">
            © 2026 Geo Weather. All meteorological data provided for informational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};
