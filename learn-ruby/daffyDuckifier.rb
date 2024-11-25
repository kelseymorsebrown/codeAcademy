print "Thtring, pleathe!: "
user_input = gets.chomp

user_input.downcase!

if user_input.include? "s"
  user_input.gsub!(/s/, "th")
else
  print "There are no 's's in your string."
end

puts "#{user_input}"