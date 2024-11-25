movies_arr = {
  Star_Wars: 5
}

def symbolify(string)
 string.gsub(/\s+/, '_').to_sym
end

def stringiffy(symbol)
  symbol.to_s.gsub(/\_/, " ")
end

def movie_rating(movies)
  puts "What would you like to do?"
  puts "- 'add' to add a movie"
  puts "- 'update' to update a movie"
  puts "- 'display' to display entered movies"
  puts "- 'delete' to delete a movie"

  choice = gets.chomp

  case choice
    when "add"
      puts "What movie do you want to add?"
      title = gets.chomp
      title_symbol = symbolify(title)

      if movies[title_symbol].nil?
        puts "How many stars (1-5) do you want to give #{title}?"

        rating = gets.chomp

        movies[title_symbol] = rating.to_i
        puts "#{title} added with #{rating} stars!"
      else
        puts "#{title} has already been added with #{movies[title_symbol]} stars!"
      end
      movie_rating(movies)
    when "update"
      puts "What movie do you want to update?"
      title = gets.chomp
      title_symbol = symbolify(title)

      if movies[title_symbol].nil?
        puts "#{title} has not been rated yet."
      else
        puts "What new rating do you want to give #{title}?"
        rating = gets.chomp
        movies[title_symbol] = rating.to_i
        puts "#{title} has been updated to #{rating} stars!"
      end
      movie_rating(movies)
    when "display"
      movies.each do | title, rating |
        puts "#{stringiffy(title)}: #{rating}"
      end
      movie_rating(movies)
    when "delete"
      puts "What movie do you want to delete?"
      title = gets.chomp
      title_symbol = symbolify(title)

      if movies[title_symbol].nil?
        puts "#{title} has not been rated yet."
      else
        movies.delete(title_symbol)
        puts "#{title} has been deleted"
      end
      movie_rating(movies)
    else 
      puts "I don't understand that command"
      movie_rating(movies)
  end
end

movie_rating(movies_arr)