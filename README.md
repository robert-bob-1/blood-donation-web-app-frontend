## Login/Register
- Login and register pages are built as forms with validators and error messages incorporated.
![image](https://user-images.githubusercontent.com/90975931/235752405-a0b33ed0-c702-4d41-98ed-11e53526377c.png)
![image](https://user-images.githubusercontent.com/90975931/235752332-5783abc8-9625-4fb6-aac6-822a55c33455.png)

## Donor page
- Donors can see all existing locations they can create appointments for; validations are set so that appointments can only be created on days for which the locations have free spots
- Location field is an auto-complete field
- They can also 
   - see all appointments
   - edit/delete account
- Donors also receive Emails and SMS's when making appointments/a day before appointments
![image](https://user-images.githubusercontent.com/90975931/235755507-6692cacd-b92f-4a5e-8e5a-028577b7b00c.png)
![image](https://user-images.githubusercontent.com/90975931/235752507-aeefc7e9-6480-4041-b41a-dd6ee2fa9ce8.png)
![image](https://user-images.githubusercontent.com/90975931/235752772-38f6e07c-bc88-4ee8-9db7-0de31b74507b.png)
![image](https://user-images.githubusercontent.com/90975931/235753163-80a31fec-240e-4e7a-b1b8-8ef78ba3e2d0.png)
![image](https://user-images.githubusercontent.com/90975931/235754461-484cb10e-a5d8-45eb-8b47-276b54601f95.png)

## Doctor page
- Doctor's main input is validating appointments
- doctors can choose multiple ways of filtering appointments.
- They can see each locations appointments
![image](https://user-images.githubusercontent.com/90975931/235754998-ff7e56dd-36ba-476e-bf7a-6afc17a8d64a.png)
- They can see today's appointments
![image](https://user-images.githubusercontent.com/90975931/235755257-6dbbb598-99a0-4e31-941c-1d624c958284.png)
- They can see all appointments. Since there can be a large number of appointments they are shown and pulled from the backend using pagination (at most 20 appointments are received from the backend/shown at any point in time)
![image](https://user-images.githubusercontent.com/90975931/235755739-cd81fb3f-0cd8-4b1b-9a3d-12b858a696b8.png)

## Admin page 
- Admins can see all doctors and CRUD them.
![image](https://user-images.githubusercontent.com/90975931/235756380-705806d8-9130-4252-8f4b-56698e8454d0.png)
![image](https://user-images.githubusercontent.com/90975931/235756404-2e67d659-85db-47d6-a00e-2d18615418af.png)

- All users can logout using the logout button in the header
