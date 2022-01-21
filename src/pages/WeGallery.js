import { Col, Row } from "react-bootstrap"
import GalleryImage from "../components/GalleryImage"
import Navigation from "../components/Navigation"

import alex from '../gallery/images/pexels-alex-azabache-3214944.jpg'
import brady from '../gallery/images/pexels-brady-knoll-3329292.jpg'

const WeGallery = ()=>{
    return (
        <>
            <Col xs="12" className="p-0">
                <Navigation />
                <h2 className="text-center mb-2">We Gallery</h2>
            </Col>
            <Col>
                <Row>
                    {
                        [alex, brady].map(img=>{
                            return (
                                <Col md="3">
                                    <GalleryImage image={img} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Col>
        </>
    )
}

export default WeGallery