const Jumbler = require('./Jumbler')

const $projects = Array.prototype.slice.call(document.getElementsByClassName('project'))
const vw = window.innerWidth

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
  if (vw < 768) return

  projects.forEach(project => {
    const isActive = $activeProject === project.$el

    if (!$activeProject || isActive) {
      project.$el.classList.add('is-active')
      project.title.unjumble()
      project.body.unjumble()
    } else {
      project.$el.classList.remove('is-active')
      project.title.jumble()
      project.body.jumble()
    }
  })
}

const projects = $projects.map($project => {
  const project = { $el: $project }

  if (vw >= 768) {
    $project.addEventListener('mouseenter', handleMouseEnter)
    $project.addEventListener('mouseleave', handleMouseLeave)

    const $title = $project.getElementsByTagName('A')[0]
    const $body = $project.getElementsByTagName('P')[0]

    project.title = new Jumbler($title)
    project.body = new Jumbler($body)
  } else {
    project.$el.classList.add('is-active')
  }

  return project
})

updateView()
