document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active-menu');
        });
    }

    // Helper to render players
    const renderPlayers = (playersData) => {
        const grid = document.getElementById('profilesGrid');
        if (!grid) return;
        
        grid.innerHTML = '';
        if (playersData.length === 0) {
            grid.innerHTML = '<p style="text-align:center; grid-column:1/-1;">No players found.</p>';
            return;
        }

        playersData.forEach(player => {
            const card = document.createElement('div');
            card.className = 'player-card';
            card.innerHTML = `
                <div class="player-price">${player.price}</div>
                <img src="${player.photo}" alt="${player.name}" class="player-photo">
                <div class="player-info">
                    <div class="player-name">${player.name}</div>
                    <div class="player-team">${player.teamName}</div>
                    <div class="player-stats">
                        <div>Matches: <span class="stat-val">${player.matches}</span></div>
                        <div>Win Rate: <span class="stat-val">${player.winRate}</span></div>
                        <div>Wins: <span class="stat-val">${player.wins}</span></div>
                        <div>Losses: <span class="stat-val">${player.losses}</span></div>
                        <div>Draws: <span class="stat-val">${player.draws}</span></div>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    };

    // Helper to handle search and filter
    const handleFilter = () => {
        const searchInput = document.getElementById('searchInput');
        const teamFilter = document.getElementById('teamFilter');
        
        if (!searchInput || !teamFilter) return;

        const searchTerm = searchInput.value.toLowerCase();
        const selectedTeam = teamFilter.value;

        const filtered = players.filter(player => {
            const matchesSearch = player.name.toLowerCase().includes(searchTerm);
            const matchesTeam = selectedTeam === 'all' || player.teamId === selectedTeam;
            return matchesSearch && matchesTeam;
        });

        renderPlayers(filtered);
    };

    // Render Standings
    const renderStandings = () => {
        const tbody = document.getElementById('standingsBody');
        if (!tbody) return;

        const teamStats = getTeamStats();
        tbody.innerHTML = '';

        teamStats.forEach((team, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>#${index + 1}</td>
                <td>
                    <div class="team-cell">
                        <img src="${team.logo}" alt="${team.name}" class="team-logo-small">
                        ${team.name}
                    </div>
                </td>
                <td>${team.matches}</td>
                <td>${team.wins}</td>
                <td>${team.draws}</td>
                <td>${team.losses}</td>
                <td class="pts">${team.points}</td>
            `;
            tbody.appendChild(tr);
        });
    };

    // Render Mock Matches
    const renderMatches = () => {
        const grid = document.getElementById('matchesGrid');
        if (!grid) return;

        // Create some mock matches based on teams
        const mockMatches = [
            { team1: teams[0], team2: teams[1], score1: 3, score2: 2, status: 'Completed', class: 'status-completed' },
            { team1: teams[2], team2: teams[3], score1: 1, score2: 1, status: 'Live', class: 'status-live' },
            { team1: teams[0], team2: teams[2], score1: '-', score2: '-', status: 'Upcoming', class: 'status-upcoming' },
            { team1: teams[1], team2: teams[3], score1: '-', score2: '-', status: 'Upcoming', class: 'status-upcoming' },
        ];

        grid.innerHTML = '';
        mockMatches.forEach(match => {
            const card = document.createElement('div');
            card.className = 'match-card';
            card.innerHTML = `
                <div class="match-team">
                    <img src="${match.team1.logo}" alt="${match.team1.name}">
                    <span>${match.team1.name}</span>
                </div>
                <div class="match-score">
                    <div class="status-badge ${match.class}">${match.status}</div>
                    ${match.score1} - ${match.score2}
                </div>
                <div class="match-team">
                    <img src="${match.team2.logo}" alt="${match.team2.name}">
                    <span>${match.team2.name}</span>
                </div>
            `;
            grid.appendChild(card);
        });
    };

    // Initialize Pages
    if (document.getElementById('profilesGrid')) {
        // Members Page
        renderPlayers(players);
        document.getElementById('searchInput').addEventListener('input', handleFilter);
        document.getElementById('teamFilter').addEventListener('change', handleFilter);
    }

    if (document.getElementById('standingsBody')) {
        // Standings Page
        renderStandings();
        renderMatches();
    }
});
