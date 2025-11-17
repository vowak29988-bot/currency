export const metadata = {
  title: "Currency Calculator",
  description: "Offline currency conversion calculator"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-4 max-w-md mx-auto">{children}</body>
    </html>
  );
}
