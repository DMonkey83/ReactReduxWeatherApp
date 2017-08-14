const Cons = console;
export default function(state=null, action){
  Cons.log('Action received', action);

  return state;
}
