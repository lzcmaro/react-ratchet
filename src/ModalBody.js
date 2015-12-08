import React from 'react';
import {classesDecorator} from './utils/componentDecorators';
import classnames from 'classnames';
import ratchetUtils from './utils/ratchetUtils';


@classesDecorator('modal-body')
class ModalBody extends React.Component {
  render() {
    return (
      <div
        {...this.props}
        className={classnames(ratchetUtils.getClassSet(this.props), this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export default ModalBody;

