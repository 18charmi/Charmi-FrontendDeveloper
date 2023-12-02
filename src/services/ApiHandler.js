import axiosClient from "./Api";

// get company details
function getCompanyInfo() {
  return axiosClient.get("/detail.php");
}

export { getCompanyInfo };
