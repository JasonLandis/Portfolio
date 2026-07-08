const visualOrbitOne = document.getElementById('visual-orbit-one');
const visualOrbitTwo = document.getElementById('visual-orbit-two');
const blackCoverOne = document.getElementById('black-cover-one');
const blackCoverTwo = document.getElementById('black-cover-two');
const constellation = document.getElementById('constellation');
const gamedevblog = document.getElementById('gamedevblog');
const guessphrase = document.getElementById('guessphrase');
const webbedwords = document.getElementById('webbedwords');
const sattelits = document.querySelectorAll('.satellite');
const logo = document.getElementById('logo');

const projects = document.querySelectorAll('.projects');

const projectContainer = document.getElementById('project-container');

const projectBackground = document.getElementById('project-background');

const satellites = ['constellation', 'gamedevblog', 'guessphrase', 'webbedwords'];

let view = '';

function satelliteHover(project) {
    if (view !== '' && view !== project) {
        return;
    }

    visualOrbitOne.classList.remove(...satellites);
    visualOrbitTwo.classList.remove(...satellites);
    if (project) {
        visualOrbitOne.classList.add(project);
        visualOrbitTwo.classList.add(project);
    }
}

function satelliteClick(project) {
    if (project) {
        if (project === view) {
            view = '';
            sattelits.forEach(proj => {
                proj.classList.remove('disappear');
            });

            visualOrbitOne.classList.remove('circle');
            visualOrbitTwo.classList.remove('circle');
            blackCoverOne.classList.remove('circle');
            blackCoverTwo.classList.remove('circle');
            constellation.classList.remove('circle');
            gamedevblog.classList.remove('circle');
            guessphrase.classList.remove('circle');
            webbedwords.classList.remove('circle');
            logo.classList.remove('disappear');

            projects.forEach(proj => {
                proj.classList.add('hidden');
            });

            projectBackground.classList.remove(project);

            projectContainer.classList.remove('opacity');

            setTimeout(() => {
                projectContainer.classList.add('hidden');
            }, 500);

        } else {
            view = project;

            sattelits.forEach(proj => {
                if (proj.id === project) {
                    proj.classList.remove('disappear');
                } else {
                    proj.classList.add('disappear');
                }
            });

            visualOrbitOne.classList.add('circle');
            visualOrbitTwo.classList.add('circle');
            blackCoverOne.classList.add('circle');
            blackCoverTwo.classList.add('circle');
            constellation.classList.add('circle');
            gamedevblog.classList.add('circle');
            guessphrase.classList.add('circle');
            webbedwords.classList.add('circle');
            logo.classList.add('disappear');

            projects.forEach(proj => {
                if (proj.id === `${project}-info`) {
                    proj.classList.remove('hidden');
                } else {
                    proj.classList.add('hidden');
                }
            });

            projectBackground.classList.add(project);

            projectContainer.classList.remove('hidden');

            setTimeout(() => {
                projectContainer.classList.add('opacity');
            }, 500);
        }
    }
}

document.querySelectorAll('.satellite').forEach(satellite => {
    satellite.addEventListener('mouseenter', () => satelliteHover(satellite.id));
    satellite.addEventListener('mouseleave', () => satelliteHover(''));
});

document.querySelectorAll('.satellite').forEach(satellite => {
    satellite.addEventListener('click', () => satelliteClick(satellite.id));
});
