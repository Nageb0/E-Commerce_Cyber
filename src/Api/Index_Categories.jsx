import axios from "axios";
import { domainApi } from "../store/Store";

export const Index_Categories = async () => {
    let final;
  await axios
    .get(domainApi + "/api/catogries", {
      params: {
        populate : "*",
        filters: {
          catogry: {
            $null: true,
          },
        },
      },
      populate : "subcatogries"
    })
    .then((res) => final = res.data.data);
  return final;
};
