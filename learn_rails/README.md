# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

## Type Checking: Sorbet

[sorbet overview](https://sorbet.org/docs/overview)
[sorbet adopting](https://sorbet.org/docs/adopting)

- `bundle exec srb tc` > type checks every Ruby file in the current folder
- `bin/tapioca dsl` - (Re)generate RBIs for all DSLs such as Rails using runtime reflection
- `bin/tapioca gems --all` - (Re)generate RBIs for all gems using runtime reflection
- `bin/tapioca todo` - (Re)generate the TODO RBI file (for missing constants)

Most kinds of errors are silenced by default, so to opt into more checks you need to add a `# typed:` comment to the top of the file followed by the strictness level: `ignore`, `false`, `true`, `strict`, or `strong`. See the [static checks](https://sorbet.org/docs/static) docs for more info.
