# trainboot

### About -

- Trainboot is an advanced Employee Training and Orientation Application designed to cater to the needs of organizations seeking efficient employee training and management solutions.
- The primary objective of Trainboot is to provide organizations with a comprehensive platform to train their employees effectively while efficiently managing their tasks, trainings, announcements, and related activities.
- Presently, Trainboot offers two distinct interfaces tailored to suit the requirements of both administrators and employees within the organization. These interfaces empower administrators with the necessary tools to oversee and streamline employee training processes, while enabling employees to conveniently access and engage with the training materials and resources provided.

### Credentials -

- The App currently supports one Organization, which has it’s Admin, and that Organization has multiple Employees associated with it. For the Admin Panel, we have restricted the login credentials, not everyone can be logged in inside the Admin Panel. The credentials can be found below for the Admin Panel -
    - **Email** - trainboot@admin.com
    - **Password** - trainboot@123
- For the Employees Panel, currently there are no restrictions, anyone can be an Employee for the Organization.
- To ensure safety every organization will be given an Access code also, which currently is public but when the App goes into final production it will be encrypted and the Access code will only be provided to Organization and it’s employees.
    - **Access Code** - PSA001

### Admin Panel -

The Admin Panel is the Place where Admin for an organization can manage it’s Employees. The Admin Panel supports features such as -

- **Tasks** - Admin can assign Task to a Particular Employee associated with it’s organization. These tasks can be marked as completed from the Employee side, once they are done.
- **Announcements** - Admin also has the privilege to create Announcement for all it’s Employees. Announcements are not Employee Specific, instead they are visible to all.
- **Training** - Admin can also Add new Trainings for it’s Employees. Adding trainings for the Employees is quiet a lengthy process, but we are trying our best to make it as simple as possible in future. The way Add Training Feature works -
    - Currently we are using [bunny.net](http://bunny.net) as our CDN for video streaming.
    - Admin will be given access to [bunny.net](http://bunny.net) account, where he can easily add videos.
    - After adding the video on [bunny.net](http://bunny.net), Admin has to Provide few details under Add Training section in Admin Panel, like Title, Instructor, Thumbnail, Source, Summary. All these parameters are provided by bunny.net, which the Admin has to copy paste in the Add Training Form.
    - There also Exists [bunny.net](http://bunny.net) API, which we will integrate in future, using which Add Training Feature will become less hectic for the Admin.
- **Employee Dashboard** - The Admin Panel also has a Employee Info Dashboard, where Admin can view all the Employees of it’s Organization and view Various Analytics related to it like tasks completed, ongoing trainings, completed trainings, assigned Tasks, etc.

### Employee Panel -

The Employee Panel supports various functionalities like access to Training materials, marking Training as Completed, Viewing Tasks, marking them as completed, Analytics of your progress, etc.

- **Trainings -** Employee can view and enroll for a training, that is being added by the Admin. Employee can also mark it as completed once it’s done.
- **Tasks -** Employees can view Tasks, assigned to them by their Admin. Once done, they can mark it completed.
- **Announcements -** There exists an Announcements Panel on the right of the Admin Dashboard, which is a read-only Panel.
- **Discover -** The Discover section is the Place, where Employees can discover their colleagues and Get in Touch with them.
- **Analytics -** On the Top of Dashboard, there exists a small Analysis section, where Employee can get an Analysis about the Ongoing Trainings, Tasks Completed, Trainings completed.
