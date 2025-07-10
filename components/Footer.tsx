// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="px-8 py-8 border-t border-gray-800 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-xl font-bold text-yellow-500">MM-SERVICE</h1>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="">PRIVACY POLICY</a>
          <a href="#">TERMS OF SERVICE</a>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-4">&copy;2024 Car N Go. All rights reserved.</p>
    </footer>
  );
}
