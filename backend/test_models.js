require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');

const logFile = 'test_result.txt';
fs.writeFileSync(logFile, "Starting test...\n");

function log(msg) {
    console.log(msg);
    fs.appendFileSync(logFile, msg + "\n");
}

const key = process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.trim() : "";
log(`API Key (trimmed) length: ${key.length}`);
log(`API Key start: ${key.substring(0, 5)}...`);

const genAI = new GoogleGenerativeAI(key);

async function run() {
    const models = [
        "gemini-1.5-flash",
        "gemini-1.5-flash-latest",
        "gemini-1.5-pro",
        "gemini-1.5-pro-latest",
        "gemini-pro",
        "gemini-1.0-pro"
    ];

    for (const modelName of models) {
        log(`\n--- Testing model: ${modelName} ---`);
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent("Hello.");
            const response = await result.response;
            const text = response.text();
            log(`SUCCESS: ${modelName} worked! Response: ${text.substring(0, 20)}...`);
            return;
        } catch (error) {
            log(`FAILED: ${modelName}`);
            log(`Error: ${error.message}`);
        }
    }
}

run().catch(err => log("Fatal error: " + err));
