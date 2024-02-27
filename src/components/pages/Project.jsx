import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const projects = [
    {
        id: 1,
        projectName: "Take a Hike",
        description: "This is meant to be a simple siteBuild our own API using MySQL database and sequalizer. Search for a hike based on difficulty level.",
        imgUrl:"https://res.cloudinary.com/dwjrsllb0/image/upload/v1708903380/personal/enigmatic-cliffs-38751-768457d3d919.herokuapp.com__1_gdtkbh.png",
        deploymentUrl:"https://enigmatic-cliffs-38751-768457d3d919.herokuapp.com/",
        gitHub: "https://github.com/ariSof/take-a-hike"
    },
    {
        id: 2,
        projectName: "Can I Afford It?",
        description: "In this project we calculate travel cost (flight + hotel) based on data entered. We gather the lowest flight available on choosen dates, to selected destination from TripAdvisor API and fetch cheapest hotel from Booking.com API.",
        imgUrl:"https://res.cloudinary.com/dwjrsllb0/image/upload/v1708905392/personal/Screenshot_2024-01-10_at_1.25.50_PM_fbu6bh.png",
        deploymentUrl:"https://sebjustseb.github.io/AffordIt-App/",
        gitHub: "https://github.com/sebjustseb/AffordIt-App"
        
    },
    {
        id: 3,
        projectName: "Weather Dashboard",
        description: "Current weather page, search by city. 5 day forecast. Uses OpenWeather API and Bulma CSS library",
        imgUrl:"https://res.cloudinary.com/dwjrsllb0/image/upload/v1708901812/personal/screenshot_index.html_xdexpo.png",
        deploymentUrl:"https://arisof.github.io/weather-app/",
        gitHub: "https://github.com/ariSof/weather-app"
    },
    {
        id: 4,
        projectName: "Logo Maker",
        description: "Create an svg logo using data entered on the command-line.",
        imgUrl:"https://res.cloudinary.com/dwjrsllb0/image/upload/v1708905050/personal/Examples_dcafol.png",
        deploymentUrl:"https://watch.screencastify.com/v/YoNtMKhjhpcB5r47GoUt",
        gitHub: "https://github.com/ariSof/logo-maker"
    },
    {
        id: 5,
        projectName: "Technology Blog",
        description: "A CMS style Technology Blog site where developers can publish a blog post and comment on other developer's posts. Built fullstack app and deployed to Heroku. It follows MVC architecture. Uses Handlebars for the front end, mySQL db, sequelize as ORM, and express-session npm package for authentication.",
        imgUrl:"https://res.cloudinary.com/dwjrsllb0/image/upload/v1708905945/personal/post_and_comment_tmoa1w.png",
        deploymentUrl:"https://mighty-retreat-24967-cb1040ca1720.herokuapp.com/",
        gitHub: "https://github.com/ariSof/tech-blog"
    }
]


function Project() {
    {
        return (
            <div style={{display: 'flex', flexWrap: 'wrap'}} >
                {
                    projects.map((project) => { 
                        return (
            
                            <Card key={project.id} bg="dark" text="white" border="dark" style={{ width: '40%', margin: '3%' }}>
                                <Card.Img variant="top" src={project.imgUrl} />
                                <Card.Body>
                                    <Card.Title>{`${project.projectName}`}</Card.Title>
                                    <Card.Text>
                                        {`${project.description}`}
                                    </Card.Text>
                                    <div className="d-grid gap-2">
                                        <Button variant="secondary" size="lg" href={project.gitHub} > <img style={{ height: '30px'}} src='/images/github-mark-white.png'></img> Repo</Button>
                                        <Button variant="secondary" size="lg" href={project.deploymentUrl} >Go to Project</Button>
                                    </div>
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
  