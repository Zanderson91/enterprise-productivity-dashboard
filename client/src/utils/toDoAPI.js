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