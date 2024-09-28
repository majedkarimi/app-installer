self.addEventListener("install", (event) => {
  console.log("Service Worker Install");
});
self.addEventListener("activate", (event) => {
  console.log("service worker activated");
});
self.addEventListener("fetch", (event) => {
  // console.log("Fetch events for", event.request.url);
});
