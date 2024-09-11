import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Noto_Sans, Noto_Serif_Display } from "@next/font/google";

const notoSans = Noto_Sans({
  weight: ["400", "500", "700"],
  subsets: ["cyrillic-ext"],
  variable: "--font-noto-sans",
});

const notoSerifDisplay = Noto_Serif_Display({
  weight: ["400"],
  subsets: ["cyrillic-ext"],
  variable: "--font-noto-serif",
});

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <UserProvider>
      <main
        className={`${notoSans.variable} ${notoSerifDisplay.variable} font-body`}
      >
        {getLayout(<Component {...pageProps} />, pageProps)}
      </main>
    </UserProvider>
  );
}

export default MyApp;
