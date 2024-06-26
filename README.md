### Ojective
In this project, let's build an **Appointments App** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/appointments-app-output.gif" alt="appointments app output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/appointments-app-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/appointments-app-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the list of appointments should be empty and the title input and date input should be empty
- When non-empty values are provided for title and date and the **Add** button is clicked,
  - A new appointment should be added to the list of appointments
  - The value inside the input elements for title and date should be updated to their initial values
- When the **Star** on an appointment is clicked, the appointment should be starred
- The status of the **Starred** filter is updated by clicking on it
- When the **Starred** filter is active, all the starred appointments should be filtered and displayed
- When the **Starred** filter is inactive, the list of all appointments should be displayed
</details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- The HTML input element with the type `date` is designed for the user to select the date from a date picker

  ```jsx
  <input type="date" />
  ```

- The `format` function in the date-fns package can be used to get the formatted date string in the given format

  ```jsx
  import {format} from 'date-fns'

  console.log(format(new Date(2021, 19, 07), 'dd MMMM yyyy, EEEE')) // 19 July 2021, Monday
  ```

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- For the `format` function, pass the format string `dd MMMM yyyy, EEEE` as the second argument
- The star button in each appointment should have the data-testid as **star**
- The star image in each appointment should have alt as **star**

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png](https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png) alt should be **appointments**
- [https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png](https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png)
- [https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png](https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png)

</details>





