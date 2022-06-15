# Forms State Object
- If you have only 2 or 3 or 4 pieces of data in your form to care about, it may be okay to `create state for each` of them and then `update those states`.
- However, if you have more than 4, then it makes sense to `save your state in an object` instead of in separate variables. A benefit of this approach is that we'll receive 1 set of functions which will be used to `update the correct piece of state` in the object.

## Notes
- The code in this lesson is just for syntax reference.