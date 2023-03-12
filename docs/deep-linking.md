# Deep linking

We can link to certain screens in the app using the `totalrehab` protocol.
A full list of the available links can be found below.

Note that because the entire app is highly personalised sharing some of these
links with a general audience won't really work. For example, if the user has
already selected a program then sending them to the programs screen probably
doesn't make sense. Similarly, if they have not selected a program then we
cannot show them the schedule screen. Therefore, these links are provided
primarily for reference and could be used in future with a service such as
[Airship](https://www.airship.com/) (along with user segments).

## Available links

| URL                      | Description |
|--------------------------|-------------|
| `totalrehab://schedule`  | Open the schedule screen.                       |
| `totalrehab://programs`  | Open the programs screen.                       |
| `totalrehab://guide/:id` | Open a guide (the ID can be found in the admin) |
