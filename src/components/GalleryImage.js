import { Card } from "react-bootstrap"
import { Download } from "react-bootstrap-icons"

const GalleryImage = (props)=>{
    return (
        <Card className="bg-dark gallery-image">
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Text>
                    <Download color="white" />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GalleryImage