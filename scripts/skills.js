const closeIcon = document.getElementById('js-close-icon')
const skilPopUp = document.getElementById('js-popup');
const addSkillForm = document.getElementById('add-skills-form');
const inpselectSkill = document.getElementById('skill-select');
const inpDescription = document.getElementById('description-inp');
const inpselectIcon = document.getElementById('icon-select');

let selectedIcon = null

closeIcon.addEventListener('click', handleCloseSkill)

function handleCloseSkill() {
  skilPopUp.style.display = 'none'
}

