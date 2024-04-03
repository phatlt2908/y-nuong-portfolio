import axios from "@/configs/axios";

class adminApi {
  getCategoryList() {
    return axios.get("/admin/category-list");
  }

  getCategoryInfo(categoryCode) {
    return axios.get("/admin/category-info", {
      params: { categoryCode: categoryCode },
    });
  }

  saveCategoryInfo(category) {
    return axios.post("/admin/save-category", category);
  }
}

export default new adminApi();
