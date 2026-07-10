const visualOrbits = document.querySelectorAll('.visual-orbit');
const blackCovers = document.querySelectorAll('.black-cover');
const satellites = document.querySelectorAll('.satellite');
const logo = document.getElementById('logo');
const projectContainer = document.getElementById('project-container');
const projects = document.querySelectorAll('.projects');
const projectBackground = document.getElementById('project-background');

let view = '';
let satellitesDisabled = false;
let logoDisabled = false;

function satelliteHover(project, direction) {
    if (view === project) {
        return;
    }

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
            element.classList.add(project);
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

function logoHover(direction) {
    if (direction === 1) {
        visualOrbits.forEach(element => {
            element.classList.add('logo');
        });

        satellites.forEach(element => {
            const animation = element.getAnimations()[0];
            animation.playbackRate = Math.random() * 20;
        });
    } else {
        visualOrbits.forEach(element => {
            element.classList.remove('logo');
        });

        satellites.forEach(element => {
            const animation = element.getAnimations()[0];
            animation.playbackRate = 1;
        });
    }
}

function logoClick() {
    if (logoDisabled === true) {
        return;
    }

    logoDisabled = true;

    if (view === 'about') {
        view = '';

        visualOrbits.forEach(element => {
            element.classList.remove('circle');
        });

        blackCovers.forEach(element => {
            element.classList.remove('circle');
        });

        satellites.forEach(element => {
            element.classList.remove('disappear');
        });

        logoDisabled = false;
    } else {
        view = 'about';

        satellites.forEach(element => {
            element.classList.add('disappear');
        });

        visualOrbits.forEach(element => {
            element.classList.add('box');
        });

        blackCovers.forEach(element => {
            element.classList.add('box');
        });

        setTimeout(() => {
            visualOrbits.forEach(element => {
                element.classList.remove('box');
                element.classList.add('circle');
            });

            blackCovers.forEach(element => {
                element.classList.remove('box');
                element.classList.add('circle');
            });

            setTimeout(() => {
                projects.forEach(element => {
                    if (element.id === 'about-info') {
                        element.classList.remove('hidden');
                    } else {
                        element.classList.add('hidden');
                    }
                });
                
                projectContainer.classList.add('opacity');

                logoDisabled = false;
            }, 500);
        }, 1000);
    }
}

satellites.forEach(satellite => {
    satellite.addEventListener('mouseenter', () => satelliteHover(satellite.id, 1));
    satellite.addEventListener('mouseleave', () => satelliteHover(satellite.id, 0));
});

satellites.forEach(satellite => {
    satellite.addEventListener('click', () => satelliteClick(satellite.id));
});

logo.addEventListener('mouseenter', () => logoHover(1));
logo.addEventListener('mouseleave', () => logoHover(0));

logo.addEventListener('click', () => logoClick())
