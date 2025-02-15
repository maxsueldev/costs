import { useNavigate } from "react-router-dom";

import ProjectForm from '../../project/ProjectForm';

import { NewProjectContainer } from './style';

function NewProject() {

    const navigate = useNavigate();

    function createPost(project) {
        // initialize cost and services
        project.cost = 0;
        project.services = [];

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then(resp => resp.json())
        .then(data => {
            console.log(data)
            navigate('/projects', { message: 'Projeto criado com sucesso!' });
        })
        .catch(err => console.log(err));
    }

    return (
        <NewProjectContainer>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
        </NewProjectContainer>
    );
}

export default NewProject;