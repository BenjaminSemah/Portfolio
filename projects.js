
let objects = [
    {
        name: 'blaa',
        description : 'hhhhh',
        featuredImage: './assets/Img-Placeholder.svg',
        technologies: ['css','html','bootstrap','ruby']
    },
    {
        name: 'blaa',
        description : 'hhhhh',
        featuredImage: './assets/Img-Placeholder.svg',
        technologies: ['css','html','bootstrap','ruby']
    },
   
]
const createListItem = (technology)=>{
    let listItem = document.createElement('li');
    listItem.textContent = technology;
    return listItem;
}
const makeTechnologies = (technologies=[],index)=>{
    
    let project = document.querySelector(`#project${index+1} ul`)
     technologies.map((technology)=>createListItem(technology)).forEach((node)=>{
         project.appendChild(node)
     })
     
}

const makeProject = ({name,description,featuredImage,technologies},index)=>{

    let projectDiv = document.createElement('div')
    let projectId = `project${index+1}`;
    projectDiv.setAttribute('id', projectId);
    projectDiv.innerHTML = `
    <a class="projectImages" href="#">
    <img
        class="imageNumber1"
        src="${featuredImage}"
        alt="Screenshot of Project"
    />
</a>
<div class="project1Info">
    <h3 class="multiPost">${name}</h3>
    <p class="projectBrief">
        ${description}
    </p>
    <div class="programmingLanguages">
        <ul class="languagesUsed">

        </ul>
    </div>
    <button class="projectButton" type="Button">See Project</button>
</div>
    `;
    let myProjects = document.querySelector('.myProjects')
    myProjects.appendChild(projectDiv)
    return projectId

}
 

objects.forEach((object,index)=>makeProject(object,index))
objects.forEach((object,index)=>makeTechnologies(object.technologies,index))
