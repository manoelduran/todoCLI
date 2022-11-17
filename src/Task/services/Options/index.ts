const Options = () => {
  const OptionList = `
  Usage :-
  $ node dist/server.js createTask   --tittle="SOMETHING HERE"   # Create a task
  $ node dist/server.js listTask                                 # List all active tasks
  $ node dist/server.js deleteTask   --tittle="SOMETHING HERE"   # Delete a task
  $ node dist/server.js showTask     --tittle="SOMETHING HERE"   # Sow a specific task
  $ node dist/server.js completeTask --tittle="SOMETHING HERE"   # Complete a task`;

  console.log(OptionList);
};

export { Options };