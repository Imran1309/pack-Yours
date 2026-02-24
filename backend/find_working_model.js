require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const modelsToTest = [
    "gemini-2.0-flash-lite-001",
    "gemini-2.5-flash-lite",
    "gemini-flash-latest",
    "gemini-2.0-flash-exp",
    "gemini-2.0-pro-exp-02-05", // Sometimes exp models work
    "gemma-3-27b-it"
];

async function testModels() {
    console.log("Searching for a working model with quota...");

    for (const modelName of modelsToTest) {
        process.stdout.write(`Testing ${modelName.padEnd(30)}: `);
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent("Hi");
            const response = await result.response;
            console.log(`✅ SUCCESS! (Response: ${response.text().trim()})`);
            console.log(`\n>>> RECOMMENDED MODEL: ${modelName} <<<\n`);
            return; // Exit on first success
        } catch (error) {
            console.log(`❌ FAILED`);
            // Extract useful info from error
            if (error.status === 429) {
                console.log(`   -> Rate Limited (429).`);
                if (error.message.includes('limit: 0')) console.log("   -> Limit is 0 (Not available on free tier).");
                else if (error.message.includes('limit: 20')) console.log("   -> Limit is 20 (Quota exhausted).");
                else console.log("   -> Other rate limit issue.");
            } else if (error.status === 404) {
                console.log(`   -> Not Found (404).`);
            } else {
                console.log(`   -> Error: ${error.message.split('[')[0].substring(0, 50)}...`);
            }
        }
    }
    console.log("\n❌ No working models found in the test list.");
}

testModels();
