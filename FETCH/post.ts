import axios from "axios";
interface IUser {
    firstname: string,
    lastname: string,
    email: string,
    password: string
};
async function postUser (params: IUser) {
    try{
        const response = await axios.post("https://694ba34a26e870772068a7b1.mockapi.io/api/v1/users",
            {
                firstname: params.firstname,
                lastname: params.lastname,
                email: params.email,
                password: params.password
            }
        );
        console.log(response.data);
    } catch (err) {
        console.log(err) };
    };
postUser({
    firstname: "Budi",
  lastname: "Taniagus",
  email: "budi@mail.com",
  password: "123456"
});