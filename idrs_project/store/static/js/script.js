// ===== NEPAL TRAVEL WEBSITE JAVASCRIPT =====

// Enhanced Destinations Database with Nepal Images
const destinations = [
  {
    id: 1,
    name: "Everest Base Camp Trek",
    location: "Khumbu Region",
    image: "img/Staying-at-Everest-Base-Camp js.jpg",
    rating: 4.9,
    price: "40000",
    duration: "14 days",
    type: ["Adventure", "Trekking"],
    budget: "High",
    season: [ "Autumn",],
    activities: ["Trekking", ],
    description: "Enjoy an exciting journey across the Khumbu region's trails with the stunning vistas of mountain peaks and the world's highest peak, Mt. Everest.",
    highlights: ["Sherpa Culture", "Stunning Mountain Views", "Namche Bazaar", "Tengboche Monastery"],
  
  },
  {
    id: 2,
    name: "Pokhara Lake District",
    location: "Gandaki Province",
    image: "img/pokhara lake.jpg",
    rating: 4.7,
    price: "15000-20000",
    duration: "3-7 days",
    type: ["Relaxation"],
    budget: "low",
    season: ["winter", "Spring"],
    activities: ["Boating", "Paragliding",  "Hiking"],
    description: " Pokhara is Nepal's largest city in terms of size. A pristine mountain paradise, Pokhara is the starting point for treks in the Annapurna Circuit.",
    highlights: ["Phewa Lake", "Paragliding", "World Peace Pagoda", "Sarangkot Sunrise","Tilicho Lake"],
     accommodations: [
      {
        id: 201,
        name: "Fish Tail Lodge",
        type: "lodge",
        image: "img/fishtail-lodge.jpg",
        price: "$110‑130/night",
        description: "Iconic lakeside lodge on a peninsula, serene environment and scenic Himalaya views.",
        rating: 4.6,
         amenities: ["Free WiFi", "Garden Restaurant", "Travel Desk", "Laundry Service"]
      },
      {
        id: 202,
        name: "Temple Bell Boutique Hotel & Spa",
        type: "hotel",
        image: "img/temple-bell.jpg",
        price: "$150‑200/night",
        description: "Luxury boutique spa hotel with top guest rating and lakeside location.",
        rating: 5.0,
         amenities: ["Free WiFi", "Garden Restaurant", "Travel Desk", "Laundry Service"]
      }
    ]
  },
  {
    id: 3,
    name: "Chitwan National Park",
    location: "Chitwan District",
    image: "img/chitwan-national-park.jpgnB3.jpg",
    rating: 4.6,
    price: "20000-25000",
    duration: "2-4 days",
    type: ["Wildlife", "Relaxation"],
    budget: "low",
    season: ["winter"],
    activities: ["Safari", "Wildlife Watching",],
    description: "The park is situated in south central Nepal, covering 952.63 sq. km.. in the subtropical lowlands of the inner Terai. The area comprising the Tikauli forest-from Rapti river to the foothills of the Mahabharat-extending over an area of 175 sq.km. was declared Mahendra Mriga Kunj (Mahendra Deer Park) by the late King Mahendra in 1959.",
    highlights: ["One-horned Rhino", "Bengal Tigers", "Elephant Safari", "Tharu Culture"],
    accommodations: [
      {
        id: 301,
        name: "Jungle Villa Resort",
        type: "resort",
        image: "img/jungle-villa.jpg",
        price: "$150/night",
        description: "Excellent resort near Chitwan NP with outdoor pool and garden access.",
        rating: 8.6,  // Booking score,
         amenities: ["Free WiFi", "Garden Restaurant", "Travel Desk", "Laundry Service"]
      },
      {
        id: 302,
        name: "Shanta Ghar Guesthouse",
        type: "guesthouse",
        image: "img/shantaghar.jpg",
        price: "$32/night",
        description: "Rustic guesthouse with hot‑spring bath and garden views in Sauraha.",
        rating: 9.2,
         amenities: ["Free WiFi", "Garden Restaurant", "Travel Desk", "Laundry Service"]
      }
    ]
  },
  {
    id: 4,
    name: "Annapurna Circuit",
    location: "Annapurna Region",
    image: "img/Annapurna circuit.avif",
    rating: 4.8,
    price: "40000",
    duration: "12days",
    type: ["Adventure", "Trekking"],
    budget: "High",
    season: ["Antum",],
    activities: ["Trekking",],
    description: "The Annapurna Circuit Trek is one of the most amazing adventures you can do in Nepal. It’s super popular because it has everything — stunning mountains, friendly villages, changing landscapes, and local culture all in one trip.",
    highlights: ["Thorong La Pass", "Muktinath Temple", "Hot Springs", "Diverse Landscapes","Marpha village"],
    accommodations: [
      {
        id: 401,
        name: "Manang Teahouses (various)",
        type: "teahouse",
        image: "img/manang-lodge.jpg",
        price: "Basic dorm to private rooms (book in advance)",
        description: "Local trekking teahouses in Manang & Thorong with cultural immersion and shared meals.",
        rating: 4,
         amenities: ["Free WiFi", "Garden Restaurant", "Travel Desk", "Laundry Service"]
      },
      {
        id: 402,
        name: "Thorong Phedi Teahouse",
        type: "teahouse",
        image: "img/thorong-phedi.jpg",
        price: "Simple room with food included",
        description: "High‑altitude teahouse lodging during Annapurna Circuit trek.",
        rating: 4.5,
         amenities: ["Free WiFi", "Garden Restaurant", "Travel Desk", "Laundry Service"]
      }
    ]
  },
  {
    id: 5,
    name: "Kathmandu Valley",
    location: "Kathmandu",
    image: "img/pashupati.jpeg",
    rating: 4.5,
    price: "15000-18000",
    duration: "2-5 days",
    type: ["Cultural", "Heritage"],
    budget: "Low",
    season: ["Spring", "Summer"],
    activities: ["Cultural Experience",],
    description: "Rich cultural heritage with ancient temples and palaces.",
    highlights: ["Durbar Squares", "Swayambhunath", "Boudhanath", "Pashupatinath"],
      accommodations: [
            {
                id: 101,
                name: "Yak & Yeti Hotel",
                type: "hotel",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                price: "$120-$250/night",
                description: "A luxury heritage hotel blending modern amenities with traditional Nepalese architecture. Located in the heart of Kathmandu, it offers elegant rooms, fine dining, and excellent service.",
                rating: 4.5,
                reviews: [
                    {
                        id: 1011,
                        author: "Sarah Johnson",
                        date: "2023-05-15",
                        rating: 5,
                        comment: "Absolutely stunning hotel with excellent service. The heritage wing is particularly beautiful with its traditional architecture."
                    },
                    {
                        id: 1012,
                        author: "Michael Chen",
                        date: "2023-04-22",
                        rating: 4,
                        comment: "Great location and comfortable rooms. The breakfast buffet was extensive with both local and international options."
                    }
                ],
                location: "Thamel, Kathmandu",
                amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant", "Airport Shuttle"]
            },
            {
                id: 102,
                name: "Kathmandu Guest House",
                type: "hotel",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                price: "$40-$80/night",
                description: "A charming hotel in the heart of Thamel with beautiful gardens and cultural ambiance. Established in 1967, it's one of Kathmandu's first boutique hotels.",
                rating: 4.2,
                reviews: [
                    {
                        id: 1021,
                        author: "Emma Wilson",
                        date: "2023-06-10",
                        rating: 4,
                        comment: "Lovely garden setting in the middle of busy Thamel. Rooms are clean and comfortable."
                    },
                    {
                        id: 1022,
                        author: "David Brown",
                        date: "2023-03-18",
                        rating: 5,
                        comment: "Great value for money. The garden restaurant is a peaceful oasis. Highly recommended!"
                    }
                ],
                location: "Thamel, Kathmandu",
                amenities: ["Free WiFi", "Garden Restaurant", "Travel Desk", "Laundry Service"]
            }
        ]
  },
  {
    id: 6,
    name: "Bandipur Hill Station",
    location: "Tanahu District",
    image: "img/bandipur hill station.jpeg",
    rating: 4.4,
    price: "15000-17000",
    duration: "2-3 days",
    type: ["Cultural", "Relaxation"],
    budget: "Low",
    season: ["winter",],
    activities: ["Hiking", "Adventure"],
    description: "Bandipur is a charming and historic hill station located in the central part of Nepal.",
    highlights: ["Newari Architecture", "Mountain Views", "Siddha Cave", "Traditional Culture"],
      accommodations: [
      {
        id: 601,
        name: "Shristi Hotel & Lodge",
        type: "guesthouse",
        image: "img/shristi-bandipur.jpg",
        price: "≈ US$13‑17/night",
        description: "Mountain‑view guesthouse with terrace and onsite restaurant.",
        rating: "Very Good",
         amenities: ["Free WiFi", "Garden Restaurant", "Travel Desk", "Laundry Service"]
      },
      {
        id: 602,
        name: "Himchuli Guest House",
        type: "guesthouse",
        image: "img/himchuli-bandipur.jpg",
        price: "≈ US$17/night",
        description: "Well‑reviewed family‑run lodge with friendly hosts and garden views.",
        rating: "Very Good",
         amenities: ["Free WiFi", "Garden Restaurant", "Travel Desk", "Laundry Service"]
      }
    ]
  },
  {
    id: 7,
    name: "Lumbini - Birthplace of Buddha",
    location: "Lumbini Province",
    image: "img/lumbini.jpg",
    rating: 4.3,
    price: "15000-16000",
    duration: "1-2 days",
    type: ["Cultural", "Spiritual"],
    budget: "Low",
    season: ["winter" ],
    activities: [ "Cultural Experience",],
    description: "Sacred birthplace of Lord Buddha and UNESCO World Heritage site.",
    highlights: ["Maya Devi Temple", "Sacred Garden", "Monasteries", "Peace Pagoda"],
       accommodations: [
      {
        id: 701,
        name: "Hotel Ratnasambhava",
        type: "hotel",
        image: "img/ratnasambhava.jpg",
        price: "≈ US$98/night",
        description: "Very good hotel garden and restaurant walking distance from Maya Devi Temple.",
        rating: 8.0,
         amenities: ["Free WiFi", "Garden Restaurant", "Travel Desk", "Laundry Service"]
      },
      {
        id: 702,
        name: "Lumbini Garden Lodge",
        type: "guesthouse",
        image: "img/lumbini-garden-lodge.jpg",
        price: "≈ US$7.50/night",
        description: "Budget guest house near entrance with garden and free WiFi.",
        rating: 7.9,
         amenities: ["Free WiFi", "Garden Restaurant", "Travel Desk", "Laundry Service"]
      }
    ]
  },
  {
    id: 8,
    name: "Gokyo Lakes Trek",
    location: "Khumbu Region",
    image: "img/Gokyo-village_11zon.jpg",
    rating: 4.7,
    price: "30000-40000",
    duration: "12-15 days",
    type: ["Adventure", "Trekking"],
    budget: "High",
    season: ["Autumn",],
    activities: ["Trekking", "Adventure",],
    description: "Alternative to Everest Base Camp with stunning turquoise lakes.",
    highlights: ["Turquoise Lakes", "Gokyo Ri Summit", "Cho Oyu Views", "Less Crowded"],
       accommodations: [
      {
        id: 801,
        name: "Teahouses at Gokyo Village",
        type: "teahouse",
        image: "img/gokyo-teahouse.jpg",
        price: "Dorm/private rooms along trail",
        description: "Local teahouses at each Gokyo settlement for trekkers on route.",
        rating: null,
         amenities: ["Free WiFi", "Garden Restaurant", "Travel Desk", "Laundry Service"]
      },
      {
        id: 802,
        name: "Chola Base Camp Lodge",
        type: "teahouse",
        image: "img/chola-lodge.jpg",
        price: "Basic shared or single rooms",
        description: "High‑elevation lodge used while crossing Cho La pass on Annapurna circuit alternative.",
        rating: null,
         amenities: ["Free WiFi", "Garden Restaurant", "Travel Desk", "Laundry Service"]
      }
    ]
  },
]


// ===== PAGE INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  // Match Django-style routes
  if (path === "/" || path === "/index/") {
    initializeHomePage();
  } else if (path === "/login/") {
    initializeLoginPage();
  } else if (path === "/register/") {
    initializeRegisterPage();
  } else if (path === "/dashboard/") {
    initializeDashboard();
  } else if(path === "/dashboard/destinations-detail") {
   loadDestinationDetail()
  }
});
function getDestinationById(id) {
  // console.log("Finding destination with ID:", id);
   console.log("Loading destination detail page")


  return destinations.find(dest => dest.id === parseInt(id));
}
function loadDestinationDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const destinationId = urlParams.get("id");


  if (!destinationId) {
    alert("No destination ID provided in URL.");
    window.location.href = "/dashboard";
    return;
  }

  const destination = getDestinationById(destinationId);
   displayRecommendationsOne(destination)

  if (!destination) {
    alert("Destination not found!");
    window.location.href = "/dashboard";
    return;
  }

  // Fill content dynamically
  document.getElementById("destinationName").textContent = destination.name;
  document.getElementById("destinationLocation").querySelector("span").textContent = destination.location;
  document.getElementById("destinationImage").src = '/static/'+ destination.image;
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

  document.getElementById("destinationPrice").textContent = destination.price;
  document.getElementById("destinationDuration").textContent = destination.duration;
  document.getElementById("destinationBudget").textContent = destination.budget;
  document.getElementById("destinationSeason").textContent = destination.season.join(", ");

  const typesContainer = document.getElementById("destinationTypes");
  typesContainer.innerHTML = destination.type
    .map(type => `<span class="tag">${type}</span>`)
    .join("");
}

// ===== HOMEPAGE FUNCTIONS =====
function initializeHomePage() {
  // Initialize hero slider with more Nepal images
  initializeHeroSlider()

  // Initialize scroll animations
  initializeScrollAnimations()

  // Initialize gallery interactions
  initializeGallery()
}

function initializeHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide")
  let currentSlide = 0

  function nextSlide() {
    slides[currentSlide].classList.remove("active")
    currentSlide = (currentSlide + 1) % slides.length
    slides[currentSlide].classList.add("active")
  }

  // Change slide every 5 seconds to show more Nepal images
  setInterval(nextSlide, 5000)
}

function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe feature cards and gallery items
  document.querySelectorAll(".feature-card, .gallery-item").forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = `all 0.6s ease ${index * 0.1}s`
    observer.observe(card)
  })
}

function initializeGallery() {
  const galleryItems = document.querySelectorAll(".gallery-item")

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img")
      const overlay = item.querySelector(".gallery-overlay")

      // Add click animation
      item.style.transform = "scale(0.95)"
      setTimeout(() => {
        item.style.transform = "scale(1)"
      }, 150)
    })
  })
}

// ===== AUTHENTICATION FUNCTIONS =====
function initializeLoginPage() {
  const loginForm = document.getElementById("loginForm")
  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin)
  }
}

function getCSRFToken() {
  const name = "csrftoken";
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  return null;
}
function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

fetch("/api/login/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-CSRFToken": getCSRFToken(),
  },
  body: JSON.stringify({ email, password }),
})
.then(response => {
  console.log("Response status:", response.status);
  return response.text(); // get text first
})
.then(text => {
  try {
    const data = JSON.parse(text);
    if (data.status === "success") {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/dashboard/";
    } else {
      showNotification(data.message, "error");
    }
  } catch (e) {
    console.error("Could not parse JSON:", text);
    showNotification("An error occurred while logging in.", "error");
  }
})
.catch(error => {
  console.error("Login error:", error);
  showNotification("Login failed, please try again.", "error");
});

}


function initializeRegisterPage() {
  const registerForm = document.getElementById("registerForm")
  if (registerForm) {
    registerForm.addEventListener("submit", handleRegister)
  }
}



// function getCSRFToken() {
//   return document.querySelector('[name=csrfmiddlewaretoken]').value;
// }

async function handleRegister(e) {
  e.preventDefault();
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  console.log("Registering user:", fullName, email, password, confirmPassword);
  // Validation
  if (!fullName || !email || !password || !confirmPassword) {
    showNotification("Please fill in all fields", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showNotification("Please enter a valid email address", "error");
    return;
  }

  if (password.length < 6) {
    showNotification("Password must be at least 6 characters long", "error");
    return;
  }

  if (password !== confirmPassword) {
    showNotification("Passwords do not match", "error");
    return;
  }

  try {
    const response = await fetch("/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCSRFToken(),
      },
      body: JSON.stringify({
        full_name: fullName,
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      showNotification(errorData.error || "Registration failed", "error");
      return;
    }

    // On success
    showNotification("Account created successfully! Redirecting...", "success");
    setTimeout(() => {
      window.location.href = "/login/";
    }, 1500);

  } catch (error) {
    console.error("Error during registration:", error);
    showNotification("An unexpected error occurred.", "error");
  }
}


// ===== DASHBOARD FUNCTIONS =====
function initializeDashboard() {
  // Check authentication
  if (!localStorage.getItem("isLoggedIn")) {
    window.location.href = "login.html"
    return
  }

  // Set welcome message
  const userName = localStorage.getItem("userName") || localStorage.getItem("userEmail")
  if (userName) {
    document.getElementById("welcomeUser").textContent = `Welcome, ${userName.split("@")[0]}!`
  }

  // Load destinations
  loadDestinations()

  // Setup search
  setupSearch()

  // Setup recommendation form
  setupRecommendationForm()
}

function loadDestinations() {
  const destinationsGrid = document.getElementById("destinationsGrid")
  if (!destinationsGrid) return

  const destinationsHtml = destinations.map((destination) => createDestinationCard(destination, false)).join("")

  destinationsGrid.innerHTML = destinationsHtml
  animateCards(destinationsGrid.children)
}

function setupSearch() {
  const searchInput = document.getElementById("searchInput")
  if (!searchInput) return

  let searchTimeout

  searchInput.addEventListener("input", function () {
    clearTimeout(searchTimeout)

    searchTimeout = setTimeout(() => {
      const query = this.value.trim()
      const filteredDestinations = filterDestinations(destinations, query)

      const destinationsGrid = document.getElementById("destinationsGrid")
      const destinationsHtml = filteredDestinations
        .map((destination) => createDestinationCard(destination, false))
        .join("")

      destinationsGrid.innerHTML = destinationsHtml
      animateCards(destinationsGrid.children)
    }, 300)
  })
}

function setupRecommendationForm() {
  const form = document.getElementById("recommendationForm")
  if (!form) return

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const preferences = {
      travelType: formData.get("travelType"),
      budget: formData.get("budget"),
      duration: formData.get("duration"),
      travelingWith: formData.get("travelingWith"),
      season: formData.get("season"),
      activities: formData.getAll("activities"),
    }

    generateRecommendations(preferences)
  })
}

function generateRecommendations(preferences) {
  // Calculate scores for destinations
  const scoredDestinations = destinations.map((destination) => ({
    ...destination,
    score: calculateRecommendationScore(destination, preferences),
  }))

  // Filter and sort recommendations
  const recommendations = scoredDestinations
    .filter((destination) => destination.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      return b.rating - a.rating
    })
    .slice(0, 6)

  displayRecommendations(recommendations)
  showNotification("Recommendations generated based on your preferences!", "success")
}

function displayRecommendations(recommendations) {
  const recommendationsSection = document.getElementById("recommendationsSection")
  const recommendationsGrid = document.getElementById("recommendationsGrid")

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

function displayRecommendationsOne(recommendations) {
  if(!recommendations) return;
  const currentDestination =  recommendations;
  const recommended = currentDestination.accommodations || [];

  
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
    const recommendationsHtml = recommended.map((destination) => createDestinationCardOne(destination, true)).join("")

    recommendationsGrid.innerHTML = recommendationsHtml
    animateCards(recommendationsGrid.children)
  }

  recommendationsSection.style.display = "block"
  recommendationsSection.scrollIntoView({ behavior: "smooth", block: "start" })
}

function createDestinationCardOne(destination, isRecommended = false) {
  const starsHtml = generateStarsHtml(destination.rating)
  const tagsHtml = destination.amenities.map((type) => `<span class="tag">${type}</span>`).join("")

  return `
    <div class="destination-card ${isRecommended ? "recommended" : ""}">
      <div class="destination-image">
        <img src="/static/${destination.image}" alt="${destination.name}">
      </div>
      <div class="destination-content">
        <div class="destination-header-one">
          <h3 class="destination-title-one">${destination.name}</h3>
          <div class="destination-rating" style="margin-top:18px;margin-bottom:10px;">
            ${starsHtml}
            <span>${destination.rating}</span>
          </div>
        </div>
        <p class="destination-location">
          <i class="fas fa-map-marker-alt"></i>
          ${destination.location}
        </p>
       
        <div class="destination-info">
          <span><i class="fas fa-NPR-sign"></i>NPR ${destination.price}</span>
       
        </div>
        <div class="destination-tags">
          ${tagsHtml}
        </div>
       <button class="destination-button" onclick="goToDestinationDetail(${destination.id})">
  ${isRecommended ? "View Recommended" : "Explore Now"}
</button>
      </div>
    </div>
  `
}

// ===== UTILITY FUNCTIONS =====
function createDestinationCard(destination, isRecommended = false) {
  const starsHtml = generateStarsHtml(destination.rating)
  const tagsHtml = destination.type.map((type) => `<span class="tag">${type}</span>`).join("")

  return `
    <div class="destination-card ${isRecommended ? "recommended" : ""}">
      <div class="destination-image">
        <img src="/static/${destination.image}" alt="${destination.name}">
      </div>
      <div class="destination-content">
        <div class="destination-header">
          <h3 class="destination-title-main">${destination.name}</h3>
          <div class="destination-rating">
            ${starsHtml}
            <span>${destination.rating}</span>
          </div>
        </div>
        <p class="destination-location">
          <i class="fas fa-map-marker-alt"></i>
          ${destination.location}
        </p>
        <p class="destination-description">${destination.description}</p>
        <div class="destination-info">
          <span><i class="fas fa-NPR-sign"></i> ${destination.price}</span>
          <span><i class="fas fa-clock"></i> ${destination.duration}</span>
        </div>
        <div class="destination-tags">
          ${tagsHtml}
        </div>
       <button class="destination-button" onclick="goToDestinationDetail(${destination.id})">
  ${isRecommended ? "View Recommended" : "Explore Now"}
</button>
      </div>
    </div>
  `
}
function goToDestinationDetail(destinationId) {
  window.location.href = `/dashboard/destinations-detail?id=${destinationId}`;
}

function showDestinationDetail(destination) {
    resultsSection.classList.add('hidden');
    destinationDetail.classList.remove('hidden');
    
    detailContent.innerHTML = `
        <div class="detail-header">
            <img src="${destination.image}" alt="${destination.name}" class="detail-img">
            <h2 class="detail-title">${destination.name}</h2>
            <p class="detail-description">${destination.description}</p>
            
            <div class="detail-highlights">
                <h3>Highlights</h3>
                <ul>
                    ${destination.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            </div>
            
            <div class="accommodations">
                <h3>Recommended Accommodations</h3>
                <p>Based on your selected accommodation type: ${capitalizeFirstLetter(document.getElementById('accommodation').value)}</p>
                
                <div class="accommodation-grid">
                    ${destination.accommodations
                        .filter(acc => acc.type === document.getElementById('accommodation').value)
                        .map(acc => `
                            <div class="accommodation-card" onclick="showAccommodationDetail(${destination.id}, ${acc.id})">
                                <img src="${acc.image}" alt="${acc.name}" class="accommodation-img">
                                <div class="accommodation-info">
                                    <h4>${acc.name}</h4>
                                    <p>${acc.description.substring(0, 60)}...</p>
                                    <p class="price">${acc.price}</p>
                                    <p>Rating: ${acc.rating}</p>
                                </div>
                            </div>
                        `).join('')}
                </div>
            </div>
        </div>
    `;
}

function generateStarsHtml(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  let starsHtml = ""

  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="fas fa-star"></i>'
  }

  if (hasHalfStar) {
    starsHtml += '<i class="fas fa-star-half-alt"></i>'
  }

  const emptyStars = 5 - Math.ceil(rating)
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += '<i class="far fa-star"></i>'
  }

  return starsHtml
}

function filterDestinations(destinations, searchQuery) {
  if (!searchQuery) return destinations

  return destinations.filter(
    (destination) =>
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.activities.some((activity) => activity.toLowerCase().includes(searchQuery.toLowerCase())),
  )
}

function calculateRecommendationScore(destination, preferences) {
  let score = 0

  // Travel Type matching (3 points)
  if (
    preferences.travelType &&
    destination.type.some((type) => type.toLowerCase().includes(preferences.travelType.toLowerCase()))
  ) {
    score += 3
  }

  // Budget matching (2 points)
  if (preferences.budget && destination.budget.toLowerCase() === preferences.budget.toLowerCase()) {
    score += 2
  }

  // Season matching (2 points)
  if (preferences.season && destination.season.includes(preferences.season)) {
    score += 2
  }

  // Activities matching (1 point per match)
  if (preferences.activities && preferences.activities.length > 0) {
    const activityMatches = preferences.activities.filter((activity) =>
      destination.activities.some((destActivity) => destActivity.toLowerCase().includes(activity.toLowerCase())),
    ).length
    score += activityMatches
  }

  return score
}

function animateCards(cards) {
  Array.from(cards).forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = `all 0.6s ease ${index * 0.1}s`

    setTimeout(() => {
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    }, 50)
  })
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function showNotification(message, type) {
  // Remove existing notifications
  const existingNotification = document.querySelector(".notification")
  if (existingNotification) {
    existingNotification.remove()
  }

  // Create notification element
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.innerHTML = `
    <i class="fas fa-${type === "success" ? "check-circle" : "exclamation-circle"}"></i>
    <span>${message}</span>
    <button onclick="this.parentElement.remove()">
      <i class="fas fa-times"></i>
    </button>
  `

  // Style the notification
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 10px;
    animation: slideInRight 0.3s ease-out;
    ${type === "success" ? "background: #10b981;" : "background: #ef4444;"}
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  `

  // Style the close button
  const closeButton = notification.querySelector("button")
  closeButton.style.cssText = `
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 5px;
    margin-left: 10px;
  `

  document.body.appendChild(notification)

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = "slideOutRight 0.3s ease-out"
      setTimeout(() => {
        notification.remove()
      }, 300)
    }
  }, 5000)
}

// ===== PASSWORD TOGGLE FUNCTION =====
function togglePassword(inputId) {
  const input = document.getElementById(inputId)
  const button = input.nextElementSibling
  const icon = button.querySelector("i")

  if (input.type === "password") {
    input.type = "text"
    icon.classList.remove("fa-eye")
    icon.classList.add("fa-eye-slash")
  } else {
    input.type = "password"
    icon.classList.remove("fa-eye-slash")
    icon.classList.add("fa-eye")
  }
}

// ===== LOGOUT FUNCTION =====
function logout() {
  localStorage.removeItem("isLoggedIn")
  localStorage.removeItem("userEmail")
  localStorage.removeItem("userName")
  window.location.href = "/"
}
