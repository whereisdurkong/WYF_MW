const BASE_URL = process.env.API_BASE_URL || 'http://localhost:5000/api/product';
const ENDPOINT = `${BASE_URL}/get-all-products`;
const INTERVAL_MS = 5 * 1000; // 5 seconds

async function fetchAllProducts() {
    const startedAt = new Date().toISOString();
    try {
        const res = await fetch(ENDPOINT);
        if (!res.ok) {
            throw new Error(`HTTP ${res.status} ${res.statusText}`);
        }
        const products = await res.json();
        console.log(`[${startedAt}] Fetched ${products.length} products`);
        console.log(products);
    } catch (err) {
        console.error(`[${startedAt}] Failed to fetch products:`, err.message);
    }
}

// Run once on start, then every 5 seconds
fetchAllProducts();
setInterval(fetchAllProducts, INTERVAL_MS);