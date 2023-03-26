# Authentication

Both the mobile app and the admin interface require a user to be authenticated
before being granted access.

## Creating users

To create a user select **Users** from the sidebar, click **Create**, fill
in the form and hit **Save**.

## Roles

Each user is given a role, which primarily are used to control what that user
is allowed to do in the admin interface (or directly via the API). There are
three pre-defined roles:

- **Admin:** allowed to create or modify anything within the admin interface.
- **Practitioner:** allowed to invite users and assign programs, but not allowed to
create or modify anything else within the admin interface.
- **Users:** not allowed to login to the admin interface at all.

## Granting access

To grant a user a particular level of access select **Users** in the sidebar,
find the user by email address, select the role and hit **Save**.

## Technical details

Authentication for the admin interface and mobile app is handled using
[Supabase Auth](https://supabase.com/docs/guides/auth/overview), with the API
requiring an access token for any `POST`, `PUT` or `DELETE` routes. Access
tokens are validated using the JWT secret provided by Supabase. For more details
see the [Total Rehab API repository](https://github.com/total-rehab/api).
