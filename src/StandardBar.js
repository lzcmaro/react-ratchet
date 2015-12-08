
import {BAR_STYLES} from './utils/styleMaps';
import NavBar from './NavBar';


class StandardBar extends NavBar {

}

StandardBar.defaultProps = {
  ratClass: 'bar',
  ratStyle: BAR_STYLES.STANDARD
};

export default StandardBar;