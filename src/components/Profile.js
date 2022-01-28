import { Card, Col } from "react-bootstrap"

const Profile = (props)=>{
    return (
        <Col md="5" className='mx-auto mt-4'>
            <Card className='bg-light'>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <h3>Name: {props.getUser().name}</h3>
                    <p>Thanks for signing up</p>
                </Card.Body>

            </Card>
        </Col>
    )
}

export default Profile