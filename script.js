async function fetchLeaderboard() {
  try {
    const response = await fetch("/leaderboard");
    const data = await response.json();

    const tbody = document.querySelector("#leaderboard tbody");
    tbody.innerHTML = "";

    data.forEach((team) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${team.name}</td><td>${team.score}</td>`;
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
  }
}

// Refresh leaderboard every 5 seconds
setInterval(fetchLeaderboard, 5000);
fetchLeaderboard();
