import axios from "axios";
import { domainApi } from "../store/Store";

export const Index_Product = async (page, pageSize, filtersIds = []) => {
  let final = {
    total: 0,
    data: [],
  };
  await axios
    .get(domainApi + "/api/products", {
      params: {
        populate: "*",
        pagination: {
          page: page,
          pageSize: pageSize,
        },
        filters: {
          categories: {
            documentId: {
              $in: filtersIds,
            },
          },
        },
      },
    })
    .then((res) => {
      final = {
        total: res.data.meta.pagination.total,
        data: res.data.data,
      };
    });
  return final;
};
