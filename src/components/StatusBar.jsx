

function StatusBar({noteStore}) {
    const allStatus = noteStore.length
    const completedstatus = noteStore.filter(note=>note.completed).length
    const uncompletedNote = allStatus - completedstatus

  return (
    <div className="list--info">
    <div className="item--info">
        <p className="completed--info">completed</p>
        <span className="count--list">{completedstatus}</span>
    </div>
    <div className="item--info">
        <p className="all--info">All</p>
        <span className="count--list">{allStatus}</span>
    </div>
    <div className="item--info">
        <p className="open--info">Open</p>
        <span className="count--list">{uncompletedNote}</span>
    </div>
</div>
  )
}

export default StatusBar



