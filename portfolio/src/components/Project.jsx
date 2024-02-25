const projects = [
    {
        id: 1,
        projectName: "",
        description: ""
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
  