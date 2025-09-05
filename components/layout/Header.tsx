const Header = () => (
  <header className="flex justify-between p-4 bg-white shadow-md sticky top-0">
    <div className="font-bold text-lg">Logo</div>
    <input className="border p-2 rounded" placeholder="Search..." />
    <div className="space-x-4">
      <button>Rooms</button>
      <button>Mansion</button>
      <button>Countryside</button>
      <button>Sign In</button>
      <button>Sign Up</button>
    </div>
  </header>
);
export default Header;
