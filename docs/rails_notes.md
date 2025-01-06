# Ruby on Rails

## Getting Started

1. Generate a new Rails app.
1. Generate a controller and add an action.
1. Create a route that maps a URL to the controller action.
1. Create a view with HTML and CSS.
1. Run the local web server and preview the app in the browser.

### Generate a new Rails app

1. `rails new MySite` => creates a new Rails app named "MySite" & generated folders
1. `cd MySite` => enter the MySite directory
1. `bundle install` => installs all software packages needed by the Rails app, called gems. Listed in the file `Gemfile`
1. `rails server` => started the Rails dev server so you can preview the app in browser at `http://localhost:4001` (called WEBrick)

#### Request/Response

When you visit `http://localhost:4001` it initiates the **request/response cycle**

- The browser makes a request for the URL `http://localhost:4001`.
- The request hits the Rails router in `config/routes.rb`. The router recognizes the URL and sends the request to the controller.
- The controller receives the request and processes it.
- The controller passes the request to the view.
- The view renders the page as HTML.
- The controller sends the HTML back to the browser for you to see.

### Create a controller

```shell
rails generate controller Pages
```

This command generates a controller called "Pages" in the `app/controllers` directory.

Once it's finished running:

1. Open `app/controllers/pages_controller.rb`
1. Add a method `home` within the class `PagesController`
1. Methods in Rails controllers are also referred to as "controller actions"
   b. So another way to phrase this is that we added a `home` action to the Pages controller

```ruby
class PagesController < ApplicationController

  def home
  end

end
```

There are [seven standard controller actions](https://www.codecademy.com/articles/standard-controller-actions) for doing common operations with data (`index`, `show`, `new`, `create`, `edit`, `update`, and `destroy`)

If a controller looked like this:

```ruby
class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @messages = Message.all
  end
end
```

And routes contained this:

```ruby
get 'messages', to 'messages#index'
```

When a user visits `http://localhost:4001/messages`, the routes file maps this request to the Messages controller’s `index` action which retrieves all messages from the database and stores them in the variable `@messages` which is passed on the the view.

### Create a Route

Open `config/routes.rb`

Within the `Rails.application.routes.draw` block:

```ruby
get 'welcome', to: 'pages#home'
```

This makes it so when a user visits `http://localhost:4001/welcome` the router will send the request to the Pages controller's `home` action

Add the following configure a route for when a user visits `http://localhost:4001`

```ruby
root 'pages#home'
```

To map URLs to a controller's seven standard actions (below example for a `Signups` controller)

```ruby
resources :signups
```

In the terminal, you can then run `bundle exec rails routes` to view all of the new URLs that the resource route created.

You can name a route using `as:`

```ruby
get '/tags/:id', to: 'tags#show', as: :tag
```

Rails will then automatically generate a helper method named `<name>_path` (ex: `tag_path`). You can then use that method within an `each` block to generate a URL to the specific entry in db's path.

For example:

```ruby
<% @tags.each do |t| %>
<div class="card col-xs-4">
  <%= image_tag t.image %>
  <h2> <%= t.title %> </h2>
  # generates a URL to a specific tag's path. ex: /tag/1
  <%= link_to "Learn more", tag_path(t) %>
</div>
<% end %>
```

### Create a View

Add html to `app/views/pages/home.html.erb`

Visit `http://localhost:4001/welcome` to view the html in action\

## Saving Data

### How a database fits into the request-response cycle

1. When you type http://localhost:4001/welcome, the browser makes a request for the URL /welcome.
1. The request hits the Rails router.
1. The router maps the URL to a controller action to handle the request.
1. The controller action receives the request, and asks the model to fetch data from the database.
1. The model returns data to the controller action.
1. The controller action passes the data on to the view.
1. The view renders the page as HTML.
1. The controller sends the HTML back to the browser.

[](https://content.codecademy.com/projects/3/request-response-cycle-dynamic.svg)

### Create a model & generate an initial schema

```shell
rails generate model YourModel
```

Causes Rails to create two files:

1. a model file in `app/models/yourmodel.rb`. The model represents a table in the database, but is concerned with governing how the application interacts with the data in the database.
1. a migration file in `db/migrate/`. Migrations are a way to update the database. Migration files are compiled into the `db/schema.rb` file, which dictates the structure and rules of the database.

The migration file contains a few things:

1. `change` method: tells Rails what change to make to the database
1. The initial migration file generated by `rails generate model` uses the `create_table` method to create a new table in the database for the model
1. By default, `create_table` includes the line `t.timestamps` which is a Rails command that creates two columns in the model's table called `created_at` and `updated_at`. These are automatically set when an entry to the table is created or updated.
   a. You can add columns to your table inside the `create_table` block using the format of: `<table>.<type> :<name>`
   b. [Supported types](https://guides.rubyonrails.org/v3.2/migrations.html#supported-types)
   b. [Explanation of column types](https://stackoverflow.com/questions/11889048/is-there-documentation-for-the-rails-column-types)

```ruby
class CreateTags < ActiveRecord::Migration[7.0]
  def change
    create_table :tags do |t|
      t.text :content
      t.string :title
      t.timestamps
    end
  end
end
```

```shell
bundle exec rake db:migrate
```

- Instructs the bundler to execute (`exec`) a rake task, in this case, `migrate`, on the database (`db`)
- Running this updates the schema `db/schema.rb` and updates database with the new data schema

### Model vs Schema

An example of the difference between the concerns of the model vs the concerns of the schema:

- Your application cares about the user's age, however, what makes more sense to store in the database is the user's date of birth because while age can change relative to the current date, date of birth does not
- So you write your `db/migrate/1234_create_users.rb` migration file (which generates the `db/schema.rb`) to include a `date_of_birth` column in the `users` table
- Then you add a method `age` to the `User` model, which takes the current date and subtracts the user's date of birth from the database.
- The application then uses the current user's age as produced by the model for logic or display on screen or what have you

### Database interactions

- `bundle exec rake db:seed` : Seeds the database with sample data from `db/seeds.rb`
- Using the `new` and `create` actions (two of the [seven standard Rails actions](https://www.codecademy.com/article/standard-controller-actions))
- To query the database, run `rails console` in your application folder. From there you can run queries such as `ModelName.first` to retrieve the first record for that model from the database (ex: `Signup.first` for the `Signup` model)
- `bundle exec rake db:reset` : re-sets the database. Good to run if something weird's happening with your database.

## Forms

[](https://content.codecademy.com/projects/3/two-turns-post.svg)

### Turn 1

In the first turn of the request/response cycle, the page with the form is displayed to the user.

1. A user opens his browser, types in a URL, and presses Enter.
1. When the user presses Enter, the browser sends a GET request for that URL.
1. The GET request hits the Rails router (config/routes.rb). The router maps the URL to the correct controller action to handle the request.
1. The action receives the GET request and passes it on to the view.
1. The view renders the page as HTML.
1. The controller sends the HTML back to the browser. The page loads and the user sees the page with the form.

### Turn 2

When a user submits the form, it triggers the second turn of the request/response cycle, where the submitted data is saved into the database.

1. The user fills in the form and submits the form.
1. When the user submits the form, the browser sends a POST request to the Rails app.
1. The POST request hits the Rails router. The router maps the POST request to the correct controller action.
1. The action receives the POST request. The action retrieves the submitted data from the form, and uses the model to store the data into the database.
1. The model completes its task.
1. The controller action passes the request on to the view.
1. The view renders the page as HTML.
1. The controller sends the HTML back to the browser. The page loads and the user sees it.

[source](https://www.codecademy.com/article/request-response-cycle-forms)

## Templating

The default web templating languages in Rails is embedded Ruby or ERB.

`filename.html.erb` files are template files which contain variables and control flow statements.

Templates can be used to loop through and display data from a database, for example.

```ruby
<% @messages.each do |message| %>
  <div class="message">
    <p class="content"><%= message.content %></p>
    <p class="time"><%= message.created_at %></p>
  </div>
<% end %>
```

- `<% @messages.each do |message| %>` iterates through each message in `@messages` array.
  - You create `@messages` in the Messages controller's index action.
- For each message, we use `<%= message.content %>` and `<%= message.created_at %>` to display its content and the time when it was created.

```ruby
<%= form_for(@destination) do |f| %>
  <%= f.text_field :name %>
  <%= f.text_field :description %>
  <%= f.submit "Update", class: "btn" %>
<% end %>
```

```ruby
<%= form_for(@signup) do |f| %>
  <div class="field">
    <%= f.label :signup %><br>
    <%= f.text_field :email, :placeholder => "Email" %>
  </div>
  <div class="actions">
    <%= f.submit "Join", :class => "btn" %>
  </div>
<% end %>
```

### Layout file

The layout file (`app/views/layouts/application.html.rb`) lets you build a base view that contains all the common elements of your site, such as CSS files, the header, and the footer. The `<%= yield %>` defines the portion of the layout that child templates can fill in.

## Associations

### Has Many / Belongs To

You can create multiple models that have associations. For example, if you have two models named `Tag` and `Destination`

- `has_many :destinations` in the `Tag` class denotes that a single Tag can have multiple Destinations
- `belongs_to :tag` in the `Destination` class denotes that each Destination belongs to a single tag

Some other examples of the `has_many`/`belongs_to` pair are:

- a Library has many Books; a Book belongs to a Library
- an Album has many Photos; a Photo belongs to an Album
- a Store has many Products; a Product belongs to a Store

Use the `t.references :<model>` to add a references column to one model's database table that adds a _foreign key_ pointing to another table (Foreign keys are references to rows on other tables).

The route `get '/tags/:id', to: 'tags#show', as: :tag` means:

- When a user visits `http://localhost:4001/tags/1` the route will send the request to the Tags controller's show action with `{id: 1}` in `params`
- The `@destinations = @tag.destinations` in the show action retrieves all the destinations that belong to the tag and stores them in `@destinations`
  - the `has_many`/`belongs_to` association lets us query for destinations like this
- The tag and its destinations are sent to the view to be displayed

Below code uses `params` to find a destination by `id` and save it to `@destination`

```ruby
def show
  @destination = Destination.find(params[:id])
end
```

Let's say you have a Review model & a Book model, and the Review migration create_table has a `t.references :book` column. If you want to look up all the Reviews for a given Book in your database in the rails console:

```rails
Review.find_by!(book_id: <id>)
```

Ex: `Review.find_by!(book_id: 1)`

### Many to Many

Many-to-many relationships are needed to model data where both models can have many of the other type. For example, a movie has many actors in the cast, but each actor also has many movies they've bene in.

```ruby
class Movie < ApplicationRecord
  has_many :parts
  has_many :actors, through: :parts
end

class Actor < ApplicationRecord
  has_many :parts
  has_many :movies, through: :parts
end
```

The `has_many :through` association sets up a many-to-many relationship between multiple models.

## Authentication

How authentication fits into the [request/response cycle](https://www.codecademy.com/articles/request-response-cycle-forms) when a user signs up for an app:

1. User visits the signup page
   a. Browser makes an HTTP GET req for the URL `/signup`
   b. Rails router maps the url `/signup` to the Users controller's `new` action
   c. The `new` action handles the request and passes it to the view
   d. The view displays the signup form
2. User fills in and submits the form
   a. Browser sends form data via HTTP POST req to the app
   b. Rails router maps req to Users controller's `create` action
   c. `create` action saves data to the database, redirects to another page, and creates a new _session_

A **session**:

- is a connection b/t the user's computer & the server running the Rails app.
- starts with the user logs in
- ends when the user logs out

How authentication fits into the request/response cycle when a user logs into an app:

1. User visits the login page
   a. Browser makes an HTTP GET req for the URL `/login`
   b. Rails router maps the url `/login` to the Sessions controller's `new` action
   c. The `new` action handles the request and passes it to the view
   d. The view displays the login form
2. User fills in and submits the form
   a. Browser sends form data via HTTP POST req to the app
   b. Rails router maps req to Sessions controller's `create` action
   c. `create` action verifies the user exists in the database
   d. If the user exists: `create` logs them in by creating a new _session_
   e. Otherwise, reloads the login page

### Signup

Need 5 parts to add signup machinery to an app:

1. a model
2. a controller
3. routes
4. views
5. logic for sessions

Add the class method `has_secure_password` to the User model to add functionality to save passwords securely.

It uses an algorithm called `bcrypt` so you'll need to make sure that gem is installed.

```ruby
class User < ApplicationRecord
    has_secure_password
end
```

In the `User` migration file, add `t.string :password_digest` in `create_table` to store the encrypted password

The `has_secure_password` method uses the bcrypt algorithm to securely hash a user's password, which then gets saved in the `password_digest` column

When a user logs in again, `has_secure_password` will collect the submitted password, hash it with bcrypt, and check if it matches the hash in the database.

Add a `new` action to the User controller

Add a route that maps requests for the URL `/signup` to the Users controller's `new` action (and add `resources :users`)

Use `form_for` in the app/views/users/new.html.erb to create a table to collect user input

```ruby
<%= form_for(@user) do |f| %>
  <%= f.text_field :first_name, :placeholder => "First Name" %>
  <%= f.text_field :last_name, :placeholder => "Last Name" %>
  <%= f.text_field :email, :placeholder => "Email" %>
  <%= f.text_field :password, :placeholder => "Password" %>
  <%= f.submit "Create an Account", :class => "btn-submit" %>
<% end %>
```

In the Users controller add a private `user_params` method to save the form data to the database

```ruby
private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
```

Add a public `create` action to the Users controller to create a new session & re-direct the user after signing up

```ruby
def create
  @user = User.new(user_params)
  if @user.save
    # create new session & store as key/value pair
    session[:user_id] = @user.id
    # redirect to root
    redirect_to '/'
  else
    redirect_to '/signup'
  end
end
```

### Login

Need 5 parts to add login machinery to an app:

1. a model
2. a controller
3. routes
4. views
5. logic for sessions

Create a Sessions controller & add `new` & `create` actions to it

```ruby
def new
end

def create
  @user = User.find_by_email(params[:session][:email])
  if @user && @user.authenticate(params[:session][:password])
    session[:user_id] = @user.id
    redirect_to '/', allow_other_host: true
  else
    redirect_to '/login', allow_other_host: true
  end
end
```

Add a route that maps requests for the URL `/login` to the Sessions controller's `new` action

Add a route that maps post requests to the URL `/login` to the SEssions controller's `create` action

```ruby
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
```

In the app/views/sessions/new.html.erb to create a table to collect user input.

Use to the name of the resource and corresponding URL.

- In the signup form, we used `form_for(@user) do |f|` since we had a `User` model.
- For the login form, we don't have a `Session` model, so we use `form_for(:session, url: login_path)` to pass in the name of the resource & corresponding URL as parameters

```ruby
<%= form_for(:session, url: login_path) do |f| %>
  <%= f.email_field :email, :placeholder => "Email" %>
  <%= f.password_field :password, :placeholder => "Password" %>
  <%= f.submit "Login", class: "btn-submit" %>
<% end %>
```

### Logout

Add a `destroy` action to the Sessions controller that sets the session hash to nil and redirects to the root path

```ruby
def destroy
  session[:user_id] = nil
  redirect_to '/'
end
```

Add a route that maps the URL `/logout` to the Sessions controller's `destroy` action

```ruby
delete '/logout', to: 'sessions#destroy'
```

### Verify login

To check if a user is logged in before sending redirect requests to root:

- add a `current_user` method to the Applicaiton controller that:
  - checks if there's a user in the database with a given session id
  - if there is, it means the user is logged in. Set `@current_user` to that user
  - otherwise, the user is logged out. `@current_user` should remain `nil`
  - [||= syntax](https://stackoverflow.com/questions/995593/what-does-or-equals-mean-in-ruby)
- add a `require_user` method to the Applicaiton controller
  - use `current_user` method to redirect logged out users to the login page
  - [unless keyword](https://signalvnoise.com/posts/2699-making-sense-with-rubys-unless)

```ruby
# makes current_user method available in the views
helper_method :current_user

def current_user
  @current_user ||= User.find(session[:user_id]) if session[:user_id]
end

def require_user
  redirect_to '/login' unless current_user
end
```

By default, all methods defined in Application Controller are already available in the controllers.

However to make a methods defined Application Controller available in the views, you need to add a line like this:

```ruby
helper_method :current_user
```

Then, in the Controller class with routes to content you only want logged in users to see, use the `before_action` command in the first line inside the class.

For example, if you only wanted the `:index` and `:show` actions to run for logged in users >

```ruby
before_action :require_user, only: [:index, :show]
```

Example using `current_user` to update nav items depending on if a user is logged in or not:

```ruby
<div class="nav">
  <% if current_user %>
    <ul>
      <li><%= current_user.email %></li>
      <li><%= button_to "Log out", logout_path, method: "delete", class: 'btn btn-small' %></li>
    </ul>
  <% else %>
    <ul>
      <li><%= link_to "Login", 'login' %></a></li>
      <li><%= link_to "Signup", 'signup' %></a></li>
    </ul>
  <% end %>
</div>
```

### Authenticate in rails console

Enter the rails console & create a new user

```ruby
> User.create(first_name: 'Edna', last_name: 'Mode', email: 'edna@example.com', password: 'incredibles')
```

Find this user and save it to a variable named `myuser`

```ruby
> myuser = User.find_by(email: 'edna@example.com')
```

Print our the `myuser` object's `email` attribute to confirm the user object has saved the email, `edna@example.com`

```ruby
> myuser.email
=> "edna@example.com"
```

Print out the `myuser` object's `password_digest` attribute. This is the encrypted version of the pw you used to create the user object. It's constructed using the `bcrypt` gem installed earlier.

```ruby
> myuser.password_digest
=> "$2a$12$YgL48L68ne7Udg7vnXxyJeN31QqQ3cKP3n4R7cFsBSkQSy9pn93LW"
```

The `has_secure_password` added to the `User` model comes with a method named `authenticate`.

When a user tries to log in again, Rails will use the `authenticate` method to determine whether the password entered is valid by first hashing it and then comparing it to the `password_digest` field in the database.

```ruby
> myuser.authenticate('wrong_pwd')
=> false
> myuser.authenticate('incredibles')
=>
#<User:0x0000558229549df8
 id: 1,
 first_name: "Edna",
 last_name: "Mode",
 email: "edna@example.com",
 password_digest: "[FILTERED]",
 created_at:
  Fri, 06 Dec 2024 00:32:15.302587000 UTC +00:00,
 updated_at:
  Fri, 06 Dec 2024 00:32:15.302587000 UTC +00:00>
```

## Resources

- [Ruby on Rails Cheatsheet](https://gist.github.com/mdang/95b4f54cadf12e7e0415)
- [My beloved Ruby on Rails cheat sheet](https://dev.to/ericchapman/my-beloved-ruby-on-rails-cheat-sheet-50pi)
- [Rails models cheatsheet](https://devhints.io/rails-models)

### Ruby on Rails Guides

- [Migrations](https://guides.rubyonrails.org/v3.2/migrations.html)
