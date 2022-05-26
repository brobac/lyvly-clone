import { State } from "../../core/State";

export const productState = State({
  productList: [
    {
      id: 1,
      src: "",
      name: "",
      normalPrice: 10000,
      discountPrice: 5000,
      isPutInCart: false,
    },
  ],
});
