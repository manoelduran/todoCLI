const Options = () => {
    const OptionList = `
  Usage :-
  $ node dist/server.js createTask  --tittle="SOMETHING HERE"
  $ node dist/server.js listTask         # Show remaining tasks
  $ node dist/server.js del NUMBER       # Delete a task
  $ node dist/server.js done NUMBER      # Complete a task`;
    
    console.log(OptionList);
  };

  export {Options};