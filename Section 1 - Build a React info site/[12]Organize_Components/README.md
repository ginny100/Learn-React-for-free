# Organize_Components
- Instead of defining all components in 1 file, we can put each component in a separate file. The name of each component file is exactly the same as the name of that component itself.
- Once you have created a component in a separate file, you need to export it so that it will be accessible somewhere else in the project. Often time, you'll use ```export default``` in this case.
- Next, outside of that component file, wherever you want to use that component, you need to ```import``` it with its relative path. When importing, it's not necessary to write the extension of the file component.

## Notes
- The code in this lesson is just for syntax reference