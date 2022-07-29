const Header = () => {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-2">
        <div>
          <input type="text" placeholder="search" />
        </div>
        <div>
          <a>Design</a>
        </div>
        <div>
          <div>
            <a>facebook</a>
            <a>twitter</a>
            <a>youtube</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
