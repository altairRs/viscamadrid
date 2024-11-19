
// Sample data for trophies by year
const trophiesByYear = {
    2024: [
        { count: 15, title: "European Cups" },
        { count: 8, title: "FIFA Club World Cups" },
        { count: 36, title: "National Leagues" }
    ],
    2020: [
        { count: 14, title: "European Cups" },
        { count: 6, title: "FIFA Club World Cups" },
        { count: 34, title: "National Leagues" }
    ],
    2015: [
        { count: 10, title: "European Cups" },
        { count: 4, title: "FIFA Club World Cups" },
        { count: 30, title: "National Leagues" }
    ]
    // Add more years and data here
};

// Function to update achievements based on the selected year
function updateYearAndAchievements(year) {
    const selectedYearElement = document.getElementById("selected-year");
    const achievementsList = document.getElementById("achievements");

    // Update the displayed year
    selectedYearElement.textContent = year;

    // Update the achievements
    const achievements = trophiesByYear[year] || [];
    achievementsList.innerHTML = achievements
        .map(
            (trophy) =>
                `<li class="d-flex align-items-center mb-2">
                    <span class="icon-trophy text-primary me-2"></span>
                    <strong class="me-2">${trophy.count}</strong> ${trophy.title}
                </li>`
        )
        .join("");
}

// Initialize with the default year
document.addEventListener("DOMContentLoaded", () => {
    updateYearAndAchievements(2024);
});

