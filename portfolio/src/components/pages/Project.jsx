const projects = [
    {
        id: 1,
        projectName: "Fist Project",
        description: "This was a very fun project we worked on"
    }
]

function Project() {
    return (
      <ul className="list-group">
        {
            projects.map((project) => { 
                return (
                    <li className="list-group-item" key={project.id}>
                        {`${project.projectName}`}
                    </li>
                );
            })
        }
      </ul>
    );
  }
  
export default Project;
  