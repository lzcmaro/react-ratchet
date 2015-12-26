import Modal from './Modal';


class NavPopover extends Modal {
  static defaultProps = {
    ...Modal.defaultProps,
    ratClass: 'popover'
  }
}

export default NavPopover;

