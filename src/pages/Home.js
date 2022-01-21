import { Card, Col, ListGroup } from "react-bootstrap"
import Navigation from "../components/Navigation"

const Home = (props)=>{
    return (
        <>
            <Col xs="12" className="p-0">
                <Navigation getUser={props.getUser} />
            </Col>
            <Col md="3">
                    <Card>
                        <Card.Header>
                            <h4>Rank elements</h4>
                        </Card.Header>
                        <Card.Body className="">
                            <form>
                                <div class="row mb-3">
                                    <div class="col-sm-12">
                                        <input type="number" name="email" class="form-control" placeholder="Physical Health" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-12">
                                        <input type="number" name="password" placeholder="Spirituality" class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-12">
                                        <input type="number" name="password" placeholder="Sleep" class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-12">
                                        <input type="number" name="password" placeholder="Element 2" class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-12">
                                        <input type="number" name="password" placeholder="Element 3" class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-12">
                                        <input type="number" name="password" placeholder="Element 4" class="form-control" />
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Save</button>
                            </form>
                        </Card.Body>
                    </Card>
            </Col>
            <Col md="4">
                    <Card className=''>
                        <Card.Header>
                            <h4>Daily Entry</h4>
                        </Card.Header>
                        <Card.Body className="">
                            <form>
                                <div class="row mb-3">
                                    <div class="col-sm-12">
                                        <input type="number" name="email" class="form-control" placeholder="Physical Health" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-12">
                                        <input type="number" name="password" placeholder="Spirituality" class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-12">
                                        <input type="number" name="password" placeholder="Sleep" class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-12">
                                        <input type="number" name="password" placeholder="Element 2" class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-12">
                                        <input type="number" name="password" placeholder="Element 3" class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-12">
                                        <input type="number" name="password" placeholder="Element 4" class="form-control" />
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Save</button>
                            </form>
                        </Card.Body>
                    </Card>
            </Col>
            <Col>
                <Card className=''>
                    <Card.Header>
                        <h4>History</h4>
                    </Card.Header>
                    <Card.Body className="p-0">
                        <ListGroup>
                            <ListGroup.Item>Physical Wellbeing <span className="bg-primary p-1 ms-4 rounded-pill">5</span></ListGroup.Item>
                            <ListGroup.Item>Spirituality <span className="bg-primary p-1 ms-4 rounded-pill">5</span></ListGroup.Item>
                            <ListGroup.Item>Emotional wellbeing <span className="bg-primary p-1 ms-4 rounded-pill">5</span></ListGroup.Item>
                            <ListGroup.Item>Experience 4 <span className="bg-primary p-1 ms-4 rounded-pill">5</span></ListGroup.Item>
                            <ListGroup.Item>Experience 5 <span className="bg-primary p-1 ms-4 rounded-pill">5</span></ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <Card.Footer className="d-flex">
                        <div class="col-sm-4 me-2">
                            <input type="date" name="password" placeholder="Element 4" class="form-control" />
                        </div>
                        {/* <div class="col-sm-4">
                            <input type="date" name="password" placeholder="Element 4" class="form-control" />
                        </div> */}
                        <button className="btn btn-primary">view</button>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )
}

export default Home