import { Card, Col } from "react-bootstrap"

const Profile = (props)=>{
    return (
        <Col md="12" className='mx-auto mt-4'>
            <Card className='bg-light'>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <h6>Name: {props.name}</h6>
                </Card.Body>

            </Card>
        </Col>
    )
}

export default Profile