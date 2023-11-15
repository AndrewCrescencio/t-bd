const links = [
  { target: '/panel', label: 'Painel' },
  { target: '/projects', label: 'Projetos' },
  { target: '/leads', label: 'Leads' },
  { target: '/campaigns', label: 'Campanhas' },
  { target: '/notifications', label: 'Notificações', counter: 1 }
]

const tasks = [
  { title: 'Task number one' },
  { title: 'Task number two' },
  { title: 'Task number three' }
]

const panel = {
  title: 'Painel',
  heading: 'As últimas atualizações de hoje',
  content: {
    cards: [],
    list: ['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem'],
    articles: [{ title: '', sub_title: '', heading: '' }]
  },
  recent_projects: [{title: ""}]
}

const data = {
  links,
  tasks,
  panel
}

export default data
