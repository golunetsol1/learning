const fetchShortenedURL = async () => {
    const response = await fetch('/link');
    console.log("response:- ", response);
    const links = await response.json();
    console.log("links:- ", links);

    const lists = document.getElementById('shortened-urls');

    for (const [shortCode, url] of Object.entries(links)) {
        console.log(`${shortCode}: ${url}`);
        const truncatedURL = url.length >= 30? `${url.slice(0, 30)}...`: url;
        const li = document.createElement('li');
        li.innerHTML = `<i class="fa-solid fa-arrow-right" style="color:#0b71e6;"></i> &nbsp; <a href="/${shortCode}" target="_blank">${window.location.origin}/${shortCode}</a> <br/>  <i class="fa-solid fa-arrow-right"></i> <span> &nbsp;${truncatedURL}</span>`
        lists.appendChild(li);
    }
}
const shortenForm = document.getElementById('shorten-form');
shortenForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const url = formData.get("url");
    const shortCode = formData.get("shortCode");

    if (!url) {
        alert("URL is required.");
        return;
    }
    try {
        const response = await fetch('/shorten', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url, shortCode }),
        });
        if (response.ok) {
            fetchShortenedURL();
            const data = await response.json();
            alert(`Shortened URL created successfully: ${data.shortCode}`);
            event.target.reset();
        } else {
            const errorMessage = await response.text();
            alert(`Error: ${errorMessage}`);
        }
    } catch (error) {
        console.error("Error during request:", error);
        alert("Something went wrong. Please try again later.");
    }
})
fetchShortenedURL();