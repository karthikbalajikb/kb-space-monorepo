import Button from "@/components/Button";
import Input from "@/components/Input";

const Header = () => (
  <header className="header grid grid-cols-header gap-20 justify-center p-5 bg-surface">
    <div className="grid header__brand-logo shadow-neu3 rounded-x2lg p-2">
      <div className="shadow-neu1-inset rounded-x2lg">
        <img src="/images/balaji-fashion-2.png" />
      </div>
    </div>
    <div className="header__search-box flex items-center">
      <Input />
    </div>
    <div className="self-center text-center header__offers">
      <Button label="Updates" />
    </div>
  </header>
);

export default Header;
