# Architecture

This page summarises the software architecture used to deliver the Total Rehab
mobile app.

## Database

A [PostgreSQL](https://www.postgresql.org/) database, hosted by
[Supabase](https://supabase.com/), is used to store all of the content presented
in the mobile app and on the website. We use [Prisma](https://www.prisma.io/)
to help manage the database schema and perform migrations.

## API

An [OpenAPI](https://www.openapis.org/)-compliant API, based on
[Express](https://expressjs.com/), is used as the interface for the database.
All requests to retrieve or manage data via the app or website go via this API.

[View on GitHub](https://github.com/total-rehab/api)

## Mobile app

The mobile app is built using [React Native](https://reactnative.dev/) and
[Expo](https://expo.dev/). It includes a type-safe API client that is generated
using the [oac](https://github.com/jambff/oac) package.

[View on GitHub](https://github.com/total-rehab/app)

## Admin

The admin interface is built using [React](https://reactjs.org/) and
[React Admin](https://marmelab.com/react-admin/).

[View on GitHub](https://github.com/total-rehab/admin)
