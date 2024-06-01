const topMenu = document.getElementById("ct-top-menu")
const toggleTopMenuIcon = document.getElementById("ct-top-menu-toggle")

document.addEventListener('click', (e) =>{
  if(toggleTopMenuIcon.contains(e.target)) {
    /** click vao toggle top menu icon **/
    topMenu.classList.toggle('hidden')
    topMenu.classList.toggle('ct-topmenu-expanded')

  }else {
    /** click outside **/
    if(topMenu.classList.contains('ct-topmenu-expanded')) {
      topMenu.classList.add('hidden')
      topMenu.classList.remove('ct-topmenu-expanded')
    }
  }
})