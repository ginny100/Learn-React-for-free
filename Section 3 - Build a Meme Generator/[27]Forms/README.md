# Forms
- In `HTML`, you would create a form and give it the `action` and `method` (usually `POST`) attributes, and then submit your form through some sort of `submit button`. After that, the `PHP` would pick up information from there and process your form.
=> Long story short, when you `submit` the form, all information will be gathered immediately at the end of the process, and then it gets submitted right after being gathered.
- In `React`, the `selector` will get the form, and then an `event listener` will submit it. The function is run whenever the form is submitted would simple gather all the information together and then submit it through an `API` somehow.
=> Instead of waiting until the very end of the process in filling up the form when the form is submitted and data is gathered, we would instead create a `state` and `update state` for every keystroke change, textbox change, or radio button change, etc. Therefore, we are watching for every change in our form. When the time for submitting the form comes, there's no more work related to be done.
- Learn more about [React Forms](https://reactjs.org/docs/forms.html)

## Notes
- The code in this lesson is just for syntax reference.