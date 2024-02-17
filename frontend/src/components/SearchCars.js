
import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Card, Spinner } from 'react-bootstrap';

const SearchCars = () => {
  const [categories, setCategories] = useState([]);
  // const [car_models, setCar_models] = useState([]);
  // const [car_brands, setCar_brands] = useState([]);
  // const [fuel_types, SetFuel_types] = useState([]);
  const [seatingCapacity, setSeatingCapacity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:8081/getallcategories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories: ', error));

      // fetch('http://localhost:8081/getallcarmodels')
      // .then(response => response.json())
      // .then(data => setCar_models(data))
      // .catch(error => console.error('Error fetching car models: ', error));

      // fetch('http://localhost:8081/getallfueltypes')
      // .then(response => response.json())
      // .then(data => SetFuel_types(data))
      // .catch(error => console.error('Error fetching car models: ', error));

      // fetch('http://localhost:8081/getallbrands')
      // .then(response => response.json())
      // .then(data => setCar_brands(data))
      // .catch(error => console.error('Error fetching car models: ', error));
  }, []);

  // useEffect(() => {
  //   fetch('http://localhost:8081/getallcarmodelswithseatingcapacity?seating_capacity='+seatingCapacity)
  //     .then(response => response.json())
  //     .then(data => setCar_models(data))
  //     .catch(error => console.error('Error fetching categories: ', error));
  // }, []);

  const handleSearch = () => {
    fetch(`http://localhost:8081/cars?category=${selectedCategory}&seatingCapacity=${seatingCapacity}`)
      .then(response => response.json())
      .then(data => {setCars(data);
                      console.log(data)})
      .catch(error => setError('Error fetching cars: ' + error.message))
      .finally(() => setLoading(false));
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Form>
            <Row className="align-items-end">
              <Col>
                <Form.Group controlId="category">
                  <Form.Label><b>Category</b></Form.Label>
                  <Form.Control as="select" onChange={e => setSelectedCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category.cat_id} value={category.cat_id}>{category.cat_name}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="seatingCapacity">
                  <Form.Label><b>Seating Capacity</b></Form.Label>
                  <Form.Control type="number" value={seatingCapacity} onChange={e => setSeatingCapacity(e.target.value)} />
                </Form.Group>
              </Col>
              <Col>
                <Button className='col-12' variant="primary" onClick={handleSearch}>Search</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      {loading && <Spinner animation="border" role="status" className="mt-4">
        <span className="sr-only">Loading...</span>
      </Spinner>}

      {error && <div className="mt-4 text-danger">{error}</div>}

      {/* <Row className="mt-4">
        {cars.map(car => (
          <Col key={car.car_id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{car.carModel.brand.brand_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{car.model_name}</Card.Subtitle>
                <Card.Text>Seating Capacity: {seatingCapacity}</Card.Text>
                <Card.Text>Transmission: {car.transmission_type}</Card.Text>
                <Card.Text>Fuel Type: {car.fuel_type}</Card.Text>
                <Card.Text>Price per Hour: ₹{car.price_per_hour}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}

          <Row className="mt-4">
            {cars.map(car => (
              <Col key={car.car_id} md={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{car.carModel.brand.brand_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{car.carModel.model_name}</Card.Subtitle>
                    <Card.Text>Seating Capacity: {car.carModel.seating_capacity}</Card.Text>
                    <Card.Text>Transmission: {car.carModel.transmission_type}</Card.Text>
                    <Card.Text>Fuel Type: {car.fuelType.fuel_type}</Card.Text>
                    <Card.Text>Price per Hour: ₹{car.price_per_hour}</Card.Text>
                    <Card.Text>Color: {car.color}</Card.Text>
                    {/* Add more details as needed */}
                    <Card.Text>Host: {car.host.fname} {car.host.lname}</Card.Text>
                    <Card.Text>Registration Number: {car.rc_no}</Card.Text>
                    {/* Add more details as needed */}
                    
                    <Button value={"Submit"}>Book My Ride</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
    </Container>
  );
};

export default SearchCars;
