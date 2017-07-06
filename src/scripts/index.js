const Jumbler = require('./Jumbler')

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
  $project.addEventListener('mouseenter', handleMouseEnter)
  $project.addEventListener('mouseleave', handleMouseLeave)

  const $title = $project.getElementsByTagName('A')[0]
  const $body = $project.getElementsByTagName('P')[0]

  return {
    $el: $project,
    title: new Jumbler($title),
    body: new Jumbler($body)
  }
})

updateView()
