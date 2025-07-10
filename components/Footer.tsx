// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="px-8 py-8 border-t border-gray-800 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-xl font-bold text-yellow-500">CAR N GO</h1>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="https://www.linkedin.com/in/mouad-mouasseif-a5619a21a/">PRIVACY POLICY</a>
          <a href="https://www.linkedin.com/in/mouad-mouasseif-a5619a21a/">TERMS OF SERVICE</a>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-4">&copy;2025 <a href="https://www.linkedin.com/company/m-servicee/?viewAsMember=true">MMSERVICE</a>. All rights reserved.</p>
    </footer>
  );
}
