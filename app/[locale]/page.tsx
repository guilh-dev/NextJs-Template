import Image from "next/image";

import { use } from 'react'
import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  
  return {
    title: t('homeTitle')
  };
}

export default function Home({ params }: Props) {
  const {locale} = use(params);
 
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('Home');

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-1 font-sans ml-16">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-slate-1 sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-slate-12">
            {t('title')}
          </h1>
          <p className="max-w-md text-lg leading-8 text-slate-11">
            {t('paragraph_1')} Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-slate-12"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-slate-12"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            {t('link_1')}
          </a>
        </div>
      </main>
    </div>
  );
}
