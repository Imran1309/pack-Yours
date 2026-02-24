require('dotenv').config();
const fs = require('fs');

const API_KEY = process.env.GEMINI_API_KEY;
const URL = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;

async function listModels() {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        console.log("Status:", response.status);

        if (response.ok) {
            fs.writeFileSync('models_list.json', JSON.stringify(data, null, 2));
            console.log("Models list saved to models_list.json");
            if (data.models) {
                console.log("Available models:");
                data.models.forEach(m => console.log(`- ${m.name}`));
            } else {
                console.log("No models found in response.");
            }
        } else {
            console.error("Error fetching models:", data);
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

listModels();
