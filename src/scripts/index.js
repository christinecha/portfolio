const isTouchDevice =
  'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
const $projects = Array.prototype.slice.call(document.getElementsByClassName('project'))

let $activeProject = null

const handleMouseEnter = (e) => {
  $activeProject = e.srcElement
  updateView()
}

const handleMouseLeave = (e) => {
  if ($activeProject === e.srcElement) $activeProject = null
  updateView()
}

const updateView = () => {
  $projects.forEach(($project) => {
    const isActiveProject = $activeProject === $project

    if (!!$activeProject && !isActiveProject) {
      $project.classList.add('inactive')
    } else {
      $project.classList.remove('inactive')
    }
  })
}

const projects = $projects.map(($project) => {
  if (isTouchDevice) return

  $project.addEventListener('mouseenter', handleMouseEnter)
  $project.addEventListener('mouseleave', handleMouseLeave)
})

updateView()
