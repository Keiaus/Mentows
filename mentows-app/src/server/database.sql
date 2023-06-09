CREATE TABLE IF NOT EXISTS public.useraccountinfo
(
    userid serial not null,
    userfirstname varchar(200),
    userlastname varchar(200),
    userusername varchar(200),
    useremail varchar(200),
    userphone varchar(200),
    userdob varchar(200),
    userpassword varchar(200),
    CONSTRAINT useraccountinfo_pkey PRIMARY KEY (userid)
)

insert into useraccountinfo (userfirstname, userlastname, userusername, useremail, userphone, userdob, userpassword)
values ('Toby', 'Farquaad', 'tfar12', 'tfar@gmail.com', '9176654456', '01/12/1998', 'jigglyPuff12@@');