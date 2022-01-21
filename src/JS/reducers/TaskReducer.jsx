import { ADD_TASK,DELETE_TASK ,DONE_TASK} from "../actionType/Task";

const initialstate = {
  todolist: [
    { id: 1, text: "first task", isDOne: false },
    { id: 2, text: "second task", isDOne: false },
  ],
};

export const TaskReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, todolist: [...state.todolist, payload] };
      case DELETE_TASK:
        return { ...state, todolist:state.todolist.filter((el) =>el.id !== payload),};

        case DONE_TASK:
          return { ...state,todolist:state.todolist.map(el=>el.id==payload?{...el,isDone: !el.isDone}:el)};

    default:
      return state;
  }
};
