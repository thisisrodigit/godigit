import "./globals.css";
import Cursor from "../components/Cursor";

export const metadata = {
  title: "GoDigit",
  description: "Digital infrastructure studio"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
