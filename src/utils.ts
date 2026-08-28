export const parsePolishDate = (dateStr?: string) => {
    if (!dateStr) return 0;
    const months = {
        'styczni': 1, 'stycze': 1,
        'luteg': 2, 'luty': 2,
        'marc': 3,
        'kwietni': 4, 'kwieci': 4,
        'maj': 5,
        'czerwc': 6, 'czerwi': 6,
        'lipc': 7, 'lipiec': 7,
        'sierpni': 8, 'sierpie': 8,
        'wrześni': 9, 'wrzesie': 9,
        'październik': 10,
        'listopad': 11,
        'grudni': 12, 'grudzie': 12
    };
    const lower = dateStr.toLowerCase();
    let monthNum = 1;
    for (const [key, val] of Object.entries(months)) {
        if (lower.includes(key)) {
            monthNum = val;
            break;
        }
    }
    const yearMatch = lower.match(/\b(20\d{2})\b/);
    const year = yearMatch ? parseInt(yearMatch[1]) : 0;
    
    // Find the first standalone 1 or 2 digit number that is not the year
    let day = 1;
    const allNumbers = [...lower.matchAll(/\b(\d{1,2})\b/g)];
    for (const match of allNumbers) {
        const num = parseInt(match[1]);
        if (num <= 31) {
            day = num;
            break;
        }
    }
    
    return year * 10000 + monthNum * 100 + day;
};
