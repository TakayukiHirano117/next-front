import type { Metadata, Viewport } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";

const appSans = M_PLUS_Rounded_1c({
  variable: "--font-app-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ログイン | Macching App",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${appSans.variable} font-app text-app-text antialiased`}>
      {children}
    </div>
  );
}
