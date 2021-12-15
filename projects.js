
let projectObjects = [
    {
        name: 'Multi-Post Stories',
        description : `A daily selection of privately personalized reads; no accounts or
        sign-ups required. has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a standard dummy text.`,
        featuredImage: './assets/Img-Placeholder.svg',
        technologies: ['css','html','bootstrap','ruby']
    },
    {
        name: 'Multi-Post Stories',
        description : `A daily selection of privately personalized reads; no accounts or
        sign-ups required. has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a standard dummy text.`,
        featuredImage: './assets/Img-Placeholder.svg',
        technologies: ['css','html','bootstrap','ruby']
    },
    {
        name: 'Multi-Post Stories',
        description : `A daily selection of privately personalized reads; no accounts or
        sign-ups required. has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a standard dummy text.`,
        featuredImage: './assets/Img-Placeholder.svg',
        technologies: ['css','html','bootstrap','ruby']
    },
    {
        name: 'Multi-Post Stories',
        description : `A daily selection of privately personalized reads; no accounts or
        sign-ups required. has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a standard dummy text.`,
        featuredImage: './assets/Img-Placeholder.svg',
        technologies: ['css','html','bootstrap','ruby']
    } 
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

projectObjects.forEach((object,index)=>makeProject(object,index))
projectObjects.forEach((object,index)=>makeTechnologies(object.technologies,index))

document.querySelectorAll('.myProjects .projectButton').forEach((projectBtn) =>{
    projectBtn.addEventListener('click', () => {
        document.querySelector('.popupWrapper').style.display='block';
    })
});

// document.querySelectorAll('.myProjects .projectButton').forEach((projectBtn) =>{
//     projectBtn.addEventListener('click', () => {
//         document.querySelector('body').style.filter= 'blur(1px)';
//     })
// });

document.querySelector('.popupClose').addEventListener('click', () => {
    document.querySelector('.popupWrapper').style.display='none';
});
