import {GET_PERSONS, ADD_PERSON, EDIT_PERSON_NAME, EDIT_PERSON_AGE, DELETE_PERSON, DELETE_MANY_PERSON } from "./constants";

const initialState = {
  persons:[]
};

function rootReducer(state = initialState, action) { //state = {articles: [], perspons:[]}
  switch (action.type) {
    case GET_PERSONS:
      return {
        ...state,
        persons: [
          { name: "Lê Thị Liễu", age: 20 },
          { name: "Nguyễn Thị Thanh Nhàn", age: 21 },
          { name: "Nguyễn Hoàng Anh", age: 21 }
        ]
      };
    case ADD_PERSON:
      return {
        ...state,
        persons: [...state.persons, action.payload]
      };
    case EDIT_PERSON_NAME:
      state.persons[action.payload.index].name = action.payload.name;
      return {
        ...state,
        persons: [...state.persons]
      };
    case EDIT_PERSON_AGE:
      state.persons[action.payload.index].age = action.payload.age;
      return {
        ...state,
        persons: [...state.persons]
      };
    case DELETE_PERSON:
      state.persons.splice(action.payload,1);
      console.log(state.persons);
      return {
        ...state,
        persons: [...state.persons]
      };
    case DELETE_MANY_PERSON:
      for(let i=0; i< action.payload.length; i++){
        state.persons.splice(action.payload[i],1);
      }
      return {
        ...state,
        persons: [...state.persons]
      };

    default:
      return state;
  }
}

export default rootReducer;
