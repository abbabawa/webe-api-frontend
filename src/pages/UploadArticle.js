import { useState } from "react"
import { Col, Row } from "react-bootstrap"
import Navigation from "../components/Navigation"

const UploadArticle = (props)=>{
    const [title, setTitle] = useState('')
    const [articleElements, setArticleElements] = useState([{type: 'h', name:'heading', value:"Simple heading"}])

    const addElement = (e)=>{console.log(e)
            setArticleElements(prev=>{
                //let val = prev.push({type: e.target.dataset.value, name:e.target.dataset.name, value:""})
                return [...prev, {type: e.target.dataset.value, name:e.target.dataset.name, value:""}]
            })
    }

    let elems = articleElements.map(element=>{
        let elemType
        if(element.type === 'h'){
            elemType = <input type="text" name={element.name} value={element.value} class="form-control" />
        }else if(element.type === 'p'){
            elemType = <textarea name={element.name} value={element.value} class="form-control"></textarea>
        }
        return (<div class="row mb-3">
            <label for="" class="col-sm-2 col-form-label">Password</label>
            {elemType}
        </div>)
    })
    return (
        <>
            <Col xs="12" className="p-0">
                <Navigation getUser={props.getUser} />
                <h2 className="text-center mb-2">We Gallery</h2>
            </Col>
            <Col xs="12">
                <Row>
                    <Col md="6">
                        <form>
                                <div class="row mb-3">
                                    <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputEmail3" value={title} />
                                    </div>
                                </div>
                                {elems}
                                <button type="submit" class="btn btn-primary">Sign in</button>
                        </form>
                        <div className="position-absolute bottom-0 ">
                            <button className="btn btn-primary" data-value="h" onClick={addElement}>Heading</button>
                            <button className="btn btn-primary" data-value="p" onClick={addElement}>Paragraph</button>
                            <button className="btn btn-primary">Image</button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default UploadArticle