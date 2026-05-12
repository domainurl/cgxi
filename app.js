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
                <td>${index + 1}</td>
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
                <td>${team.goalsFor}:${team.goalsAgainst}</td>
                <td>${team.goalDiff}</td>
                <td class="pts">${team.points}</td>
            `;
            tbody.appendChild(tr);
        });
    };

    // Render Mock Matches
    const renderMatches = () => {
        const grid = document.getElementById('matchesGrid');
        if (!grid) return;

        grid.innerHTML = `
            <div class="match-day-card" style="grid-column: 1 / -1; background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color); padding: 2rem;">
                <h3 style="text-align: center; color: var(--accent-cyan); margin-bottom: 2rem; font-size: 1.5rem;">🔴 Match Day - 03 🔴</h3>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                    <div class="fixture-card" style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color);">
                        <div style="text-align: center; font-weight: 800; margin-bottom: 1.5rem; color: #fff; background: rgba(0, 240, 255, 0.1); padding: 0.5rem; border-radius: 4px;">🟩 Team Ayon(A) 🆚 Team Mahin(H) 🟩</div>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>1. Araf</span> <span>🆚</span> <span>Rinku</span></li>
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>2. Jobaer</span> <span>🆚</span> <span>Morsalin</span></li>
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>3. Elias</span> <span>🆚</span> <span>Biplob</span></li>
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>4. Tushar</span> <span>🆚</span> <span>Mahin</span></li>
                            <li style="padding: 0.8rem 0; display: flex; justify-content: space-between;"><span>5. Shanto</span> <span>🆚</span> <span>Tanvir</span></li>
                        </ul>
                    </div>

                    <div class="fixture-card" style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color);">
                        <div style="text-align: center; font-weight: 800; margin-bottom: 1.5rem; color: #fff; background: rgba(0, 240, 255, 0.1); padding: 0.5rem; border-radius: 4px;">🟩 Team Aashiq(H) 🆚 Team Rayhan(A) 🟩</div>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>1. Asraful</span> <span>🆚</span> <span>Avas</span></li>
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>2. Tahsin</span> <span>🆚</span> <span>Sagor</span></li>
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>3. Aashiq</span> <span>🆚</span> <span>Anwar</span></li>
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>4. Mahabub</span> <span>🆚</span> <span>Sabbir</span></li>
                            <li style="padding: 0.8rem 0; display: flex; justify-content: space-between;"><span>5. Shahrier</span> <span>🆚</span> <span>Bappy</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    };

    // Render Previous Matches
    const renderPreviousMatches = () => {
        const grid = document.getElementById('previousMatchesGrid');
        if (!grid) return;

        grid.innerHTML = `
            <div class="match-day-card" style="grid-column: 1 / -1; background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color); padding: 2rem; margin-bottom: 2rem;">
                <h3 style="text-align: center; color: var(--text-muted); margin-bottom: 2rem; font-size: 1.5rem;">🔴 Match Day - 01 🔴</h3>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                    <div class="fixture-card" style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); opacity: 0.8;">
                        <div style="text-align: center; font-weight: 800; margin-bottom: 1.5rem; color: #fff; background: rgba(255, 255, 255, 0.05); padding: 0.5rem; border-radius: 4px;">🟩 Team Ayon(H) 🆚 Team Rayhan(A) 🟩</div>
                        <ul style="list-style: none; padding: 0; margin-bottom: 1rem;">
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>1. Araf <span style="color:var(--accent-cyan)">(4)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(5)</span> Anowar</span></li>
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>2. Jobaer <span style="color:var(--accent-cyan)">(2)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(0)</span> Redwan Shuvo</span></li>
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>3. Elias Shuvo <span style="color:var(--accent-cyan)">(1)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(2)</span> Sagor</span></li>
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>4. Tushar <span style="color:var(--accent-cyan)">(0)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(1)</span> Sabbir</span></li>
                            <li style="padding: 0.8rem 0; display: flex; justify-content: space-between;"><span>5. Zahedul <span style="color:var(--accent-cyan)">(0)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(1)</span> Alam Shah</span></li>
                        </ul>
                        <div style="background: rgba(0, 240, 255, 0.1); padding: 1rem; border-radius: 8px; text-align: center;">
                            <div style="font-weight: 800; font-size: 1.2rem; margin-bottom: 0.5rem;">Score: Team Ayon 1️⃣ 🆚 4️⃣ Team Rayhan</div>
                            <div style="color: var(--accent-purple); font-weight: 600;">Man of the match: Anwar</div>
                        </div>
                    </div>

                    <div class="fixture-card" style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); opacity: 0.8;">
                        <div style="text-align: center; font-weight: 800; margin-bottom: 1.5rem; color: #fff; background: rgba(255, 255, 255, 0.05); padding: 0.5rem; border-radius: 4px;">🟩 Team Aashiq(H) 🆚 Team Mahin(A) 🟩</div>
                        <ul style="list-style: none; padding: 0; margin-bottom: 1rem;">
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>1. Tahsin <span style="color:var(--accent-cyan)">(0)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(1)</span> Rinku</span></li>
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>2. Shawon <span style="color:var(--accent-cyan)">(7)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(0)</span> Mahin</span></li>
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>3. Aashiq (Sub) <span style="color:var(--accent-cyan)">(1)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(1)</span> Marjan</span></li>
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>4. Asraful <span style="color:var(--accent-cyan)">(2)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(4)</span> Tanvir</span></li>
                            <li style="padding: 0.8rem 0; display: flex; justify-content: space-between;"><span>5. Shahrier <span style="color:var(--accent-cyan)">(1)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(2)</span> Biplob</span></li>
                        </ul>
                        <div style="background: rgba(0, 240, 255, 0.1); padding: 1rem; border-radius: 8px; text-align: center;">
                            <div style="font-weight: 800; font-size: 1.2rem; margin-bottom: 0.5rem;">Score: Team Ashiq 1️⃣ 🆚 3️⃣ Team Mahin</div>
                            <div style="color: var(--accent-purple); font-weight: 600;">Man of the match: Tanvir</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="match-day-card" style="grid-column: 1 / -1; background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color); padding: 2rem;">
                <h3 style="text-align: center; color: var(--text-muted); margin-bottom: 2rem; font-size: 1.5rem;">🔴 Match Day - 02 🔴</h3>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                    <div class="fixture-card" style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); opacity: 0.8;">
                        <div style="text-align: center; font-weight: 800; margin-bottom: 1.5rem; color: #fff; background: rgba(255, 255, 255, 0.05); padding: 0.5rem; border-radius: 4px;">🟩 Team Ayon(A) 🆚 Team Rayhan(H) 🟩</div>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>1. Araf <span style="color:var(--accent-cyan)">(4)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(6)</span> Bappy</span></li>
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>2. Jobaer <span style="color:var(--accent-cyan)">(1)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(2)</span> Avas</span></li>
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>3. Elias</span> <span>🆚</span> <span>Sagor</span></li>
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>4. Tushar <span style="color:var(--accent-cyan)">(1)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(2)</span> Sabbir</span></li>
                            <li style="padding: 0.8rem 0; display: flex; justify-content: space-between;"><span>5. Shihab(Sub) <span style="color:var(--accent-cyan)">(2)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(4)</span> Anwar(Sub)</span></li>
                        </ul>
                    </div>

                    <div class="fixture-card" style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); opacity: 0.8;">
                        <div style="text-align: center; font-weight: 800; margin-bottom: 1.5rem; color: #fff; background: rgba(255, 255, 255, 0.05); padding: 0.5rem; border-radius: 4px;">🟩 Team Aashiq(A) 🆚 Team Mahin(H) 🟩</div>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>1. Tahsin <span style="color:var(--accent-cyan)">(1)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(2)</span> Biplob</span></li>
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>2. Shawon <span style="color:var(--accent-cyan)">(5)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(4)</span> Rinku</span></li>
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>3. Aashiq <span style="color:var(--accent-cyan)">(3)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(1)</span> Tanvir</span></li>
                            <li style="padding: 0.8rem 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;"><span>4. Mahabub <span style="color:var(--accent-cyan)">(6)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(1)</span> Morsalin</span></li>
                            <li style="padding: 0.8rem 0; display: flex; justify-content: space-between;"><span>5. Shahrier <span style="color:var(--accent-cyan)">(2)</span></span> <span>🆚</span> <span><span style="color:var(--accent-cyan)">(1)</span> Mahin(Sub)</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
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
        renderPreviousMatches();
    }
});
