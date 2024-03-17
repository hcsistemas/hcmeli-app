import Head from "next/head";
import { Inter } from "next/font/google";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HC MercadoLibre",
  description: "Powered by nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
