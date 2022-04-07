export const getSliderData = (data, sliderValue) => {
  return data.filter((item) => item.price <= sliderValue);
};