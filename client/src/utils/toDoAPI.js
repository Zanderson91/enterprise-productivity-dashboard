// fetch calls calling the routes in server/routes/api/toDo-routes.js

export const createToDo = async (item) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    }
    const response = await fetch("/api/toDo", options);
    await response.json();
};

export const getAllToDos = async () => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch("/api/toDo/allToDos", options);
    const data = await response.json();
    return data;
};