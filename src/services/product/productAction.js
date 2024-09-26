import { BASE_URL } from "../../api/base_url";

export async function getSingleproducts(slug) {
  try {
    // Method Fetch
    const response = fetch(`${BASE_URL}products/${slug}`).then((res) =>
      res.json()
    );
    const data = await response;
    return data.payload;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchNewProduct() {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = fetch(
      `${BASE_URL}products?category=cosmetic&page=1&size=100`,
      requestOptions
    ).then((response) => response.json());
    const N_product = await response;
    console.log("New",N_product.payload.list);
    return N_product?.payload?.list;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchNew2Product() {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = fetch(
      `${BASE_URL}products?page=2&size=200`,
      requestOptions
    ).then((response) => response.json());
    const N_product = await response;
    console.log("New",N_product.payload.list);
    return N_product?.payload?.list;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchNew3Product() {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = fetch(
      `${BASE_URL}products?page=3&size=100`,
      requestOptions
    ).then((response) => response.json());
    const N_product = await response;
    console.log("New",N_product.payload.list);
    return N_product?.payload?.list;
  } catch (error) {
    console.log(error);
  }
}
