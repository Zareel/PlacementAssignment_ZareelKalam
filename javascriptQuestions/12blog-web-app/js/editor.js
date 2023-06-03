// const title = document.querySelector("#title");
// const article = document.querySelector("#article");
//banner
let imageInput = document.querySelector("#banner-upload");

var uploadedImage = "";

// const publishBtn = document.querySelector("#publish");
// const uploadInput = document.querySelector("#image-upload");

imageInput.addEventListener("change", () => {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploadedImage = reader.result;
    document.querySelector(
      "#banner"
    ).style.backgroudImage = `url(${uploadedImage})`;
  });
  reader.readAsDataURL(this.files[0]);
});
