let AddTodoForm = ({onSubmit}) => {
  let input

  return (
    <div>
      <form onSubmit={e => {onSubmit(input.value)}}>
        <input ref={node => { input = node }} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}


export default AddTodoForm