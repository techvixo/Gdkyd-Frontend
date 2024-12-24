import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from 'next-intl';
import "./globals.css";
import Navbar from "../components/Shared/Navbar/Navbar";
import NavbarWrap from "../components/Shared/Navbar/NavberWrap";
import NewFooter from "../components/Shared/Footer/NewFooter";
import ChatBox from "../components/Shared/ChatBox/ChatBox";
import SocialIcons from "../components/Shared/SocialIcons/SocialIcons";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Guangdong KYD Precision Machinery Co., Ltd.",
  description: "Expert Manufacturer of Non-Woven Processing Equipment | Guangdong KYD Precision Machinery Co., Ltd.",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={``}>
         <Toaster position="top-center" />
        <NextIntlClientProvider messages={messages}>
          <NavbarWrap></NavbarWrap>
          <SocialIcons></SocialIcons>
          <ChatBox></ChatBox>
          {children}
          <NewFooter></NewFooter>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
