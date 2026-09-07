/**

* ============================================================================
* SEARCHING ELEMENTS IN DOM
* ============================================================================
*
* Methods for finding and checking elements in the DOM.
*
* ============================================================================
* getElementById()
* ============================================================================
*
* Finds one element by its unique `id`.
*
* document.getElementById("user");
*
* Returns:
* Element → if found
* null    → if not found
*
* ============================================================================
* querySelector()
* ============================================================================
*
* Finds the FIRST element matching a CSS selector.
*
* document.querySelector(".user");
* document.querySelector("#user");
* document.querySelector("div");
*
* Returns one Element or null.
*
* ============================================================================
* querySelectorAll()
* ============================================================================
*
* Finds ALL elements matching a CSS selector.
*
* document.querySelectorAll(".user");
*
* Returns a STATIC collection.
*
* const users = document.querySelectorAll(".user");
* users.length;
* users[0];
*
* ============================================================================
* getElementsBy*
* ============================================================================
*
* Other searching methods:
*
* getElementsByClassName()
* getElementsByTagName()
* getElementsByName()
*
* These return LIVE collections.
*
* ============================================================================
* STATIC VS LIVE
* ============================================================================
*
* querySelectorAll()
* ```
    → STATIC
  ```
* ```
    → Does not automatically update when DOM changes.
  ```
*
* getElementsBy*
* ```
    → LIVE
  ```
* ```
    → Automatically reflects DOM changes.
  ```
*
* ============================================================================
* matches()
* ============================================================================
*
* Checks whether an existing element matches a CSS selector.
*
* element.matches(".user");
*
* Returns:
* true / false
*
* It does NOT search for an element.
*
* ============================================================================
* closest()
* ============================================================================
*
* Finds the nearest matching ancestor.
*
* button.closest(".card");
*
* Search direction:
*
* element
* ```
   ↑
  ```
* parent
* ```
   ↑
  ```
* parent
*
* Returns the matching Element or null.
*
* ============================================================================
* contains()
* ============================================================================
*
* Checks whether one node contains another.
*
* parent.contains(child);
*
* Returns true or false.
*
* ============================================================================
* QUICK REVIEW
* ============================================================================
*
* getElementById()
* ```
    → One element by id.
  ```
*
* querySelector()
* ```
    → First matching element.
  ```
*
* querySelectorAll()
* ```
    → All matching elements, STATIC.
  ```
*
* getElementsBy*
* ```
    → Collection, LIVE.
  ```
*
* matches()
* ```
    → Check an element against a selector.
  ```
*
* closest()
* ```
    → Search upward for the nearest match.
  ```
*
* contains()
* ```
    → Check whether a node contains another.
  ```
*
* ============================================================================
* KEY IDEA
* ============================================================================
*
* querySelector()    → ONE Element
* querySelectorAll() → STATIC Collection
* getElementsBy*     → LIVE Collection
* matches()          → CHECK
* closest()          → SEARCH UPWARD
* contains()         → CHECK CONTAINMENT
*

*/
