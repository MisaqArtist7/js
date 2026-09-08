/**

* ============================================================================
* DOM ATTRIBUTES AND PROPERTIES
* ============================================================================
*
* HTML attributes are values written in the HTML markup.
* DOM properties are values stored on the JavaScript DOM object.
*
* Example:
* <input id="user" value="Misaq">
*
* Attribute:
* value="Misaq"
*
* Property:
* input.value
*
* ============================================================================
* ATTRIBUTE METHODS
* ============================================================================
*
* element.hasAttribute(name)
* → Checks whether an attribute exists.
*
* element.getAttribute(name)
* → Gets the attribute value as a string.
*
* element.setAttribute(name, value)
* → Creates or changes an attribute.
*
* element.removeAttribute(name)
* → Removes an attribute.
*
* element.attributes
* → Collection of all attributes.
*
* ============================================================================
* ATTRIBUTE ↔ PROPERTY
* ============================================================================
*
* Standard HTML attributes usually have corresponding DOM properties.
*
* Example:
*
* input.id = "user";
* input.getAttribute("id"); // "user"
*
* But attributes and properties are NOT always the same thing.
*
* ============================================================================
* IMPORTANT: input.value
* ============================================================================
*
* The `value` attribute represents the initial/default value.
*
* The `value` property represents the current value.
*
* <input value="Misaq">
*
* input.value = "Ali";
*
* input.value;                // "Ali"
* input.getAttribute("value"); // "Misaq"
*
* ============================================================================
* BOOLEAN ATTRIBUTES
* ============================================================================
*
* Some properties are boolean:
*
* input.checked
* input.disabled
* input.selected
*
* Example:
*
* input.checked = true;
*
* The property gives a boolean value, while the HTML attribute
* represents whether the attribute exists.
*
* ============================================================================
* href EXAMPLE
* ============================================================================
*
* The attribute can contain the exact value written in HTML:
*
* <a href="/about">About</a>
*
* link.getAttribute("href"); // "/about"
*
* The property may return a resolved/full URL:
*
* link.href;
*
* ============================================================================
* data-* AND dataset
* ============================================================================
*
* Custom data should use `data-*` attributes.
*
* <div data-user-name="Misaq"></div>
*
* Access through `dataset`:
*
* element.dataset.userName; // "Misaq"
*
* Dataset names convert:
*
* data-user-name → dataset.userName
*
* ============================================================================
* GENERAL RULE
* ============================================================================
*
* Use DOM properties for normal DOM manipulation.
*
* Use attributes when:
* → You need the exact HTML attribute value.
* → You work with custom `data-*` attributes.
* → You need to add, check, or remove an attribute.
*
* Main mental model:
*
* Attribute → HTML markup
* Property  → DOM JavaScript object
*

*/
