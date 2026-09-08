/**

* ============================================================================
* STYLES AND CLASSES
* ============================================================================
*
* JavaScript can change CSS classes and inline styles of DOM elements.
*
* ============================================================================
* className
* ============================================================================
*
* `className` represents the entire `class` attribute.
*
* element.className = "menu active";
*
* Setting className replaces ALL existing classes.
*
* ============================================================================
* classList
* ============================================================================
*
* `classList` is used to manage individual CSS classes.
*
* element.classList.add("active");
* → Adds a class.
*
* element.classList.remove("active");
* → Removes a class.
*
* element.classList.toggle("active");
* → Adds the class if it doesn't exist.
* → Removes it if it already exists.
*
* element.classList.contains("active");
* → Returns true/false depending on whether the class exists.
*
* Multiple classes can be handled at once:
*
* element.classList.add("active", "large");
* element.classList.remove("active", "large");
*
* `classList` is a DOMTokenList and can be iterated.
*
* ============================================================================
* style
* ============================================================================
*
* `element.style` is used to read or change INLINE CSS styles.
*
* element.style.color = "red";
* element.style.backgroundColor = "black";
*
* CSS properties using `-` become camelCase in JavaScript:
*
* background-color → backgroundColor
* font-size        → fontSize
*
* ============================================================================
* cssText
* ============================================================================
*
* `style.cssText` can set multiple inline styles at once.
*
* element.style.cssText = `
* ```
    color: red;
  ```
* ```
    font-size: 20px;
  ```
* `;
*
* Setting cssText replaces the existing inline style value.
*
* ============================================================================
* REMOVE STYLE
* ============================================================================
*
* element.style.color = "";
*
* Or:
*
* element.style.removeProperty("color");
*
* ============================================================================
* CSS CUSTOM PROPERTIES
* ============================================================================
*
* CSS variables can be changed with setProperty():
*
* element.style.setProperty("--main-color", "red");
*
* Get their value with:
*
* element.style.getPropertyValue("--main-color");
*
* ============================================================================
* getComputedStyle()
* ============================================================================
*
* `element.style` only contains INLINE styles.
*
* To get the final CSS values calculated by the browser:
*
* const styles = getComputedStyle(element);
*
* styles.color;
*
* ============================================================================
* MAIN MENTAL MODEL
* ============================================================================
*
* className
* ```
    → Manage the entire class attribute.
  ```
*
* classList
* ```
    → Add / remove / toggle / check individual classes.
  ```
*
* style
* ```
    → Change inline CSS.
  ```
*
* getComputedStyle()
* ```
    → Read the final computed CSS.
  ```
*
* In real projects, prefer changing classes for UI states
* and let CSS control the visual appearance.
*

*/
