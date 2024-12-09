import image from "../assets/logo.png";
function Header() {
  return (
    <div id="header">
      <img src={image} alt="Investment Calculator" />
      <h1>Investment Calculator</h1>
    </div>
  );
}

export default Header;
