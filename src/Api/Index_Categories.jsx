import axios from "axios";
import { domainApi } from "../store/Store";

export const Index_Categories = async () => {
    let final;
  await axios
    .get(domainApi + "/api/categories", {
      params: {
        populate : "*",
        filters: {
          category: {
            $null: true,
          },
        },
      },
      populate : "subcategories"
    })
    .then((res) => final = res.data.data);
  return final;

};

