import "../styles/globals.scss";

export const metadata = {
  title: "Green Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
