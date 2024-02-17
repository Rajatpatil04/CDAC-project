
import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Card, Spinner } from 'react-bootstrap';

const SearchCars = () => {
  const [categories, setCategories] = useState([]);
  const [car_models, setCar_models] = useState([]);
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
  }, []);

  useEffect(() => {
    fetch('http://localhost:8081/getallcarmodelswithseatingcapacity?seating_capacity='+seatingCapacity)
      .then(response => response.json())
      .then(data => setCar_models(data))
      .catch(error => console.error('Error fetching categories: ', error));
  }, []);

  const handleSearch = () => {
    fetch(`/api/cars?category=${selectedCategory}&seatingCapacity=${seatingCapacity}`)
      .then(response => response.json())
      .then(data => setCars(data))
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
              {/* <Col>
                <Form.Group controlId="fuelType">
                  <Form.Label><b>Fuel Type</b></Form.Label>
                  <Form.Control as="select" onChange={e => setSelectedFuelType(e.target.value)}>
                    <option value="">Select Fuel Type</option>
                    {fuelTypes.map(fuelType => (
                      <option key={fuelType.fuel_id} value={fuelType.fuel_id}>{fuelType.fuel_type}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col> */}
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

      <Row className="mt-4">
        {cars.map(car => (
          <Col key={car.car_id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{car.brand_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{car.model_id}</Card.Subtitle>
                <Card.Text>Seating Capacity: {car_models.car.seating_capacity}</Card.Text>
                <Card.Text>Transmission: {car.transmission_type}</Card.Text>
                <Card.Text>Fuel Type: {car.fuel_type}</Card.Text>
                <Card.Text>Price per Hour: ₹{car.price_per_hour}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchCars;
