function handleMobileClick() {
  let categories = document.getElementById('categories');
  console.log(categories);
  categories.classList.toggle("displayNone");
  return categories;
}

export default handleMobileClick;
