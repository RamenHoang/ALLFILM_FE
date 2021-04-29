import { GET_PERSONS, ADD_PERSON, EDIT_PERSON_NAME, EDIT_PERSON_AGE, DELETE_PERSON, DELETE_MANY_PERSON } from "./constants";

export function getPersons() {
  return { type: GET_PERSONS };
}

export function addPerson(data) {
  return {
    type: ADD_PERSON,
    payload: data
  };
}

export function editPersonName(data) {
  return {
    type: EDIT_PERSON_NAME,
    payload: data
  };
}

export function editPersonAge(data) {
  return {
    type: EDIT_PERSON_AGE,
    payload: data
  };
}

export function deletePerson(data) {
  return {
    type: DELETE_PERSON,
    payload: data
  };
}

export function deleteManyPerson(data) {
  return {
    type: DELETE_MANY_PERSON,
    payload: data
  };
}
