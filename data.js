const teams = [
    { id: 'ayon', name: 'Team Ayon', logo: 'assets/avatar.png' },
    { id: 'mahin', name: 'Team Mahin', logo: 'assets/avatar.png' },
    { id: 'aashiq', name: 'Team Aashiq', logo: 'assets/avatar.png' },
    { id: 'rayhan', name: 'Team Rayhan', logo: 'assets/avatar.png' }
];

// Data from user prompt
const rawPlayers = [
    {id: 1, name: "Elias Hasan Shuvo", price: "15M", matches: 62, wins: 31, losses: 16, draws: 15, winRate: "50%"},
    {id: 2, name: "Ismail Hossain Biplob", price: "15M", matches: 104, wins: 63, losses: 23, draws: 18, winRate: "61%"},
    {id: 3, name: "Mahadi Hasan Shawon", price: "15M", matches: 96, wins: 52, losses: 21, draws: 23, winRate: "54%"},
    {id: 4, name: "Md Rayhan Khan", price: "15M", matches: 52, wins: 25, losses: 12, draws: 15, winRate: "48%"},
    {id: 5, name: "Tahsin Osam", price: "15M", matches: 52, wins: 30, losses: 10, draws: 12, winRate: "58%"},
    {id: 6, name: "Jobaer Alam", price: "15M", matches: 23, wins: 16, losses: 5, draws: 2, winRate: "70%"},
    {id: 7, name: "Redwan Shuvo", price: "15M", matches: 0, wins: 0, losses: 0, draws: 0, winRate: "0%"}, // Debutant
    {id: 8, name: "Abdullah Rinku", price: "10M", matches: 84, wins: 43, losses: 25, draws: 16, winRate: "51%"},
    {id: 9, name: "Alam Shah", price: "10M", matches: 7, wins: 3, losses: 3, draws: 1, winRate: "43%"},
    {id: 10, name: "Mahadi Hasan Tushar", price: "10M", matches: 83, wins: 40, losses: 23, draws: 20, winRate: "48%"},
    {id: 11, name: "Mashjihad Farhan Tihan", price: "10M", matches: 39, wins: 6, losses: 25, draws: 8, winRate: "15%"},
    {id: 12, name: "Md AAH Mahabub", price: "10M", matches: 54, wins: 18, losses: 23, draws: 13, winRate: "33%"},
    {id: 13, name: "Md Abu Sayed Avas", price: "10M", matches: 50, wins: 11, losses: 33, draws: 6, winRate: "22%"},
    {id: 14, name: "Md Barkatullah", price: "10M", matches: 45, wins: 20, losses: 13, draws: 12, winRate: "44%"},
    {id: 15, name: "Md Marjan", price: "10M", matches: 66, wins: 33, losses: 21, draws: 12, winRate: "50%"},
    {id: 16, name: "Md Rayhan Sifat", price: "10M", matches: 72, wins: 30, losses: 25, draws: 17, winRate: "42%"},
    {id: 17, name: "Mezbaul Robin", price: "10M", matches: 25, wins: 14, losses: 7, draws: 4, winRate: "56%"},
    {id: 18, name: "Mir Ashiqur Rahman", price: "10M", matches: 60, wins: 24, losses: 24, draws: 12, winRate: "40%"},
    {id: 19, name: "Neyamul Haque Babu", price: "10M", matches: 75, wins: 33, losses: 24, draws: 18, winRate: "44%"},
    {id: 20, name: "Sabbir Ahmed", price: "10M", matches: 23, wins: 15, losses: 5, draws: 3, winRate: "65%"},
    {id: 21, name: "Shariar Ahmed", price: "10M", matches: 21, wins: 7, losses: 10, draws: 4, winRate: "33%"},
    {id: 22, name: "Symon Mahamud Sagor", price: "10M", matches: 100, wins: 51, losses: 25, draws: 24, winRate: "51%"},
    {id: 23, name: "Md Ashraful", price: "10M", matches: 0, wins: 0, losses: 0, draws: 0, winRate: "0%"}, // Debutant
    {id: 24, name: "Aashiqur Rahman", price: "5M", matches: 87, wins: 28, losses: 39, draws: 20, winRate: "32%"},
    {id: 25, name: "Aktarujjaman Rifat", price: "5M", matches: 22, wins: 9, losses: 11, draws: 2, winRate: "41%"},
    {id: 26, name: "Anwar J Redwan", price: "5M", matches: 31, wins: 8, losses: 17, draws: 6, winRate: "26%"},
    {id: 27, name: "E.k. Ayon", price: "5M", matches: 22, wins: 9, losses: 8, draws: 5, winRate: "41%"},
    {id: 28, name: "Mahfuj Rahman Mahid", price: "5M", matches: 5, wins: 1, losses: 4, draws: 0, winRate: "20%"},
    {id: 29, name: "MD Shakil", price: "5M", matches: 0, wins: 0, losses: 0, draws: 0, winRate: "0%"},
    {id: 30, name: "Mohammad Araf", price: "5M", matches: 50, wins: 21, losses: 21, draws: 8, winRate: "42%"},
    {id: 31, name: "Mohammad Mahin", price: "5M", matches: 74, wins: 20, losses: 35, draws: 19, winRate: "27%"},
    {id: 32, name: "Morsalin Zayan", price: "5M", matches: 60, wins: 21, losses: 28, draws: 11, winRate: "35%"},
    {id: 33, name: "Satyajeet Shanto", price: "5M", matches: 22, wins: 0, losses: 21, draws: 1, winRate: "0%"},
    {id: 34, name: "Tanvir Hasan", price: "5M", matches: 77, wins: 25, losses: 40, draws: 12, winRate: "32%"},
    {id: 35, name: "Fazle Ahmed", price: "5M", matches: 37, wins: 8, losses: 25, draws: 4, winRate: "22%"},
    {id: 36, name: "Zahedul Islam", price: "5M", matches: 8, wins: 0, losses: 6, draws: 2, winRate: "0%"}
];

// Assign teams randomly since we don't have the explicit mapping
// Round-robin assignment
const players = rawPlayers.map((player, index) => {
    // Specific assignments based on name if possible:
    // Aashiqur Rahman -> Team Aashiq
    // E.k. Ayon -> Team Ayon
    // Mohammad Mahin -> Team Mahin
    // Md Rayhan Khan -> Team Rayhan
    let teamId = teams[index % teams.length].id;
    if(player.name.includes("Aashiq")) teamId = "aashiq";
    if(player.name.includes("Ayon")) teamId = "ayon";
    if(player.name.includes("Mahin")) teamId = "mahin";
    if(player.name.includes("Rayhan")) teamId = "rayhan";

    return {
        ...player,
        teamId: teamId,
        photo: 'assets/avatar.png',
        teamName: teams.find(t => t.id === teamId).name
    };
});

const getTeamStats = () => {
    return [
        {
            id: 'rayhan', name: 'Team Rayhan', logo: 'assets/avatar.png',
            matches: 1, wins: 1, draws: 0, losses: 0, goalsFor: 4, goalsAgainst: 1, goalDiff: '+3', points: 3
        },
        {
            id: 'mahin', name: 'Team Mahin', logo: 'assets/avatar.png',
            matches: 1, wins: 1, draws: 0, losses: 0, goalsFor: 3, goalsAgainst: 1, goalDiff: '+2', points: 3
        },
        {
            id: 'aashiq', name: 'Team Aashiq', logo: 'assets/avatar.png',
            matches: 1, wins: 0, draws: 0, losses: 1, goalsFor: 1, goalsAgainst: 3, goalDiff: '-2', points: 0
        },
        {
            id: 'ayon', name: 'Team E.k Ayon', logo: 'assets/avatar.png',
            matches: 1, wins: 0, draws: 0, losses: 1, goalsFor: 1, goalsAgainst: 4, goalDiff: '-3', points: 0
        }
    ];
};
