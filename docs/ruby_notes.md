# Learn Ruby

## Basics

- Everything in Ruby is an object, with a few exceptions (like blocks)
- Naming convention for local variables is snake case
- Curly braces `{}` are equivalent to the keywords `do` (to open the block) and `end` (to close it)

  ```ruby
  # these are equivalent

  object.each { |item|
    # Do something
  }

  object.each do |item|
   # Do something
  end
  ```

- In Ruby, the `Numeric` data type represents numbers including **integers** (ex: `1`) and **floats** (ex: `1.2`).
- If you only want to assign a variable if it hasn't already been assigned, you can use the conditional assignment operator: `||=`

  ```ruby
  favorite_book = nil
  puts favorite_book
  # ==>

  favorite_book ||= "Cat's Cradle"
  puts favorite_book
  # ==> Cat's Cradle

  favorite_book ||= "Why's (Poignant) Guide to Ruby"
  puts favorite_book
  # ==> Cat's Cradle

  favorite_book = "Why's (Poignant) Guide to Ruby"
  puts favorite_book
  # ==> Why's (Poignant) Guide to Ruby
  ```

- `print` just prints whatever you give it on the screen (so multiple print statements will render on the same line)
- `put` adds a new (blank) line after the thing it prints
- `gets` gets input from the user. Automatically adds a blank line after each bit of input. Chaining with `.chomp` (`gets.chomp`) removes that extra line.

  ```ruby
  first_name = gets.chomp
  ```

- `#{var_name}` is how you do string interpolation in Ruby. Ex: `"Your name is #{first_name}"`
- Ruby method names may end in `!` which doesn't do anything special by itself, but there is a convention on which methods have it (though it isn't always consistent) and you should learn each example on a case by case basis. The convention is that methods ending in `!` are either dangerous, or change the object, or perform some other kind of change, or can raise an error where the other version wouldn't. For example, `String#capitalize!` changes the string it operates on, and `String#capitalize` makes a new string that is capitalized. [stack overflow](https://stackoverflow.com/questions/69157329/meaning-of-ruby-methods-ending-with)

  ```ruby
  answer = "thing"
  answer2 = answer.capitalize
  puts "#{answer} 1 and #{answer2} 2"
  # thing 1 and Thing 2

  answer.capitalize!
  puts "#{answer} 1 and #{answer2} 2"
  # Thing 1 and Thing 2
  ```

- Ruby uses _short-circuit evaluation_ for boolean operators (`&&` or `||`) meaning it doesn't look at both expressions unless it has to.
  - If it sees `false && true` it stops running as soon as it sees `&&` because it knows `false &&` anything _must_ be `false`.
  - If it sees `true || false` it stops running as soon as it sees `||` because it knows `true ||` anything _must_ be `true`.
- _Receivers_ are objects on which methods are called. Whenever you call `object.method` `object` is the receiver of the `method`
- Ruby allows using underscores to make it easier to read big numbers. ex: `1_000_000`

## Control Flow

- `if` `elsif` and `else` don't have parenthesis, and you need to end the if block with `end`.

  ```ruby
  a = 10
  b = 11
  if a < b
    print "a is less than b!"
  elsif b < a
    print "b is less than a!"
  else
    print "b is equal to a!"
  end
  ```

- If the "do something" of an if is a short, simple expression, we can make it a single line as `expression if boolean`

  ```ruby
  puts "It's true!" if true
  ```

- `unless` is basically a short hand `if` statement and will do whatever you ask `unless` the condition is `true`

  ```ruby
  print "Pick a number, any number..."
  number = gets.chomp
  number = number.to_f

  print "Correct!" unless number < 0
  ```

- Ruby also has ternaries: `boolean ? Do this if true: Do this if false`

  ```ruby
  puts 3 < 4 ? "3 is less than 4!" : "3 is not less than 4."
  ```

- As a general rule, Ruby methods that end with `?` evaluate to the boolean values `true` or `false`
- `.include?` method evaluates to `true` if it finds what it's looking for, and `false` otherwise
- `.gsub!` stands for global substitution and replaces every instance of one substring with another. Ex: `string_to_change.gsub!(/s/, "th")`
  - Note: You _cannot_ put a space between `gsub!` and the bit in the parenthesis
- a `case` statement allows you to compare an object against multiple patterns

  - Like the `if` expression the first `when` that matches is executed and all other matches are ignored.
  - If no matches are found the `else` is executed.
  - `then` can be used to place the body of the `when` on a single line
  - `else` and `then` are optional

    ```ruby
    case variable_to_check
      when value_1
        puts "do something"
      when value_2
        puts "do something else"
      else
        puts "default behavior"
    end

    case variable_to_check
      when value_1 then puts "do something"
      when value_2 then puts "do something else"
      else puts "default behavior"
    end
    ```

- You can also use `case` expressions like an if-elseif expression

  ```ruby
  a = gets.chomp

  case
    when a == 1, a == 2
      puts "a is one or two"
    when a == 3
      puts "a is three"
    else
      puts "a is not 1, 2, or 3"
  end
  ```

## Hashes & Symbols

### Hashes

- Hashes are sort of like JavaScript objects or Python dictionaries.
- It's a collection of key-value pairs. Values are assigned to keys using `=>`. You can use any Ruby object for a key or a value.
- A hash _literal notation_ is when you literally describe what you want in the hash: you give it a name and you set it equal to one or more `key => value` pair inside curly braces.

  ```ruby
  my_hash = {
    "name" => "Eric",
    "age" => 26,
    "hungry?" => true
  }

  puts my_hash["name"]
  puts my_hash["age"]
  puts my_hash["hungry?"]

  =begin
  Eric
  26
  true
  =end
  ```

  - The hash syntax with the `=>` symbol between keys and values is also sometimes called the _hash rocket_ style b/c it looks like a tiny rocket
  - The hash syntax changed in Ruby 1.9 as follows

    - You put the colon at the end of the symbol, not at the beginning
    - You don't need the hash rocket anymore

    ```ruby
    new_hash = {
      one: 1,
      two: 2,
      three: 3
    }

    puts new_hash
    # => { :one => 1, :two => 2, :three => 3 }
    ```

- A hash _constructor notation_ is when you create a hash using `Hash.new`.

  - Setting a variable equal to `Hash.new` creates a new empty hash (same as setting a variable equal to empty curly braces `{}`)
  - To add a key-value pair to a hash created with `Hash.new`, use bracket notation.

  ```ruby
  pets = Hash.new
  pets["Stevie"] = "cat"
  ```

- You can access values in a hash using bracket notation just like an array, but using the key instead of the index.

  ```ruby
  pets = {
    "Stevie" => "cat",
    "Bowser" => "hamster",
    "Kevin Sorbo" => "fish"
  }

  puts pets["Stevie"]
  # will print "cat"
  ```

- If you try to access a key that doesn't exist, you'll get the special value `nil`

  ```ruby
  n = Hash.new()

  puts n
  # {}

  puts n["kitty"]
  # nil
  ```

  - `nil` and `false` are the two non-`true` values in Ruby (every other object is regarded as "truthy")
  - `false` means "not true"
  - `nil` is Ruby's way of saying "nothing at all"

- If you don't want `nil` to be the default value returned when the program tries to access a nonexistent key in the hash, you can specify a different default value using the `Hash.new` syntax:

  ```ruby
  h = Hash.new("nothing here")

  puts h
  # {}

  puts h["kitty"]
  # nothing here
  ```

### Symbols

- A Ruby symbol is a sort of name
- It is _not_ a string
- While there can be multiple strings that all have the same value, there's only one copy of any particular symbol at a given time.
- The `.object_id` method gets the ID of an object - it's how Ruby knows whether two objects are the exact same object. In the example below, the two "strings" are actually different objects, whereas the `:symbol` is the _same object_ listed twice

  ```ruby
  puts "string".object_id
  # ==> 6903280
  puts "string".object_id
  # ==> 6903020

  puts :symbol.object_id
  # ==> 802268
  puts :symbol.object_id
  # ==> 802268
  ```

- Symbols always start with a colon (`:`).
- They must be valid Ruby variable names, so the first character after the colon has to be a letter or underscore (`_`). After that, any combination of letters, numbers, and underscores is allowed. No spaces!
- Symbols are primarily used as either hash keys or for referencing method names
- Symbols make good hash keys because:
  - They're immutable (can't be changed)
  - Only one copy exists at a given time, so they save memory
  - Symbol-as-keys are faster than strings-as-keys b/c of the above
- The `.to_s` and `.to_sym` methods convert between symbols and strings

  ```ruby
  :sasquatch.to_s
  # ==> "sasquatch"

  "sasquatch".to_sym
  # ==> :sasquatch
  ```

- You can also use `.intern` to internalize a string into a symbol (works just like `.to_sym`)

  ```ruby
  "bigfoot".intern
  # ==> :bigfoot
  ```

- In Ruby 1.9, when using symbols as hash keys, the syntax has changed:

  ```ruby
  # < Ruby 1.9
  grades = {
    :alice => 92,
    :chris => 95
  }

  # >= Ruby 1.9
  movie_ratings = {
    memento: 3,
    the_matrix: 5
  }
  ```

- Symbols can be useful for referencing method names. For example, `.respond_to?` takes a symbol and returns `true` if an object can recieve that method, and `false` otherwise.

  ```ruby
  [1, 2, 3].respond_to?(:push)
  # ==> true (since you can call.push on an array object)

  [1, 2, 3].respond_to?(:to_sym)
  # ==> false (since you can't turn an array into a symbol)
  ```

## Loops & Iterators

- assignment operators update a variable value: `=`, `+=`, `-=`, `*=`, `/=`
- Ruby does not have increment operators (`++` & `--`) like JavaScript
- A sequence of integers can be demonstrated by a **range**
  - **inclusive range** `..` includes the last integer in the sequence. ex: `3..5` includes `5`
  - **exclusive range** `...` excludes the last integer in the sequence. Ex: `3...5` does not include `5`
- `while` loop iterates while the condition is true

  ```ruby
  i = 0
  while i < 5
    puts i
    i = +=1
  end
  ```

- `until` loop iterates until the condition is true

  ```ruby
  counter = 1
  until counter > 10
    puts counter
    counter = +=1
  end
  ```

- `for` loop repeats a block of code a set amount of times

  ```ruby
  for num in 1..4
    puts num
  end
  # 1
  # 2
  # 3
  # 4

  for num in 1...4
    puts num
  end
  # 1
  # 2
  # 3
  ```

- Iterators repeatedly invoke a block of code
- `loop` is the simplest iterator method.

  - `break` keyword breaks the loop as soon as its condition is met

  ```ruby
  i = 0
  loop do
    i += 1
    print "#{i}"
    break if i > 5
  end
  ```

- `next` keyword can be used to skip over certain steps in a loop

  ```ruby
  # only prints odd numbers
  for i in 1..5
    # if the remainder if i/2 is 0
    # we skip any remaining steps
    # and go to the next iteration of the loop
    next if i % 2 == 0
    print i
  end
  ```

- `.each` method applies an expression to each element of an object. The variable name between `| |` in the syntax is just a placeholder identifier for each element of the object you're using `.each` on

  - `.each` returns the original Array, even if the expression is manipulating the array elements in some fashion

  ```ruby
  numbers = [1, 2, 3, 4, 5]
  # one way to loop
  numbers.each { |item| puts item }

  # another way to loop
  numbers.each do |item|
    puts item
  end
  ```

- `.times` method performs a task on each item in an object a specified number of times

  ```ruby
  # prints "Chunk bacon!" 10 times
  10.times { print "Chunk bacon!" }
  ```

- If we know the range of numbers we'd like to include, we can use `.upto` and `.downto` rather than trying to use a `for` loop that stops when a counter variable hits a certain value.

  ```ruby
  95.upto(100) { |num| print num, " " }
  # Prints 95 96 97 98 99 100

  "L".upto("P") { |letter| prints letter, " "}
  # Prints L M N O P
  ```

- You can nest iterators to iterate over a multidimensional array

  ```ruby
  s = [["ham", "swiss"], ["turkey", "cheddar"], ["roast beef", "gruyere"]]

  s.each { |sub_array| sub_array.each { |item| puts item}}

  # puts each item from each sub-array
  ```

- You can use iterators to iterate over hashes. When iterating over hashes, you need two placeholder variables to represent each key/value pair.

  ```ruby
  restaurant_menu = {
    "noodles" => 4,
    "soup" => 3,
    "salad" => 2
  }

  restaurant_menu.each do |item, price|
    puts "#{item}: #{price}"
  end
  ```

  ```ruby
  family = { "Homer" => "dad",
    "Marge" => "mom",
    "Lisa" => "sister",
    "Maggie" => "sister",
    "Abe" => "grandpa",
    "Santa's Little Helper" => "dog"
  }
  family.each { |name, relation| puts "#{name}: #{relation}" }
  ```

## Methods, Blocks, Procs, and Lambdas

- A block is just a bit of code between do..end or {}. It’s not an object on its own, but it can be passed to methods like .each or .select.
- A proc is a saved block we can use over and over.
- A lambda is just like a proc, only it cares about the number of arguments it gets and it returns to its calling method rather than returning immediately.

### Methods

- Methods are defined using the keyword `def` (short for "define")
- Methods have three parts:
  - The _header_ which includes the `def` keyword, the name of the method, and any _arguments_ the method takes
  - The _body_, the code block that describes the procedures the method carries out
  - The method ends with the `end` keyword
- If you try to call a method that doesn't exist, the program will return a `NameError`
- Methods will return the last line of the method (the last evaluated expression) by default

  - This is called _implicit return_
  - If you don't tell a Javascript function exactly what to `return` it will return `undefined`
  - For Python, the default return value is `None`
  - For Ruby, it's the result of the last evaluated expression, so you don't need to explicitly include the `return` keyword

    ```ruby
    def add(a,b)
      return a + b
    end

    def subtract(a,b)
      a - b
    end

    add(1,2)
    # ==> 3

    subtract(3,2)
    # ==> 1
    ```

- If a method takes arguments, we say it _accepts_ or _expects_ those arguments
- _Parameters_ are placeholders the method definition gives to arguments since it doesn't know ahead of time exactly what argument it's going to get.
- In the below example, we gave the method `square` the _parameter_ `n` when we defined it and passed it the _argument_ `12` when we called it

  ```ruby
  def square(n)
    puts n ** 2
  end

  square(12)
  # ==> prints "144"
  ```

- Putting parameters and arguments in parentheses is technically optional in Ruby, but a good idea for readability
- _splat arguments_ are arguments preceded by an asterisk `*` which tells the program that the method can receive one or more arguments

  ```ruby
  def what_up(greeting, *friends)
    friends.each { |friend| puts "#{greeting}, #{friend}!" }
  end

  what_up("What up", "Ian", "Zoe", "Zenas", "Eleanor")
  ```

- `method_name=` is a Ruby convention saying the method sets a value

  ```ruby
  def name=(value)
    @name = value
  end
  ```

- You can signify an optional parameter by giving it a default value

  ```ruby
  def initialize(name, balance=100)
    @name = name
    @balance = balance
  end
  ```

  - in the above example, if you pass two arguments it'll use your second arg to set `balance`, but if you only pass a `name`, `balance` gets set to a default value of `100`

### Blocks

- Blocks are a bit of code that can be executed. They can be defined with either the keywords `do` and `end` or with curly braces (`{}`)

  ```ruby
  # method that capitalizes a word
  def capitalize(string)
    puts "#{string[0].upcase}#{string[1..-1]}"
  end

  capitalize("ryan") # prints "Ryan"
  capitalize("jane") # prints "Jane"

  # block that capitalizes each string in the array
  ["ryan", "jane"].each {|string|
    puts "#{string[0].upcase}#{string[1..-1]}" # prints "Ryan", then "Jane"
  }
  ```

- A method can take a block as a parameter

  - This is what `.each` does
  - Passing a block to a method is a great way of abstracting certain tasks from the method and defining those tasks when we call the method.
  - Using a block to define the task you want the method (like `.each`) to do simplifies the task at hand
  - Methods that accept blocks have a way of transferring control from the calling method to the block and back again - this can be built into the methods we define by using the `yield` keyword

    - Example ruby script & it's output

    ```ruby
    def block_test
      puts "We're in the method!"
      puts "Yielding to the block..."
      yield
      puts "We're back in the method!"
    end

    block_test { puts ">>> We're in the block!" }
    ```

    ```text
    We're in the method!
    Yielding to the block...
    >>> We're in the block!
    We're back in the method!
    ```

  - You can also pass parameters to `yield`

    ```ruby
    def double(num)
      yield(num)
    end

    double(3) { |n| n*2 }
    # ==> 6
    ```

    ```ruby
    def yield_name(name)
      puts "In the method! Let's yield."
      yield("Kim")
      puts "In between the yields!"
      yield(name)
      puts "Block complete! Back in the method."
    end

    yield_name("Eric") { |n| puts "My name is #{n}." }
    ```

    ```text
    In the method! Let's yield.
    My name is Kim.
    In between the yields!
    My name is Eric.
    Block complete! Back in the method.
    ```

- Blocks are one of the few exceptions to the "everything is an object" rule in Ruby
  - Blocks can't be saved to variables and don't have all the powers and abilities of a real object

### Procs

- Procs are kinda like a "saved" block
- Just like you can give a bit of code a name and turn it into a method, you can name a block and turn it into a proc
- Great for keeping your code DRY (**D**on't **R**epeat **Y**ourself)
- Call `Proc.new` and pass in the block you want to save

  ```ruby
  cube = Proc.new { |x| x ** 3 }
  ```

- Then you can pass the proc to a method that would otherwise take a block to avoid rewriting the block over and over.
- Use `&` to convert the proc into a block any time you pass a proc to a method that expects a block.

  ```ruby
  [1, 2, 3].collect!(&cube)
  # ==> [1, 8, 27]
  [4, 5, 6].map!(&cube)
  # ==> [64, 125, 216]
  ```

- Procs can be called directly by using Ruby's `.call` method

  ```ruby
  hi = Proc.new { puts "Hello!" }

  hi.call
  # ==> Hello!
  ```

- You can pass Ruby method names around with a symbol and then convert that symbol to a proc using `&`

  ```ruby
  strings = ["1", "2", "3"]
  nums = strings.map(&:to_i)
  # ==> [1, 2, 3]
  ```

- Procs do not check the numbers of arguments passed to them. A proc will ignore unexpected arguments (if you pass too many) and assign `nil` to any that are missing (if you pass too few)
- When a proc returns, it does so immediately, without going back to the calling method

### Lambdas

- With the exception of some syntax and a few behavioral quirks, lambdas are identical to procs

  - Lambdas are objects, just like procs
  - A lambda checks the number of arguments passed to it (a proc does not) and will throw an error if you pass it the wrong number of arguments
  - When a lambda returns, it passes control back to the calling method (a proc returns immediately)

    ```ruby
    def batman_ironman_proc
      victor = Proc.new { return "Batman will win!" }
      victor.call
      "Iron Man will win!"
    end

    puts batman_ironman_proc
    # ==> Batman will win!

    def batman_ironman_lambda
      victor = lambda { return "Batman will win!" }
      victor.call
      "Iron Man will win!"
    end

    puts batman_ironman_lambda
    # ==> Iron Man will win!
    ```

- Lambda syntax:

  ```ruby
  lambda { |param| block }
  ```

  ```ruby
  strings = ["leonardo", "donatello", "raphael", "michaelangelo"]

  symbolize = lambda { |p| p.to_sym }

  symbols = strings.collect(&symbolize)
  print symbols
  # Prints [:leonardo, :donatello, :raphael, :michaelangelo]
  ```

- Useful in the same situations you'd use a proc

### Common Methods

- Use `.select` to filter a hash for values that meet certain criteria

  ```ruby
  grades = { alice: 100,
    bob: 92,
    chris: 95,
    dave: 97
  }

  grades.select { |name, grade| grade <  97 }
  # ==> { :bob => 92, :chris => 95 }

  grades.select { |k, v| k == :alice }
  # ==> { :alice => 100 }
  ```

- `.each_key` and `.each_value` iterate over _just_ keys or _just_ values

  ```ruby
  my_hash = { one: 1, two: 2, three: 3 }

  my_hash.each_key { |k| print k, " " }
  # ==> one two three

  my_hash.each_value { |v| print v, " " }
  # ==> 1 2 3
  ```

- `.sort` is used to sort arrays into a specific order

  - Sorting arrays is a common problem and there are many algorithms that accomplish this.
  - Most sorting algorithms assume we are sorting an array of items, which involves comparing any two items in the array and deciding which should come first.
  - Ruby's built-in sorting library implements a few of these algorithms.

    ```ruby
    my_array = [3, 4, 8, 7, 1, 6, 5, 9, 2]

    my_array.sort! # sorts in ascending numerical order

    puts my_array
    # ==> puts [1, 2, 3, 4, 5, 6, 7, 8, 9]

    books = ["Charlie and the Chocolate Factory", "War and Peace", "Utopia", "A Brief History of Time", "A Wrinkle in Time"]

    books.sort! # sorts in ascending alphabetical order (A - Z)

    puts books
    # ==> puts ["A Brief History of Time", "A Wrinkle in Time", "Charlie and the Chocolate Factory", "Utopia", "War and Peace"]
    ```

  - The _combined comparison_ operator (`<=>`) is used to compare two Ruby objects.
    - It returns `0` if the first _operand_ equals the second
    - It returns `1` if the first _operand_ is greater than the second
    - It returns `-1 ` if the first _operand_ is less than the second
  - A block that is passed into the `sort` method must return either `1`, `0`, or `-1`
    - It should return `-1` if the first block parameter should come before the second
    - `1` if vice versa
    - `0` if they are of equal weight (one does not come before the other)
  - `sort` by default assumes you want to sort in ascending order, but it accepts a block as an optional argument that allows you to specify how to items should be compared

    ```ruby
    books = ["Charlie and the Chocolate Factory", "War and Peace", "Utopia", "A Brief History of Time", "A Wrinkle in Time"]

    # sorts the books in descending order
    books.sort! do |firstBook, secondBook|
      secondBook <=> firstBook
    end
    ```

- The `.collect` method takes a block and applies the expression in the block to every element in an array.

  - It does not mutate the original array and instead returns a _copy_. `.collect!` on the other hand will mutate the original array.

    ```ruby
    my_nums = [1, 2, 3]
    puts my_nums.collect { |num| num ** 2 }
    # ==> [1, 4, 9]

    my_nums
    # ==> [1, 2, 3]

    my_nums.collect! { |num| num ** 2 }
    # ==> [1, 4, 9]

    my_nums
    # ==> [1, 4, 9]
    ```

  - Like `.each`, the `collect` method will yield each member of an Array to the block. But unlike `.each` (which just returns the original Array), `.collect` will collect the results in a new array and return that instead. Thus, these two code samples do the same thing:

    ```ruby
    arr = [1, 2, 3, 4, 5]

    doubles = []
    arr.each { |x| doubles.push 2*x }

    doubles
    # ==> [2, 4, 6, 8, 10]
    ```

    ```ruby
    arr = [1, 2, 3, 4, 5]

    doubles = arr.collect { |x| 2*x }

    doubles
    # ==> [2, 4, 6, 8, 10]
    ```

- `.map` is the exact same as `.collect`

## Classes

```ruby
class NewClass
  # Class magic here
end
```

- Class names are written in CapitalizedCamelCase
- the `initialize` method of a class is the function that "boots up" each object the class creates
- The _scope_ of a variable is the context in which it's visible to the program.

  - _global_ variables are available everywhere
    - defining a variable outside a method or class makes it global
    - if you want to make a variable global from inside a method or class, start it with `$` (this is part of the variable name and will also need to be included wherever it's referenced)
    - in general, global variables should be avoided because they can be changed from anywhere in your program. It's a better idea to create variables with limited scope that can only be changed in a few places.
  - _local_ variables are only available inside certain methods
  - _class_ variables (`@var_name`) are members of a certain class and belong to the class itself
    - There is only one copy of a class variable shared by all instances of that class
  - _instance_ variables (`@@var_name`) are only available to particular instances of a class

  ```ruby
  class Person
    @@people_count = 0

    def initialize(name)
      @name = name
      @@people_count += 1
    end

    def self.number_of_instances
      return @@people_count
    end
  end

  matz = Person.new("Yukihiro")
  dhh = Person.new("David")

  puts "Number of Person instances: #{Person.number_of_instances}"
  # ==> 2
  ```

- _Inheritence_ is the process by which one class takes on the attributes and methods of another. Used to express an "is-a" relationship.

  ```ruby
  class DerivedClass < BaseClass
    # Some stuff!
  end
  ```

  - Ex: A square _is a_ rectangle, so a Square class could inherit from a Rectangle class. However, a Triangle is not a Rectangle, so it shouldn't inherit from the Rectangle class. Instead, both Triangle and Rectangle could ultimately inherit from the same Shapes class.

    ```ruby
    class ApplicationError
      def display_error
        puts "Error! Error!"
      end
    end

    class SuperBadError < ApplicationError
    end

    err = SuperBadError.new
    err.display_error
    # ==> "Error! Error!"
    ```

  - If you define an inherited method in the derived class, it will override the method from the base class and all instances of the derived class will use the new version of the method

    ```ruby
    class Creature
      def initialize(name)
        @name = name
      end

      def fight
        return "Punch to the chops!"
      end
    end

    class Dragon < Creature
      def fight
        return "Breathes fire!"
      end
    end
    ```

  - You can directly access the attributes or methods of a superclass (aka "base class" or "parent") with the `super` keyword

    ```ruby
    class DerivedClass < Base
      def some_method
        super(optional, args)
        # Some other stuff
      end
    end
    ```

  - Ruby does not allow multiple inheritance (where a class has more than one parent)
  - Ruby does allow you to incorporate data or behavior from several classes into a single class through the use of _mixins_

- Class methods are like class variables in that the belong to the class itself. You define a class method by prefixing the method name wit hte class name

  ```ruby
  class Machine
    def Machine.hello
      puts "Hello from the machine!"
    end
  end
  ```

- You can explicitly make class methods `public` or `private`

  - Public methods allow for an interface with the rest of the program

    ```ruby
    class ClassName
      # Some class stuff
      public
      def public_method
        # public_method stuff
      end
      # still public
    end
    ```

    - everything after the `public` keyword through the `end` of the class definition will now be public unless we say otherwise

  - Private methods are private to the object where they are defined - you can only call them from other code inside the object. Cannot be called with an _explicit receiver_

    ```ruby
    class ClassName
      # Some class stuff
      public
      def public_method
        # public_method stuff
      end
      # still public
      private
      def private_method
        # private_method stuff
      end
      # still private
    end
    ```

  - To access private information, you have to create public methods that know how to get it. This separates the private _implementation_ from the public _interface_

- You can use `attr_reader` to access a variable and `attr_writer` to change it

  - The code in these two version of the Person class are equivalent

    ```ruby
    class Person
      attr_reader :name
      attr_writer :name
      def initialize(name)
        @name = name
      end
    end
    ```

    ```ruby
    class Person
      def initialize(name)
        @name = name
      end

      def name
        @name
      end

      def name=(value)
        @name = value
      end
    end
    ```

- You can make a variable readable and writable at the same time with `attr_accessor`

## Modules

```ruby
module ModuleName
  # Bits 'n pieces
end
```

- A module is like a toolbox that contains a set of methods and constants
- They're like classes, only modules can't create instances and can't have subclasses
- They're just used to store things
- You can pull in pre-existing modules or make your own using the `module` keyword

  ```ruby
  module Circle

    PI = 3.141592653589793

    def Circle.area(radius)
      PI * radius**2
    end

    def Circle.circumference(radius)
      2 * PI * radius
    end
  end
  ```

- Module names are written in CapitalizedCamelCase
- Variables, by definition, change (or vary) so it doesn't make sense to include them in modules
- Constants, however, are supposed to always stay the same, so including helpful constants in modules is a good idea
  - Ruby doesn't force you to keep the same value for a constant once it's initialized, but it will warn you if you try to change it
  - Ruby constants are written in ALL_CAPS and are separated with underscores if there's more than one word
- Main purpose of modules: separate methods and constants into named spaces (called namespacing)
  - `::` scope resolution operator -> tells Ruby _where_ you're looking for a specific piece of code
  - `Math::PI` ==> look inside the `Math` module to get the `PI` constant, not any other `PI` (ex: the one in `Circle::PI` in the example at the top of the section)
- Some modules, like `Math` are already present in the interpreter. Others need to be explicitly brought in using `require`

  ```ruby
  require 'date'

  puts Date.today
  ```

- You can also `include` a module.

  - Any class that `include`s a certain module can use those module's methods, which has the nice effect of no longer having to prepend the constants and methods with the module name.
  - `include` mixes a module's methods in at the instance level (allowing instances of a particular class to use the methods)

  ```ruby
  class Angle
    include Math

    attr_accessor :radians

    def initialize(radians)
      @radians = radians
    end

    def cosine
      # Math::cos w/o include
      cos(@radians)
    end
  end

  acute = Angle.new(1)
  acute.cosine
  ```

- You can also `extend` a module which mixes a module's methods at the _class_ level

  - The class itself can use the methods, as opposed to _instances_ of the class

  ```ruby
  # ThePresent has a .now method that we'll extend to TheHereAnd

  module ThePresent
    def now
      puts "It's #{Time.new.hour > 12 ? Time.new.hour - 12 : Time.new.hour}:#{Time.new.min} #{Time.new.hour > 12 ? 'PM' : 'AM'} (GMT)."
    end
  end

  class TheHereAnd
    extend ThePresent
  end

  TheHereAnd.now
  ```

- When a module is used to mix additional behavior and information into a class, it's called a _mixin_
  - This allows us to mimic inheriting from more than one class: by mixing in traits from various _modules_ into our _classes_

## Shortcuts

- Ruby has shortcuts for common method names
- You can use the _concatenation operator_ `<<` (also known as "the shovel") to add an element to the end of an array instead of `.push`.

  ```ruby
  [1, 2, 3] << 4
  # ==> [1, 2, 3, 4]
  ```

- You can use `<<` or `+` to concatenate strings

  ```ruby
  "Yukihiro " << "Matsumoto"
  # ==> "Yukihiro Matsumoto"

  "Mary " + "Sue"
  # ==> "Mary Sue"
  ```

- If you want to end a Ruby statement without going to a new line, you can just type a semicolon

  ```ruby
  class Monkey; end
  ```

## Resources

### CodeAcademy

- [Introduction to Ruby cheatsheet](https://www.codecademy.com/learn/learn-ruby/modules/learn-ruby-introduction-to-ruby-u/cheatsheet)
