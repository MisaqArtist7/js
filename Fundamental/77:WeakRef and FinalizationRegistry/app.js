// // ==================== WeakRef ====================

// // WeakRef → creates a weak reference to an object
// // → Does NOT prevent garbage collection

// let user = { name: "John" };

// const ref = new WeakRef(user);

// // user → strong reference
// // ref  → weak reference


// // ==================== Strong vs Weak Reference ====================

// // Strong reference → keeps the object alive

// let user = { name: "John" };
// let admin = user;

// user = null;

// // Object is still alive
// // → admin still holds a strong reference


// // Weak reference → does NOT keep the object alive

// let user = { name: "John" };
// let ref = new WeakRef(user);

// user = null;

// // Object can now be garbage collected


// // ==================== deref() ====================

// // deref() → gets the referenced object

// const obj = ref.deref();

// // If object still exists:
// // → returns the object

// // If garbage collected:
// // → returns undefined

// if (obj) {
//     // object still exists
// } else {
//     // object was garbage collected
// }


// // ==================== WeakRef Cache ====================

// // WeakRef can be useful for caching large objects

// const cache = new Map();

// cache.set("image", new WeakRef(image));

// const cachedImage = cache.get("image")?.deref();

// if (cachedImage) {
//     // Use cached image
// } else {
//     // Download/create image again
// }


// // ==================== Garbage Collection ====================

// // WeakRef does NOT control when GC happens

// // Object may still exist even after
// // all strong references are removed

// // GC timing is unpredictable


// // ==================== FinalizationRegistry ====================

// // FinalizationRegistry → runs a cleanup callback
// // after a registered object is garbage collected

// const registry = new FinalizationRegistry((value) => {
//     console.log(`${value} was collected`);
// });


// // ==================== register() ====================

// // register(target, heldValue)

// let user = { name: "John" };

// registry.register(user, user.name);

// user = null;

// // When GC collects user:
// // → cleanup callback may run


// // ==================== heldValue ====================

// // heldValue → value passed to the cleanup callback

// const registry = new FinalizationRegistry((value) => {
//     console.log(value);
// });

// registry.register(user, "John");


// // ==================== unregister() ====================

// // unregister() → removes an object from the registry

// registry.unregister(token);

// // Usually the target object can also be used
// // as the unregister token


// // ==================== Important Warning ====================

// // FinalizationRegistry callback timing is NOT guaranteed

// // Callback may not run immediately
// // Callback may never run in some situations

// // Examples:
// // → browser tab is closed
// // → registry itself becomes unreachable


// // ==================== WeakRef + FinalizationRegistry ====================

// // WeakRef → allows object to be garbage collected
// // FinalizationRegistry → cleans dead cache entries

// // Useful for advanced memory-sensitive caches


// // ==================== Main Idea ====================

// // Strong reference
// // → Keeps object alive

// // WeakRef
// // → Does NOT keep object alive

// // deref()
// // → object | undefined

// // FinalizationRegistry
// // → cleanup callback after GC


// // ==================== Important ====================

// // WeakRef and FinalizationRegistry are advanced features
// // → Avoid them unless you have a specific use case

// // Normal Map / Set / cache
// // → Usually more predictable and easier to manage