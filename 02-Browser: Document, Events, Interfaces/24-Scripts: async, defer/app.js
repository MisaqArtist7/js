/**

* ============================================================================
* SCRIPT: ASYNC AND DEFER
* ============================================================================
*
* The browser normally parses HTML and executes <script> tags
* according to their loading behavior.
*
* ============================================================================
* NORMAL SCRIPT
* ============================================================================
*
* <script src="script.js"></script>
*
* When the browser reaches the script:
*
* HTML parsing
* ```
    ↓
  ```
* HTML parsing stops
* ```
    ↓
  ```
* script downloads
* ```
    ↓
  ```
* script executes
* ```
    ↓
  ```
* HTML parsing continues
*
* A normal script blocks HTML parsing.
*
* ============================================================================
* DEFER
* ============================================================================
*
* <script defer src="script.js"></script>
*
* With defer:
*
* → Script downloads while HTML is being parsed.
* → Script executes after HTML parsing is complete.
* → Script executes before DOMContentLoaded.
*
* Mental model:
*
* HTML parsing ────────────────┐
* ```
       │                     │
  ```
* ```
       └── script download ──┘
  ```
* ```
                             ↓
  ```
* ```
                        DOM complete
  ```
* ```
                             ↓
  ```
* ```
                        script executes
  ```
* ```
                             ↓
  ```
* ```
                      DOMContentLoaded
  ```
*
* Therefore, defer is useful when the script needs the DOM.
*
* ============================================================================
* DEFER ORDER
* ============================================================================
*
* Multiple defer scripts keep their order:
*
* <script defer src="one.js"></script>
* <script defer src="two.js"></script>
*
* Execution:
*
* one.js
* ```
   ↓
  ```
* two.js
*
* Even if two.js downloads first, one.js executes first.
*
* Useful when scripts have dependencies.
*
* ============================================================================
* ASYNC
* ============================================================================
*
* <script async src="script.js"></script>
*
* With async:
*
* → Script downloads while HTML is being parsed.
* → Script executes as soon as it finishes downloading.
*
* HTML parsing may be paused while the script executes.
*
* The execution order of multiple async scripts is NOT guaranteed.
*
* ============================================================================
* ASYNC ORDER
* ============================================================================
*
* <script async src="one.js"></script>
* <script async src="two.js"></script>
*
* If two.js downloads first:
*
* two.js
* ```
   ↓
  ```
* one.js
*
* Async scripts execute based on download completion,
* not their order in HTML.
*
* ============================================================================
* DEFER VS ASYNC
* ============================================================================
*
* defer
* → Download in parallel with HTML parsing
* → Execute after HTML parsing
* → Order is preserved
* → Before DOMContentLoaded
*
* async
* → Download in parallel with HTML parsing
* → Execute as soon as ready
* → Order is NOT preserved
* → Independent scripts
*
* ============================================================================
* WHEN TO USE
* ============================================================================
*
* Use defer when:
*
* → Script needs the DOM
* → Multiple scripts depend on each other
* → Execution order matters
*
* Use async when:
*
* → Script is independent
* → Execution order does not matter
* → Script can run as soon as it is downloaded
*
* Examples of independent scripts:
*
* → Analytics
* → Ads
* → Independent third-party scripts
*
* ============================================================================
* MAIN MENTAL MODEL
* ============================================================================
*
* Normal script
* → blocks HTML parsing
*
* defer
* → download now, execute after parsing
* → preserves order
*
* async
* → download now, execute when ready
* → does not preserve order
*
* ============================================================================
  */
