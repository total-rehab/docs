# Authentication

Both the mobile app and the admin interface require a user to be authenticated
before being granted access.

## Roles

Each user is given a role, which primarily are used to control what that user
is allowed to do in the admin interface (or directly via the API). There are
three pre-defined roles.

- **Admin:** allowed to create or modify anything within the admin interface.
- **Practitioner:** allowed to invite users and assign programs, but not allowed to
create or modify anything else within the admin interface.
- **Users:** not allowed to login to the admin interface at all.
