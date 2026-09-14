/**

* ============================================================================
* ONLOAD AND ONERROR
* ============================================================================
*
* "load" and "error" are used to detect whether a resource
* was loaded successfully or failed.
*
* Common resources:
*
* → Images
* → Scripts
* → Stylesheets
* → Iframes
*
* ============================================================================
* LOAD
* ============================================================================
*
* "load" fires when a resource is successfully loaded.
*
* img.addEventListener("load", () => {
* ```
    console.log("Image loaded");
  ```
* });
*
* For a script:
*
* script.addEventListener("load", () => {
* ```
    console.log("Script loaded");
  ```
* });
*
* ============================================================================
* ERROR
* ============================================================================
*
* "error" fires when a resource fails to load.
*
* img.addEventListener("error", () => {
* ```
    console.log("Image failed");
  ```
* });
*
* Example:
*
* img.addEventListener("error", () => {
* ```
    img.src = "fallback.jpg";
  ```
* });
*
* This allows us to provide a fallback resource.
*
* ============================================================================
* DYNAMIC SCRIPT LOADING
* ============================================================================
*
* A script can be created and loaded dynamically:
*
* const script = document.createElement("script");
*
* script.src = "library.js";
*
* script.onload = () => {
* ```
    console.log("Loaded");
  ```
* };
*
* script.onerror = () => {
* ```
    console.log("Failed");
  ```
* };
*
* document.head.append(script);
*
* Useful when loading libraries or other scripts at runtime.
*
* ============================================================================
* RESOURCE LOAD VS WINDOW LOAD
* ============================================================================
*
* Resource:
*
* img.addEventListener("load", handler);
*
* → Fires when that specific image loads.
*
* Page:
*
* window.addEventListener("load", handler);
*
* → Fires after the page and its dependent resources have loaded.
*
* Mental model:
*
* img.load
* → one resource is ready
*
* window.load
* → page resources are ready
*
* ============================================================================
* DOMCONTENTLOADED VS LOAD
* ============================================================================
*
* DOMContentLoaded:
*
* → HTML has been parsed
* → DOM is ready
*
* load:
*
* → Page resources have finished loading
*
* Typical order:
*
* HTML parsing
* ```
    ↓
  ```
* DOMContentLoaded
* ```
    ↓
  ```
* resources finish loading
* ```
    ↓
  ```
* window.load
*
* ============================================================================
* CORS
* ============================================================================
*
* For cross-origin resources, browser security rules apply.
*
* Some detailed error information may not be available
* when a resource comes from another origin.
*
* CORS controls whether cross-origin access is allowed.
*
* ============================================================================
* MAIN MENTAL MODEL
* ============================================================================
*
* load
* → resource loaded successfully
*
* error
* → resource failed to load
*
* img.onload
* → image loaded
*
* img.onerror
* → image failed
*
* script.onload
* → script loaded
*
* script.onerror
* → script failed
*
* window.load
* → page resources loaded
*
* DOMContentLoaded
* → DOM is ready
*
* ============================================================================
  */
