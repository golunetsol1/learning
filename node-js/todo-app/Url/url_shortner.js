import { readFile, writeFile } from 'fs/promises';
import { createServer } from 'http';
import crypto from 'crypto';
import path from 'path';

const PORT = 3000; // running at 3000 port
const DATA_FILE = path.join('data', 'link.json');

// common path function for server files
const serverFile = async (res, filePath, contentType) => {
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { 'Content-type': contentType });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { 'Content-type': 'text/plain' });
    res.end("404 Page not found");
  }
};

// Load links from the file, handle empty or corrupted file
const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FILE, 'utf-8');
    // If the file is empty, return an empty object
    return data ? JSON.parse(data) : {};
  } catch (error) {
    if (error.code === "ENOENT") {
      // If the file doesn't exist, create it with an empty object
      await writeFile(DATA_FILE, JSON.stringify({}));
      return {};
    } else {
      console.error("Error reading the file:", error);
      throw error;
    }
  }
};

// Save links to the file
const saveLinks = async (links) => {
  try {
    await writeFile(DATA_FILE, JSON.stringify(links));
  } catch (error) {
    console.error("Failed to save links:", error);
    throw error;
  }
};

// Create the HTTP server
const server = createServer(async (req, res) => {
  if (req.method === "GET") {
    // Serve static files
    if (req.url === "/") {
      return serverFile(res, path.join("public", "index.html"), "text/html");
    } else if (req.url === "/style.css") {
      return serverFile(res, path.join("public", "style.css"), "text/css");
    } else if (req.url === "/script.js") {
      return serverFile(res, path.join("public", "script.js"), "text/js");
    } else if (req.url === "/images/favicon/favicon-32x32.png") {
      return serverFile(res, path.join("public", "images/favicon/favicon-32x32.png"), "image/png");
    } else if (req.url === "/link") {
      const links = await loadLinks();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(links));
    } else{
      const links = await loadLinks();
      console.log("links Red. ", req.url);
      const shortCode = req.url.slice(1);
      console.log("links Red. ", shortCode);
      
      if(links[shortCode]){
        console.log("Links get when redirect to another page" ,links[shortCode]);
        res.writeHead(302, {location : links[shortCode]});
        return res.end();
      }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        return res.end("ShortCode URL is not found.");
      }
    }
  } else if (req.method === "POST" && req.url === "/shorten") {
    let body = '';
    
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', async () => {
      try {
        const links = await loadLinks();
        const { url, shortCode } = JSON.parse(body);
        console.log("Received data: ", { url, shortCode });

        // URL validation
        if (!url) {
          res.writeHead(400, { 'Content-Type': 'text/plain' });
          return res.end('URL is required');
        }

        // Generate or use provided short code
        const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");
        
        // Check if the short code already exists
        if (links[finalShortCode]) {
          res.writeHead(400, { 'Content-Type': 'text/plain' });
          return res.end('Short Code already exists. Please choose another.');
        }

        // Save new short URL
        links[finalShortCode] = url;
        await saveLinks(links);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: true, shortCode: finalShortCode }));
      } catch (error) {
        console.error("Error processing request:", error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('Internal Server Error');
      }
    });
  }
});

// Start the server
server.listen(PORT, () => {console.log(`Server running at http://localhost:${PORT}`);});
