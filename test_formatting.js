// Test der Umsatz-Formatierung
function formatRevenueForCard(revenueString) {
    if (!revenueString) return 'N/A';
    
    // Extract number from revenue string like "27.0 Million EUR"
    const match = revenueString.match(/([\d.]+)\s*(Million|Mio)/i);
    if (match && match[1]) {
        const value = parseFloat(match[1]);
        if (!isNaN(value)) {
            return `€ ${value}M`;
        }
    }
    return revenueString; // fallback to original if parsing fails
}

function formatRevenueForModal(revenueString) {
    if (!revenueString || revenueString === 'N/A') return 'N/A';
    
    // Extract number from revenue string like "27.0 Million EUR"
    const match = revenueString.match(/([\d.]+)\s*(Million|Mio)/i);
    if (match && match[1]) {
        const value = parseFloat(match[1]);
        if (!isNaN(value)) {
            return `€ ${value}M`;
        }
    }
    return revenueString; // fallback to original if parsing fails
}

// Test cases
const testCases = [
    "27.0 Million EUR",
    "60.0 Million EUR", 
    "120.0 Million EUR",
    "175.0 Million EUR",
    "5.0 Million EUR"
];

console.log("Testing revenue formatting:");
testCases.forEach(test => {
    console.log(`Input: "${test}" -> Card: "${formatRevenueForCard(test)}" | Modal: "${formatRevenueForModal(test)}"`);
});

// Test industry statistics
const industryStats = {
    'automotive': { countries: 7, employees: 940, employeesText: '940' }, 
    'packaging': { countries: 6, employees: 500, employeesText: '500' }, 
    'industrials': { countries: 27, employees: 2200, employeesText: '2200' }, 
    'goods-services': { countries: 2, employees: 360, employeesText: '360' }, 
    'software': { countries: 11, employees: 439, employeesText: '439' }
};

const defaultStats = { countries: 53, employeesText: '4400+' };

console.log("\nTesting industry statistics:");
console.log("Default stats:", defaultStats);
Object.entries(industryStats).forEach(([industry, stats]) => {
    console.log(`${industry}: ${stats.countries} countries, ${stats.employees} FTE`);
});

const totalCountries = Object.values(industryStats).reduce((sum, stat) => sum + stat.countries, 0);
const totalEmployees = Object.values(industryStats).reduce((sum, stat) => sum + stat.employees, 0);
console.log(`Total calculated: ${totalCountries} countries, ${totalEmployees} FTE`);
