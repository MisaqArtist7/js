/**
 * ============================================================================
 * 🚀 GARBAGE COLLECTION (MEMORY MANAGEMENT)
 * ============================================================================
 * Memory management in JavaScript is performed automatically and invisibly.
 * We create primitives, objects, functions... All that takes memory.
 * The JavaScript engine runs a background process called "Garbage Collector" 
 * that monitors all objects and removes those that have become unreachable.
 */

/* ============================================================================
 * 1. REACHABILITY & ROOTS
 * ============================================================================ */

// The main concept of memory management in JavaScript is "Reachability".
// "Reachable" values are those that are accessible or usable somehow.
// They are guaranteed to be kept in memory.

// There is a base set of inherently reachable values, called "Roots":
// 1. The currently executing function, its local variables and parameters.
// 2. Variables and parameters for other functions on the current chain of nested calls.
// 3. Global variables.
// 4. (Other internal, engine-specific values).

// Any other value is considered reachable if it's reachable from a root 
// by a reference or by a chain of references.


/* ============================================================================
 * 2. A SIMPLE EXAMPLE
 * ============================================================================ */

// Here, the global variable "user" references the object {name: "John"}
let user = { name: "John" };

// If the value of "user" is overwritten, the reference is lost:
user = null;

// Now, the object {name: "John"} becomes unreachable. 
// There's no way to access it. The Garbage Collector will trash the data 
// and free the memory.


/* ============================================================================
 * 3. MULTIPLE REFERENCES
 * ============================================================================ */

let person = { name: "Ali" };
let admin = person; // Both variables reference the same object

person = null; // We overwrite one reference

// The object is STILL reachable via the 'admin' global variable, 
// so it stays in memory. It will only be deleted if we also do: admin = null;


/* ============================================================================
 * 4. INTERLINKED OBJECTS & UNREACHABLE ISLANDS
 * ============================================================================ */

// It is possible for objects to reference each other, creating a complex structure.
// However, if the ENTIRE structure loses its connection to a "Root", 
// the whole structure becomes an "Unreachable Island" and gets deleted.

let family = {
    father: { name: "John" },
    mother: { name: "Ann" }
};

// They can link to each other:
family.father.wife = family.mother;
family.mother.husband = family.father;

// If we remove the main reference to the family:
family = null;

// Even though 'father' and 'mother' still reference each other internally,
// they are completely disconnected from any Root. 
// The Garbage Collector will remove both of them from memory.


/* ============================================================================
 * 5. THE INTERNAL ALGORITHM: MARK-AND-SWEEP
 * ============================================================================ */

// The basic garbage collection algorithm is called "mark-and-sweep".
// It periodically performs the following steps:
//
// 1. MARK: The garbage collector takes roots and "marks" (remembers) them.
// 2. TRAVERSE: Then it visits and "marks" all references from them.
// 3. REPEAT: It visits marked objects and marks their references. 
//    All visited objects are remembered, so it doesn't visit the same object twice.
// 4. SWEEP: All objects except marked ones are removed.

// Modern JavaScript engines apply advanced optimizations like:
// - Generational collection (Splitting objects into "new" and "old")
// - Incremental collection (Splitting GC into pieces to avoid delays)
// - Idle-time collection (Running GC only while the CPU is idle)


/**
 * ============================================================================
 * SUMMARY
 * ============================================================================
 * - Garbage collection happens automatically. We cannot force or prevent it.
 * - Objects are retained in memory while they are reachable.
 * - Being referenced is not the same as being reachable (unreachable islands).
 * ============================================================================
 */