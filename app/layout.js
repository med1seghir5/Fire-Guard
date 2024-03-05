
import "./globals.css";


export const metadata = {
  title: "Fire Guard",
  description: "This is a website fire detection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
