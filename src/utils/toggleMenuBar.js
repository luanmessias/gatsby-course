const toggleMenuBar = ({ menuBarStatus }) => {
  if (menuBarStatus === '') return '-100vw'
  if (menuBarStatus === '-100vw') return '0vw'
  if (menuBarStatus === '0vw') return '-100vw'
}

export default toggleMenuBar
