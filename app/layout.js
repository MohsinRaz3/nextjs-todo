import "../styles/globals.css";
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="  bg-emerald-400 min-h-screen">
        <div>{children}</div>
      </body>
    </html>
  );
}
