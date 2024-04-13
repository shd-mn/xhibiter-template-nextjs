import {  Questrial } from 'next/font/google';
import localFont from 'next/font/local';

export const questrial = Questrial({
    subsets: ['latin'],
    variable: '--font-questrial',
    display: 'swap',
    weight: ['400'],
});

export const calSans = localFont({
    src: [
        {
            path: '../public/fonts/CalSans-SemiBold.woff',
            weight: '500',
            style: 'normal',
        },
    ],
    variable: '--font-cal-sans',
});
export const dmSans = localFont({
    src: [
        {
            path: '../public/fonts/DMSans-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-dm-sans',
});
