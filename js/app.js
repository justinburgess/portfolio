const newsElement = document.getElementById('project-news');
const styleElement = document.getElementById('project-style');
const galleryElement = document.getElementById('project-gallery');
const gameElement = document.getElementById('project-game');
const dashboardElement = document.getElementById('project-dashboard');
const directoryElement = document.getElementById('project-directory');
const responsiveElement = document.getElementById('project-responsive');
const foldersElement = document.getElementById('project-folders')
const menuElement = document.getElementById('menu')
const overlay = document.getElementById('overlay')

const menuIconMap = {
    'menu-image-news': newsElement,
    'menu-image-style': styleElement,
    'menu-image-gallery': galleryElement,
    'menu-image-game': gameElement,
    'menu-image-dashboard': dashboardElement,
    'menu-image-directory': directoryElement,
    'menu-image-responsive': responsiveElement,
    'menu-image-folders': foldersElement,
}

const projects = [
    {
        projectId : 'project-news',
        tabId : 'tab-news',
        tabText : 'Newsletter',
        imageSrc : 'img/newsletter-signup.png',
        altText : 'news signup site',
        title : 'Project: Newsletter Signup',
        text : 'In this project, I learned to leverage forms to capture form data, set requirements for form input, and transition css effects when fields are focused.',
    },
    {
        projectId : 'project-style',
        tabId : 'tab-style',
        tabText : 'Style Guide',
        imageSrc : 'img/web-style-guide.png',
        altText : 'web style guide site',
        title : 'Project: Web Style Guide',
        text : 'In this project, I learned to use SCSS for streamlining and standardizing css source code.'
    },
    {
        projectId : 'project-gallery',
        tabId : 'tab-gallery',
        tabText : 'Photo Gallery',
        imageSrc : 'img/interactive-photo-gallery.png',
        altText : 'photo gallery site',
        title : 'Project: Photo Gallery',
        text : 'In this project, I learned to use CSS grid to create a dynamic, responsive layout, and to use Javascript for lightbox gallery view and search functionality.'  
    },
    {
        projectId : 'project-game',
        tabId : 'tab-game',
        tabText : 'Game Show App',
        imageSrc : 'img/game-show-app.png',
        altText : 'game show site',
        title : 'Project: Game Show App',
        text : 'In this project, I learned to use javascript to track scores, interact with DOM elements to display user choices and display messages depending on win or lose status.'
    },
    {
        projectId : 'project-dashboard',
        tabId : 'tab-dashboard',
        tabText : 'Web App Dashboard',
        imageSrc : 'img/web-app-dashboard.png',
        altText : 'web app dashboard site',
        title : 'Project: Web App Dashboard',
        text : 'In this project, I learned to use SCSS for streamlining and standardizing css source code.',
    },
    {
        projectId : 'project-directory',
        tabId : 'tab-directory',
        tabText : 'Employee Directory',
        imageSrc : 'img/employee-directory.png',
        altText : 'employee directory search site',
        title : 'Project: Employee Directory',
        text : 'In this project, I learned to use SCSS for streamlining and standardizing css source code.',
    },
    {
        projectId : 'project-responsive',
        tabId : 'tab-responsive',
        tabText : 'Mobile First Layout',
        imageSrc : 'img/responsive-layout.png',
        altText : 'employee directory search site',
        title : 'Project: Mobile 1st Responsive Layout',
        text : 'In this project, I learned to use SCSS for streamlining and standardizing css source code.',
    },
    {
        projectId : 'project-folders',
        tabId : 'tab-folders',
        tabText : 'Folders',
        imageSrc : 'img/folder-open.svg',
        altText : 'open folders site',
        title : 'Project: Open Folders',
        text : 'In this project, I learned to use SCSS for streamlining and standardizing css source code.'
    }
]

menu.addEventListener('click', (e) => {
    const targetID = e.target.id;
    const projectFolder = menuIconMap[targetID];
    const children = overlay.children;
    for (child of children) {
        child.style.display = 'none'
    }
    console.log(projectFolder.childNodes[0]);
}); 