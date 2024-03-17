import React from "react";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <span className="font-bold text-3xl">Kolam</span>
    </Link>
  );
};

export default Logo;
