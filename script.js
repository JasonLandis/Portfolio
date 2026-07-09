const visualOrbits = document.querySelectorAll('.visual-orbit');
const blackCovers = document.querySelectorAll('.black-cover');
const satellites = document.querySelectorAll('.satellite');
const logo = document.getElementById('logo');
const projectContainer = document.getElementById('project-container');
const projects = document.querySelectorAll('.projects');
const projectBackground = document.getElementById('project-background');

let view = '';
let satellitesDisabled = false;

function satelliteHover(project, direction) {
    if (direction === 1) {
        visualOrbits.forEach(element => {
            element.classList.add(project);
        });
    } else {
        visualOrbits.forEach(element => {
            element.classList.remove(project);
        });
    }
}

function satelliteClick(project) {
    if (satellitesDisabled === true) {
        return;
    }

    satellitesDisabled = true;

    if (project === view) {
        view = '';

        projectContainer.classList.remove('opacity');

        setTimeout(() => {
            projects.forEach(element => {
                if (element.id === `${project}-info`) {
                    element.classList.add('hidden');
                }
            });
            projectBackground.classList.remove(project);

            satellites.forEach(element => {
                element.classList.remove('disappear');
                element.classList.remove('circle');
            });

            visualOrbits.forEach(element => {
                element.classList.remove('circle');
            });

            blackCovers.forEach(element => {
                element.classList.remove('circle');
            });

            logo.classList.remove('disappear');

            satellitesDisabled = false;
        }, 250);
    } else {
        view = project;

        satellites.forEach(element => {
            element.classList.add('circle');
            if (element.id !== project) {
                element.classList.add('disappear');
            }
        });

        visualOrbits.forEach(element => {
            element.classList.add('circle');
        });

        blackCovers.forEach(element => {
            element.classList.add('circle');
        });

        logo.classList.add('disappear');

        setTimeout(() => {
            projects.forEach(element => {
                if (element.id === `${project}-info`) {
                    element.classList.remove('hidden');
                } else {
                    element.classList.add('hidden');
                }
            });
            projectBackground.classList.add(project);
            projectContainer.classList.add('opacity');

            satellitesDisabled = false;
        }, 500);
    }
}

satellites.forEach(satellite => {
    satellite.addEventListener('mouseenter', () => satelliteHover(satellite.id, 1));
    satellite.addEventListener('mouseleave', () => satelliteHover(satellite.id, 0));
});

satellites.forEach(satellite => {
    satellite.addEventListener('click', () => satelliteClick(satellite.id));
});
