import axios from "@/configs/axios";

class portfolioApi {
  getCategoryList() {
    return axios.get("/portfolio/category-list");
  }

  getCategoryInfo(categoryCode) {
    return axios.get("/portfolio/category-info", {
      params: { categoryCode: categoryCode },
    });
  }
}

export default new portfolioApi();
