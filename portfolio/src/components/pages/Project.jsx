import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const projects = [
    {
        id: 1,
        projectName: "Fist Project",
        description: "This was a very fun project we worked on"
    }
]


function Project() {
    {
        return (
            <div>
                {
                    projects.map((project) => { 
                        return (
            
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{`${project.projectName}`}</Card.Title>
                                <Card.Text>
                                {`${project.description}`}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        );
                    })
                }
            </div>
        )
    }
}

export default Project;
  