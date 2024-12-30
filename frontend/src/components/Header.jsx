import Burger from './icons/Burger';
import JiffyLogo from './JiffyLogo';

const Header = ({ color }) => {
  return (
    <div className='pt-4 flex justify-between items-center '>
      <JiffyLogo color={color} />
      <Burger color={color} />
    </div>
  );
};

export default Header;
