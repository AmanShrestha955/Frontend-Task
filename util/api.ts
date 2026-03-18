export const getData = async (path: string) => {
  try {
    const response = await fetch(process.env.NEXT_URL + path);
    return response;
  } catch (error) {
    console.log(error);
  }
};
