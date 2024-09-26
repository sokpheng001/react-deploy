// import { BASE_URL } from "../auth/authAction";
export async function fetchProduct() {
  try{
     const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
     const response = fetch(`${import.meta.env.VITE_BASE_URL}products`, requestOptions)//we have this
        .then((response) => response.json());
        const data = await response;
        // console.log("data.payload.list",data.payload.list);
        return data?.payload.list;

  }catch(error){
    console.log(error);
  };
}


// export async function discountValue() {
//   try{
//      const requestOptions = {
//     method: "GET",
//     redirect: "follow"
//   };
  
//   const response =  fetch(`${import.meta.env.VITE_BASE_URL}`)
//     .then((res) => res.json())
//     // console.log(response)
//     const discountValue = await response;
//     console.log("discountValue",discountValue);
//     return discountValue;

//   }catch(error){
//     console.log(error);
//   }
// }
