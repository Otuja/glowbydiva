"use client";

export default function Footer() {
  return (
    <footer className="flex justify-center bg-[#831843] text-[#ffe4e6] py-6 mt-12">
      <span className="text-sm font-medium">
        &copy; {new Date().getFullYear()} GlowByDiva. All rights reserved.
      </span>
    </footer>
  );
}
