const Options = () => {
  const OptionList = `
  Usage :-
  $ node dist/server.js createTask   --title="SOMETHING HERE"   # Create a task
  $ node dist/server.js listTask                                # List all active tasks
  $ node dist/server.js deleteTask   --title="SOMETHING HERE"   # Delete a task
  $ node dist/server.js showTask     --title="SOMETHING HERE"   # Sow a specific task
  $ node dist/server.js completeTask --title="SOMETHING HERE"   # Complete a task`;

  console.log(OptionList);
};

export { Options };