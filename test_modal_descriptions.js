// Test script to check portfolio modal descriptions
console.log("Testing Portfolio Modal Descriptions...");

// Function to test description loading
async function testDescriptionLoading() {
    const testCompanies = ['MOBOTIX', 'Shieldtech', 'AFT', 'Horn', 'WPS'];
    
    for (const company of testCompanies) {
        const descriptionPath = `../Assets/Portfolio/${company}/_description.txt`;
        
        try {
            const response = await fetch(descriptionPath);
            if (response.ok) {
                const description = await response.text();
                console.log(`✅ ${company}: Description loaded (${description.length} chars)`);
                console.log(`   Preview: ${description.substring(0, 100)}...`);
            } else {
                console.log(`❌ ${company}: HTTP ${response.status}`);
            }
        } catch (error) {
            console.log(`❌ ${company}: Error - ${error.message}`);
        }
    }
}

// Run test when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(testDescriptionLoading, 1000);
});
