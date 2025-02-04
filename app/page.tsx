import Image from "next/image";
import axios from "axios";
async function getUserData() {
  //make fake delay
  await new Promise((resolve) => setTimeout(resolve, 4000));
  // const response = await axios.get("https://jsonplaceholder.org/users/1");
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}
export default async function Home() {
  const userDetails = await getUserData();
  console.log(userDetails);
  return <div>{userDetails.name}</div>;
}
