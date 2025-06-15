
function addRecommendation() {
  const recommendation = document.getElementById("new_recommendation");
  if (recommendation.value.trim() !== "") {
    const element = document.createElement("div");
    element.className = "project";
    element.innerHTML = `<p>\"${recommendation.value.trim()}\"</p>`;
    document.getElementById("all_recommendations").appendChild(element);
    recommendation.value = "";
    showPopup(true);
  }
}
function showPopup(bool) {
  const popup = document.getElementById("popup");
  if (bool) {
    popup.classList.remove("hidden");
    popup.classList.add("visible");
  } else {
    popup.classList.remove("visible");
    popup.classList.add("hidden");
  }
}
