import React from 'react';
import { Col, Row } from 'react-bootstrap';
import clsx from 'clsx';
import Button from './Button';

const DisplayNav = (props) => {
  const {
    prevBtnProps = {
      label: "Previous",
      onClick: () => { },
    },
    nextBtnProps = {
      label: "Next",
      onClick: () => { },
    },
    className,
    ...rest
  } = props;
  return (
    <Row className={clsx('justify-content-between', className)} {...rest}>
      <Col xs={6} className='text-start p-0'>
        <Button {...prevBtnProps} />
      </Col>
      <Col xs={6} className='text-end p-0'>
        <Button {...nextBtnProps} />
      </Col>
    </Row>
  )
};

export default DisplayNav;