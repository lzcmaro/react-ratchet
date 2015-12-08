
import {BAR_STYLES} from './utils/styleMaps';
import NavBar from './NavBar';
import TabItem from './TabItem'


class TabBar extends NavBar {

}

TabBar.defaultProps = {
  ratClass: 'bar',
  ratStyle: BAR_STYLES.TAB
};

TabBar.Item = TabItem;

export default TabBar;