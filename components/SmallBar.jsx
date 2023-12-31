"use client"

import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

const SmallBar = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 580 });

  const iconStyle = isSmallScreen ? { fontSize: '1rem' } : {};

  return (
    <div className='bg-gray-100 h-[35px] xxs:h-[45px] hidden xxs:flex items-center'>
      <div className='shared_container flex justify-end'>
        <Link href='tel:+971581249910' rel="noopener noreferrer" className="flex items-center gap-0.5 xs:gap-1 md:gap-2">
          <PhoneIcon className="text-blue-500" fontSize="small" style={iconStyle} />
          <span className="text-[9px] xxs:text-[10px] sm:text-xs">+971-58-124-9910</span>
        </Link>
        <div className="flex items-center gap-0.5 xs:gap-1 md:gap-2 mx-3 xs:mx-5 md:mx-10">
          <AccessTimeFilledIcon className="text-blue-500" fontSize="small" style={iconStyle} />
          <span className="text-[9px] xxs:text-[10px] sm:text-xs">Mon - Sat: 8:00 AM - 8:00 PM</span>
        </div>
        <Link href='mailto:info@thewashers.com' rel="noopener noreferrer" className="flex items-center gap-0.5 xs:gap-1 md:gap-2">
          <EmailIcon className="text-blue-500" fontSize="small" style={iconStyle} />
          <span className="text-[9px] xxs:text-[10px] sm:text-xs">info@the-cleaners.com</span>
        </Link>
      </div>
    </div>
  );
}

export default SmallBar;
