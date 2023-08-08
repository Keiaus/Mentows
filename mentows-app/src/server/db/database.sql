CREATE TABLE IF NOT EXISTS public.useraccountinfo
(
    userfirstname character varying(200) COLLATE pg_catalog."default",
    userlastname character varying(200) COLLATE pg_catalog."default",
    userusername character varying(200) COLLATE pg_catalog."default",
    useremail character varying(200) COLLATE pg_catalog."default",
    userphone character varying(200) COLLATE pg_catalog."default",
    userdob character varying(200) COLLATE pg_catalog."default",
    userpassword character varying(200) COLLATE pg_catalog."default",
    userid integer NOT NULL DEFAULT 'nextval('useraccountinfo_userid_seq'::regclass)',
    CONSTRAINT useraccountinfo_pkey PRIMARY KEY (userid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.useraccountinfo
    OWNER to postgres;