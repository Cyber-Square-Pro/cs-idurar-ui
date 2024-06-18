
type Props = {
  isMobile: boolean;
};

const Header: React.FC<Props> = ({ isMobile }) => {
  return (
    <div
    className={`w-full h-11 ${
      isMobile ? "relative" : "fixed top-0 left-0"
    } z-10 bg-blue-100 text-lg flex items-center px-4 overflow-hidden`}
  >
    <span className="text-md font-semibold">Header</span>
  </div>
  )
}

export default Header;
