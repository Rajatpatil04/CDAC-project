import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchCars = () => {
  const [categories, setCategories] = useState([]);
  // const [car_models, setCar_models] = useState([]);
  // const [car_brands, setCar_brands] = useState([]);
  // const [fuel_types, SetFuel_types] = useState([]);
  const[packages, setPackages] = useState([]);
  const [seatingCapacity, setSeatingCapacity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [error1, setError1] = useState('');
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  let navigate = useNavigate();


  useEffect(() => {
    fetch('http://localhost:8081/getallcategories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories: ', error));

      fetch('http://localhost:8081/getallpackages')
      .then(response => response.json())
      .then(data => {setPackages(data);
                      console.log(data)})
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


  //4th Try
   const validateSeatingCapacity = (value) => {
    const intValue = parseInt(value);
    if (isNaN(intValue) || intValue <= 0) {
      setError('Seating capacity can not be zero or negative');
      return false;
    }
    setError('');
    return true;
  };

  const validatejourneyDate = (value) =>{
       const selectedDate = new Date(value);
      const currentDate = new Date();

      if (selectedDate < currentDate) {
        setError1('Journey date should not be in the past');
        return false;
    }
        setError1('');
        return true;     
  }

  const handleSearch = () => {
    if (!validateSeatingCapacity(seatingCapacity) || !validatejourneyDate(selectedDateTime)) {
      return;
    }
    setLoading(true);
  
    fetch(`http://localhost:8081/cars?category=${selectedCategory}&seatingCapacity=${seatingCapacity}`)
      .then(response => response.json())
      .then(data => {
        setCars(data);
        console.log(data);
      })
      .catch(error => setError('Error fetching cars: ' + error.message))
      .finally(() => setLoading(false));
  };

  // const handleSearch = () => {
  //   fetch(`http://localhost:8081/cars?category=${selectedCategory}&seatingCapacity=${seatingCapacity}`)
  //     .then(response => response.json())
  //     .then(data => {setCars(data);
  //                     console.log(data);})
  //     .catch(error => setError('Error fetching cars: ' + error.message))
  //     .finally(() => setLoading(false));
  // };

  const handleSubmit = (carId) => {

    const data = {
      customer_id: JSON.parse(localStorage.getItem("loggedUser")).uid,
      car_id: carId,
      package_id: selectedPackage,
      journey_date_time: selectedDateTime,
      status : 0
    };

    console.log(data)

    fetch('http://localhost:8081/addbookingrequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      alert('Booking successful:');
      console.log('Booking successful:', data);
      navigate("/customer/customerhome")
    })
    .catch(error => {
      console.error('Error submitting booking:', error);
    });
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
                  <Form.Control as="select" onChange={e => setSelectedCategory(e.target.value)}
                    onBlur={(e) => {
                      validateSeatingCapacity(e.target.value);
                    }}
                  >
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
              <Form.Group controlId={`datetime_${cars.car_id}`}>
              <Form.Label>Select Journey Date and Time</Form.Label>
              <Form.Control
                type="datetime-local"
                value={selectedDateTime}
                onChange={(e) => {
                  setSelectedDateTime(e.target.value);
                }}
                onBlur={(e) => {
                  validatejourneyDate(e.target.value);
                }}
              />                 
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

      
      {error && <div className="mt-4 text-danger">{error}</div>}  {error1 && <div className="mt-4 text-danger">{error1}</div>}
      {cars.length === 0 && !loading && !error && !error1 && (
        <div className="mt-4 text-info">No cars available for the selected criteria.</div>
      )}

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
                    <Card.Img width={200} height={200} src={`data:image/jpeg;base64,${car && car.car_image}`} /><br/>
                    <Card.Title>{car.carModel.brand.brand_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{car.carModel.model_name}</Card.Subtitle>

                    <Card.Text>Seating Capacity: {car.carModel.seating_capacity}</Card.Text>
                    <Card.Text>Transmission: {car.carModel.transmission_type}</Card.Text>
                    <Card.Text>Fuel Type: {car.fuelType.fuel_type}</Card.Text>
                    <Card.Text style={{fontSize:20}}>Price per Hour: ₹{car.price_per_hour}</Card.Text>
                    <Card.Text>Color: {car.color}</Card.Text>
                    <Card.Text>Host: {car.host.fname} {car.host.lname}</Card.Text>
                    <Card.Text>Registration Number: {car.rc_no}</Card.Text>
                    {/* <Form.Group controlId={`datetime_${car.car_id}`}>
                  <Form.Label>Select Date and Time</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    value={selectedDateTime}
                    onChange={e => setSelectedDateTime(e.target.value)}
                  />
                </Form.Group> */}

                <Form.Group controlId={`package_${car.package_id}`}>
                  <Form.Label>Select Package</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedPackage}
                    onChange={e => setSelectedPackage(e.target.value)}>
                    <option value="">Select Package</option>
                    {packages.map(p => (
                      <option key={p.package_id} value={p.package_id}>
                        {p.hours} Hours, {p.kilometers} Kilometers
                      </option>
                    ))}
                    
                  </Form.Control>
                  <br/>
                </Form.Group>
                    <Button value={"Submit"} onClick={() => handleSubmit(car.car_id)}>Raise Request</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
    </Container>
  );
};

export default SearchCars;
