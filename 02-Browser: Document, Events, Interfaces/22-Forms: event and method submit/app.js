/**

* ============================================================================
* FORMS: SUBMIT
* ============================================================================
*
* Forms have a "submit" event that fires when the form is submitted.
*
* ============================================================================
* SUBMIT EVENT
* ============================================================================
*
* form.addEventListener("submit", event => {
* ```
    console.log("submitted");
  ```
* });
*
* The submit event can happen through:
*
* → Submit button
* → Enter key
* → Other standard form submission methods
*
* It is usually better to handle submission on the form itself
* rather than only listening for a button click.
*
* ============================================================================
* PREVENT DEFAULT SUBMISSION
* ============================================================================
*
* By default, the browser performs the form's normal submission.
*
* To stop that behavior:
*
* event.preventDefault();
*
* Example:
*
* form.addEventListener("submit", event => {
* ```
    event.preventDefault();
  ```
*
* ```
    // Handle form with JavaScript
  ```
* });
*
* This allows JavaScript to control what happens next.
*
* ============================================================================
* FORM.SUBMIT()
* ============================================================================
*
* form.submit();
*
* → Submits the form directly.
*
* Important:
*
* form.submit()
* does NOT trigger the "submit" event.
*
* Therefore a submit handler will not run.
*
* ============================================================================
* FORM.REQUESTSUBMIT()
* ============================================================================
*
* form.requestSubmit();
*
* → Performs a normal form submission.
*
* Unlike form.submit(), it triggers the "submit" event.
*
* Mental model:
*
* form.submit()
* → direct submission
* → no submit event
*
* form.requestSubmit()
* → normal submission
* → submit event fires
*
* ============================================================================
* FORMDATA
* ============================================================================
*
* FormData collects form control values:
*
* const formData = new FormData(form);
*
* Values can be retrieved with:
*
* formData.get("username");
*
* A form control normally needs a "name" attribute
* to be included in FormData.
*
* ============================================================================
* ITERATING FORMDATA
* ============================================================================
*
* for (const [name, value] of formData) {
* ```
    console.log(name, value);
  ```
* }
*
* FormData contains key/value pairs from the form.
*
* ============================================================================
* SUBMITTER
* ============================================================================
*
* If a form has multiple submit buttons:
*
* <button name="action" value="save">
* ```
    Save
  ```
* </button>
*
* <button name="action" value="publish">
* ```
    Publish
  ```
* </button>
*
* The submit event provides:
*
* event.submitter
*
* → The button that caused the submission.
*
* ============================================================================
* TYPICAL MODERN FLOW
* ============================================================================
*
* form submit
* ```
    ↓
  ```
* submit event
* ```
    ↓
  ```
* event.preventDefault()
* ```
    ↓
  ```
* new FormData(form)
* ```
    ↓
  ```
* process / validate data
* ```
    ↓
  ```
* fetch() → Backend / API
*
* ============================================================================
* MAIN MENTAL MODEL
* ============================================================================
*
* submit
* → form submission event
*
* preventDefault()
* → stop browser's default submission
*
* form.submit()
* → direct submission, no submit event
*
* form.requestSubmit()
* → normal submission + submit event
*
* new FormData(form)
* → collect form data
*
* formData.get(name)
* → get a specific value
*
* event.submitter
* → button that triggered submission
*
* ============================================================================
  */
