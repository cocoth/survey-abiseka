import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[var(--acent-color)] text-white w-full py-4'>
      <section className="flex flex-col items-center justify-center gap-2 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className='font-bold'>Survey ABISEKA</span>. All rights reserved.
        </p>
        <p className="text-xs">
          Website ini dirancang untuk mendukung ujian online kelayakan kampus.
        </p>
        <p className="text-xs">
          Hubungi kami di <Link href="mailto:support@surveyapp.com" className="underline">support@surveyabiseka.com</Link> untuk bantuan.
        </p>
      </section>
    </footer>
  );
};

export default Footer;