// ===== DESTINATIONS DATA AND FUNCTIONS =====

// Nepal Destinations Database
const nepalDestinations = [
  {
    id: 1,
    name: "Everest Base Camp Trek",
    location: "Khumbu Region",
    image: "/placeholder.svg?height=300&width=400&text=Everest+Base+Camp",
    rating: 4.9,
    price: "30000-40000",
    duration: "12-16 days",
    type: ["Adventure", "Trekking"],
    budget: "High",
    season: ["Autumn", "Winter"],
    activities: ["Trekking", "Adventure"],
    description:
      "The ultimate trekking adventure to the base of the world's highest peak. Experience breathtaking mountain views, Sherpa culture, and the challenge of high-altitude trekking.",
    highlights: ["Sherpa Culture", "Stunning Mountain Views", "Namche Bazaar", "Tengboche Monastery"],
  },
  {
    id: 2,
    name: "Pokhara Lake District",
    location: "Gandaki Province",
    image: "/placeholder.svg?height=300&width=400&text=Pokhara+Lake",
    rating: 4.7,
    price: "15000-30000",
    duration: "3-7 days",
    type: ["Relaxation", "Adventure"],
    budget: "Medium",
    season: ["Spring", "Summer",],
    activities: ["Boating", "Paragliding", "Photography", "Hiking"],
    description:
      "Serene lakes surrounded by the majestic Annapurna range. Perfect for relaxation and adventure activities with stunning mountain reflections.",
    highlights: ["Phewa Lake", "Paragliding", "World Peace Pagoda", "Sarangkot Sunrise"],
  },
  {
    id: 3,
    name: "Chitwan National Park",
    location: "Chitwan District",
    image: "/placeholder.svg?height=300&width=400&text=Chitwan+Safari",
    rating: 4.6,
    price: "15000-25000",
    duration: "2-4 days",
    type: ["Wildlife","Safari"],
    budget: "Medium",
    season: ["Summer", "Spring"],
    activities: ["Safari", "Wildlife Watching", "Cultural Experience"],
    description:
      "UNESCO World Heritage site famous for rhinos and tigers. Experience incredible wildlife and learn about Tharu culture.",
    highlights: ["One-horned Rhino", "Bengal Tigers", "Elephant Safari", "Tharu Culture"],
  },
  {
    id: 4,
    name: "Annapurna Circuit",
    location: "Annapurna Region",
    image: "/placeholder.svg?height=300&width=400&text=Annapurna+Circuit",
    rating: 4.8,
    price: "30000-350000",
    duration: "15-20 days",
    type: ["Adventure", "Trekking"],
    budget: "High",
    season: ["Autumn", "Winter"],
    activities: ["Trekking", "Cultural Experience", "Adventure"],
    description:
      "Classic trek through diverse landscapes and cultures. Experience the complete range of Nepal's geography and ethnic diversity.",
    highlights: ["Thorong La Pass", "Muktinath Temple", "Hot Springs", "Diverse Landscapes"],
  },
  {
    id: 5,
    name: "Kathmandu Valley",
    location: "Kathmandu",
    image: "/placeholder.svg?height=300&width=400&text=Kathmandu+Durbar",
    rating: 4.5,
    price: "15000-16000",
    duration: "2-5 days",
    type: ["Cultural", "Heritage"],
    budget: "Low",
    season: ["Summer", "Spring"],
    activities: ["Cultural Experience", "Photography"],
    description:
      "Rich cultural heritage with ancient temples and palaces. Explore the heart of Nepal's history and spirituality.",
    highlights: ["Durbar Squares", "Swayambhunath", "Boudhanath", "Pashupatinath"],
  },
  {
    id: 6,
    name: "Bandipur Hill Station",
    location: "Tanahu District",
    image: "/placeholder.svg?height=300&width=400&text=Bandipur+Village",
    rating: 4.4,
    price: "10000-12000",
    duration: "2-3 days",
    type: ["Cultural", "Relaxation"],
    budget: "Low",
    season: ["Spring", "Summer", "Autumn"],
    activities: [ "Cultural Experience", "Photography"],
    description:
      "Preserved medieval town with stunning mountain views. Experience traditional Newari architecture and culture.",
    highlights: ["Newari Architecture", "Mountain Views", "Siddha Cave", "Traditional Culture"],
  },
  {
    id: 7,
    name: "Lumbini - Birthplace of Buddha",
    location: "Lumbini Province",
    image: "/placeholder.svg?height=300&width=400&text=Lumbini+Temple",
    rating: 4.3,
    price: "Rs 12000",
    duration: "1-2 days",
    type: ["Cultural", "Spiritual"],
    budget: "Low",
    season: ["Autumn", "Winter"],
    activities: ["Cultural Experience", "Photography"],
    description:
      "Sacred birthplace of Lord Buddha and UNESCO World Heritage site. A pilgrimage destination for Buddhists worldwide.",
    highlights: ["Maya Devi Temple", "Sacred Garden", "Monasteries", "Peace Pagoda"],
  },
  {
    id: 8,
    name: "Gokyo Lakes Trek",
    location: "Khumbu Region",
    image: "/placeholder.svg?height=300&width=400&text=Gokyo+Lakes",
    rating: 4.7,
    price: "Rs 35000+",
    duration: "12-15 days",
    type: ["Adventure", "Trekking"],
    budget: "High",
    season: ["Autumn", "Winter"],
    activities: ["Trekking", "Adventure"],
    description:
      "Alternative to Everest Base Camp with stunning turquoise lakes and panoramic mountain views from Gokyo Ri.",
    highlights: ["Turquoise Lakes", "Gokyo Ri Summit", "Cho Oyu Views", "Less Crowded"],
  },
]


// Function to find destination by ID
function getDestinationById(id) {
  // console.log("Finding destination with ID:", id);
  return nepalDestinations.find(dest => dest.id === parseInt(id));
}

// Function to generate star HTML
function generateStarsHtml(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const maxStars = 5;
  let starsHtml = "";

  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="fas fa-star"></i>';
  }

  if (halfStar) {
    starsHtml += '<i class="fas fa-star-half-alt"></i>';
  }

  for (let i = fullStars + halfStar; i < maxStars; i++) {
    starsHtml += '<i class="far fa-star"></i>';
  }

  return starsHtml;
}

// On page load
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const destinationId = urlParams.get("id");

  if (!destinationId) {
    alert("No destination ID provided in URL.");
    window.location.href = "/dashboard";
    return;
  }

  const destination = getDestinationById(destinationId);
  if (!destination) {
    alert("Destination not found!");
    window.location.href = "/dashboard";
    return;
  }
  console.log("Destination ID from URL:", destination);

   console.log("Destination data:", destination);
 
displayRecommendations(nepalDestinations || []);
  // Fill content dynamically
  document.getElementById("destinationName").textContent = destination.name;
  document.getElementById("destinationLocation").querySelector("span").textContent = destination.location;
  document.getElementById("destinationImage").src = destination.image;
  document.getElementById("destinationRating").textContent = destination.rating;
  document.getElementById("destinationStars").innerHTML = generateStarsHtml(destination.rating);
  document.getElementById("destinationDescription").textContent = destination.description;

  const highlightsList = document.getElementById("destinationHighlights");
  highlightsList.innerHTML = destination.highlights
    .map(highlight => `<li>${highlight}</li>`)
    .join("");

  const activitiesContainer = document.getElementById("destinationActivities");
  activitiesContainer.innerHTML = destination.activities
    .map(activity => `<span class="tag">${activity}</span>`)
    .join("");

    console.log("Destination price:", destination.price);

  document.getElementById("destinationPrice").textContent = destination.price;
  document.getElementById("destinationDuration").textContent = destination.duration;
  document.getElementById("destinationBudget").textContent = destination.budget;
  document.getElementById("destinationSeason").textContent = destination.season.join(", ");

  const typesContainer = document.getElementById("destinationTypes");
  typesContainer.innerHTML = destination.type
    .map(type => `<span class="tag">${type}</span>`)
    .join("");

    
});

function displayRecommendations(recommendations) {
  console.log("Displaying recommendations:", recommendations);
  const recommendationsSection = document.getElementById("recommendationsSectionOne")
  const recommendationsGrid = document.getElementById("recommendationsGridOne")

  if (!recommendationsSection || !recommendationsGrid) return

  if (recommendations.length === 0) {
    recommendationsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
        <i class="fas fa-search" style="font-size: 3rem; color: #9ca3af; margin-bottom: 20px;"></i>
        <h3 style="color: #6b7280; margin-bottom: 10px;">No recommendations found</h3>
        <p style="color: #9ca3af;">Try adjusting your preferences to get better matches.</p>
      </div>
    `
  } else {
    const recommendationsHtml = recommendations.map((destination) => createDestinationCard(destination, true)).join("")

    recommendationsGrid.innerHTML = recommendationsHtml
    animateCards(recommendationsGrid.children)
  }

  recommendationsSection.style.display = "block"
  recommendationsSection.scrollIntoView({ behavior: "smooth", block: "start" })
}