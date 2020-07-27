# DeliveryKaAdda

Creating DeliveryKaAdda API using Node.js, MongoDB, Mongoose, Express Middle-ware during my Free time. These API's will be consumed by Front end website which will be built using ReactJS and Mobile Apps using React Native.

Aim of this project is to help local communities and create more Jobs in Rajahmundry. I am hoping to go live in 1 month with ReactJS app.

`Data Modelling`

Delivery Ka Adda Data Model:
Data Sets needed for the Application
1.	boys
2.	services
3.	users
4.	reviews
5.	locations
6.	reviews
7.	bookings

Relationships:
1.	`Relationship between users and reviews:` This relationship is clearly 1:MANY relationship as 1 user can write multiple reviews but 1 review can only belong to 1 user. So I choose to model this as parent referencing, as a user can write a lot of reviews. So the review keeps a reference of User. This will make sure that arrays are grown indefinitely. Having an ID on the reviews will allows to have access the user details. (userID:  <id>)
2.	`Relationship between boys and reviews:` It is very similar to users and reviews relationship. 1:MANY relationship as 1 boy can have multiple reviews but one review is only about 1 boy. Like the last relationship, I choose parent referencing for this relationship, with boys being the parent and review being child (boyID: <id>).
3.	`Relationship between boys and locations:` Each boy can provide service in two to three locations and each location can be served by multiple boys. So a two way reference is a good fit for this scenario(FEW-FEW). Instead of normalizing the locations into its own data-set, I would prefer embedding them into the boy data-set. 
4.	`Relationship between services, boys, users and bookings:` There is a relationship between boys and bookings, services and bookings and users and bookings. So a booking is created each time a user hires a delivery_boy(boy) for a specific service he/she needs. The relationship I choose for these is parent(users, services and boys) to child(bookings). All the the relations are 1:MANY as 1 boy can have many bookings but one booking can only belong to one boy and it is the same with users. One user can have multiple bookings, but a booking can only belong to one of the users. So I will be using parent referencing as a result on each booking we are going to have an ID of boy, service and user (boyID: <id>, userID: <id>, serviced: <id>) 

