export const fetchData = async (input: RequestInfo, init?: RequestInit) => {
  const request = await fetch(input, init);
  if (request.ok) {
    return await request.json();
  } else {
    const error = await request.json();
    return Promise.reject({ ...error, statusCode: request.status });
  }
};

export const getRequest = async (path: string) => {
  return await fetchData(`http://localhost:4000/api/v1${path}`, {
    method: "GET",
    credentials: "include",
  });
};

export const postRequest = async (path: string, data: any) => {
  return await fetchData(`http://localhost:4000/api/v1${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });
};
