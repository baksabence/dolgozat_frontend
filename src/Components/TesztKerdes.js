import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function TesztKerdes(props) {

  return (
    <div>
      <Card border="light" style={{ width: '18rem' }}>
        <Card.Header>{props.adat.kerdes}</Card.Header>
        <Card.Body>
        <Button variant="light">{props.adat.v1}</Button>
        <Button variant="light">{props.adat.v2}</Button>
        <Button variant="light">{props.adat.v3}</Button>
        <Button variant="light">{props.adat.v4}</Button>
        </Card.Body>
      </Card>
      <br />
    </div>
  )
}

export default TesztKerdes
