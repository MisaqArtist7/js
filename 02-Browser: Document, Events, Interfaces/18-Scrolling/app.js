/**

* ============================================================================
* ON SCROLL
* ============================================================================
*
* The "scroll" event fires when an element or the page is scrolled.
*
* ============================================================================
* SCROLL EVENT
* ============================================================================
*
* For page scrolling:
*
* window.addEventListener("scroll", handler);
*
* For an element's internal scrolling:
*
* element.addEventListener("scroll", handler);
*
* ============================================================================
* PAGE SCROLL POSITION
* ============================================================================
*
* window.scrollX
* window.scrollY
*
* → Current horizontal / vertical scroll position of the page.
*
* Legacy aliases:
*
* window.pageXOffset
* window.pageYOffset
*
* ============================================================================
* ELEMENT SCROLL POSITION
* ============================================================================
*
* element.scrollLeft
* element.scrollTop
*
* → Current scroll position inside an element.
*
* Mental model:
*
* window.scrollY
* → page scroll
*
* element.scrollTop
* → element's internal scroll
*
* ============================================================================
* SCROLL METHODS
* ============================================================================
*
* window.scrollTo(x, y)
* → Scroll to an absolute document position.
*
* window.scrollTo(0, 500);
*
* window.scrollBy(x, y)
* → Scroll relative to the current position.
*
* window.scrollBy(0, 100);
*
* Both also support options:
*
* window.scrollTo({
* ```
    top: 0,
  ```
* ```
    behavior: "smooth"
  ```
* });
*
* ============================================================================
* SCROLL INTO VIEW
* ============================================================================
*
* element.scrollIntoView();
*
* → Scrolls the page so the element becomes visible.
*
* Smooth scrolling:
*
* element.scrollIntoView({
* ```
    behavior: "smooth"
  ```
* });
*
* ============================================================================
* VIEWPORT VS DOCUMENT
* ============================================================================
*
* getBoundingClientRect()
* → Element coordinates relative to the viewport.
*
* Document coordinate:
*
* const rect = element.getBoundingClientRect();
*
* const top = rect.top + window.scrollY;
* const left = rect.left + window.scrollX;
*
* Mental model:
*
* document position
* =
* viewport position + scroll
*
* ============================================================================
* REACHING THE BOTTOM
* ============================================================================
*
* The bottom of the viewport can be calculated with:
*
* window.scrollY + window.innerHeight
*
* Full document height:
*
* document.documentElement.scrollHeight
*
* Therefore:
*
* window.scrollY + window.innerHeight
* ```
    >= document.documentElement.scrollHeight
  ```
*
* means the user has reached the bottom.
*
* ============================================================================
* PERFORMANCE
* ============================================================================
*
* scroll can fire very frequently.
*
* Avoid expensive work inside the scroll handler.
*
* Heavy DOM operations and layout calculations
* can cause performance problems.
*
* ============================================================================
* COMMON USE CASES
* ============================================================================
*
* → Back to top button
* → Sticky UI
* → Infinite scrolling
* → Lazy loading
* → Scroll progress
* → Show/hide elements based on scroll position
*
* ============================================================================
* MAIN MENTAL MODEL
* ============================================================================
*
* scroll
* → scrolling happened
*
* window.scrollY
* → page scroll position
*
* element.scrollTop
* → element scroll position
*
* scrollTo()
* → absolute position
*
* scrollBy()
* → relative movement
*
* scrollIntoView()
* → make an element visible
*
* getBoundingClientRect()
* → viewport coordinates
*
* scrollHeight
* → full scrollable content height
*
* innerHeight
* → viewport height
*
* ============================================================================
  */
