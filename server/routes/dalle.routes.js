import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
const { spawn } = require('child_process')
dotenv.config();

const router = express.Router();

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

router.route('/').post(async(req, res) => {
    try {
        const { prompt } = req.body;
        console.log(prompt);
        // const response = await openai.createImage({
        //   prompt,
        //   n: 1,
        //   size: '1024x1024',
        //   response_format: 'b64_json'
        // });

        // const image = response.data.data[0].b64_json;
        console.log("Going")
        const pythonScript = spawn('python3', ['/Users/anshhchaturvedi/Desktop/project_threejs_ai/server/generate.py', prompt]);
        console.log("spawn done")
        pythonScript.stdout.on('data', (data) => {
            console.log(`Python script output: ${data}`);
        });

        pythonScript.stderr.on('data', (data) => {
            console.error(`Python script error: ${data}`);
        });

        pythonScript.on('close', (code) => {
            console.log(`Python script exited with code ${code}`);

            const paths = [
                'output.png'
            ];

            res.json({ paths });
        });
        res.status(200).json({ message: prompt });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" })
    }
})
router.route('/').post(async(req, res) => {
    try {
        const { prompt } = req.body;
        console.log(prompt);
        console.log("Going")
        const pythonScript = spawn('python3', ['/Users/anshhchaturvedi/Desktop/project_threejs_ai/server/routes/pinterest.py', prompt]);
        console.log("spawn done")
        pythonScript.stdout.on('data', (data) => {
            console.log(`Python script output: ${data}`);
        });

        pythonScript.stderr.on('data', (data) => {
            console.error(`Python script error: ${data}`);
        });

        pythonScript.on('close', (code) => {
            console.log(`Python script exited with code ${code}`);

            const paths = [
                'output.png'
            ];

            res.json({ paths });
        });
        res.status(200).json({ message: prompt });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" })
    }
})
export default router;