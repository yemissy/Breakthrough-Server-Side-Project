CREATE TABLE "sites" (
  "id" SERIAL PRIMARY KEY,
  "address" varchar,
  "start_date" date,
  "status" varchar
);


CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "email" varchar,
  "phone_number" numeric,
  "first_dose_date" date,
  "second_dose_date" date,
  "site_id" int NOT NULL
);



ALTER TABLE "users" ADD FOREIGN KEY ("site_id") REFERENCES "sites" ("id");
