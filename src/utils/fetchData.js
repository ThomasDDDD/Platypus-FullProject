const apiUrl = "http://localhost:7777";

export const fetchData = async (endpoint) => {
  if (!endpoint && typeof endpoint !== "string") {
    throw new Error("a valid endpoint must be provided");
  }
  try {
    return fetch(`${apiUrl}/${endpoint}`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};
