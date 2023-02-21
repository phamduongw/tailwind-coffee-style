const topMenu = document.getElementById('cs-top-menu')
const toggleTopMenuIcon = document.getElementById('cs-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    topMenu.classList.toggle('cs-top-menu-expanded')
    topMenu.classList.toggle('hidden')
  } else {
    if (topMenu.classList.contains('cs-top-menu-expanded')) {
      topMenu.classList.remove('cs-top-menu-expanded')
      topMenu.classList.add('hidden')
    }
  }
})
