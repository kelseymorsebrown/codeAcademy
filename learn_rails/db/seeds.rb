# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Tags and Destinations

t1 = Tag.create(title: "Beaches", image: "https://content.codecademy.com/courses/learn-rails/img/beach01.jpg")
Destination.create(name: "Ipanema", description: "The beach of Ipanema is known for its elegant development and its social life.", image: "https://content.codecademy.com/courses/learn-rails/img/beach02.jpg", tag_id: t1.id)
Destination.create(name: "7 Mile Beach", description: "The western coastline contains the island's finest beaches.", image: "https://content.codecademy.com/courses/learn-rails/img/beach03.jpg", tag_id: t1.id)
Destination.create(name: "El Castillo", description: "An elite destination famous for its white sand beaches", image: "https://content.codecademy.com/courses/learn-rails/img/beach04.jpg", tag_id: t1.id)

t2 = Tag.create(title: "History", image: "https://content.codecademy.com/courses/learn-rails/img/history01.jpg")
Destination.create(name: "Machu Picchu", description: "Machu Picchu was built around 1450, at the height of the Inca Empire.", image: "https://content.codecademy.com/courses/learn-rails/img/history02.jpg", tag_id: t2.id)
Destination.create(name: "Dunrobin Castle", description: "Dunrobin Castle is a stately home in Sutherland. Its origins lie in the Middle Ages.", image: "https://content.codecademy.com/courses/learn-rails/img/history03.jpg", tag_id: t2.id)
Destination.create(name: "Palace of Westminster", description: "The meeting place of the two houses of the Parliament of the United Kingdom", image: "https://content.codecademy.com/courses/learn-rails/img/history04.jpg", tag_id: t2.id)

t3 = Tag.create(title: "Skiing", image: "https://content.codecademy.com/courses/learn-rails/img/skiing01.jpg")
Destination.create(name: "Dolomites", description: "The Dolomites are a mountain range located in northeastern Italy famous for skiing in the winter months.", image: "https://content.codecademy.com/courses/learn-rails/img/skiing02.jpg", tag_id: t3.id)
Destination.create(name: "Chamonix", description: "It was the site of the first Winter Olympics in 1924", image: "https://content.codecademy.com/courses/learn-rails/img/skiing03.jpg", tag_id: t3.id)
Destination.create(name: "Vail", description: "The second largest single mountain ski resort in the United States", image: "https://content.codecademy.com/courses/learn-rails/img/skiing04.jpg", tag_id: t3.id)

t4 = Tag.create(title: "Adventure", image: "https://content.codecademy.com/courses/learn-rails/img/adventure01.jpg")
Destination.create(name: "Banzai Pipeline", description: "A surf reef break located in Hawai notorious for huge waves.", image: "https://content.codecademy.com/courses/learn-rails/img/adventure02.jpg", tag_id: t4.id)
Destination.create(name: "Saxon Switzerland", description: "A hilly climbing area and national park in Saxony, Germany.", image: "https://content.codecademy.com/courses/learn-rails/img/adventure03.jpg", tag_id: t4.id)
Destination.create(name: "Pucon", description: "Striking natural surroundings near a volcano and several lakes, nature reserves and thermal baths.", image: "https://content.codecademy.com/courses/learn-rails/img/adventure04.jpg", tag_id: t4.id)

t5 = Tag.create(title: "Family", image: "https://content.codecademy.com/courses/learn-rails/img/family01.jpg")
Destination.create(name: "British Museum", description: "A museum dedicated to human history and culture, with over 8 million works.", image: "https://content.codecademy.com/courses/learn-rails/img/family02.jpg", tag_id: t5.id)
Destination.create(name: "San Diego Zoo", description: "Houses over 3,700 animals of more than 650 species and subspecies.", image: "https://content.codecademy.com/courses/learn-rails/img/family03.jpg", tag_id: t5.id)
Destination.create(name: "Central Park", description: "The most visited urban park in the US as well as one of the most filmed locations in the world.", image: "https://content.codecademy.com/courses/learn-rails/img/family04.jpg", tag_id: t5.id)

# Books and Reviews

b1 = Book.create(title: "American Sniper", author: "Chris Kyle, Scott McEwen, Jim DeFelice", description: "A memoir about battlefield experiences in Iraq by the Navy SEALs sniper.", publisher: "Morrow/HarperCollins", weeks_on_list: 63, rank_this_week: 1)
Review.create(comment: "[My] favorite book of the year. Chris Kyle's American Sniper is an amazingly detailed account of fighting in Iraq -- a humanizing, brave story that's extremely readable.", author: "New York Times Book Review", book_id: b1.id)
Review.create(comment: "In the community of elite warriors, one man has risen above our ranks and distinguished himself as unique. Chris Kyle is that man. A master sniper, Chris has done and seen things that will be talked about for generations to come.", author: "Marcus Luttrell", book_id: b1.id)

b2 = Book.create(title: "Unbroken", author: "Laura Hillenbrand", description: "An Olympic runner's story of survival as a prisoner of the Japanese in World War II after his plane went down over the Pacific.", publisher: "Random House", weeks_on_list: 25, rank_this_week: 2)
Review.create(comment: "Extraordinarily moving . . . a powerfully drawn survival epic.", author: "The Wall Street Journal", book_id: b2.id)
Review.create(comment: "A meticulous, soaring and beautifully written account of an extraordinary life.", author: "The Washington Post", book_id: b2.id)

b3 = Book.create(title: "Wild", author: "Cheryl Strayed", description: "A woman's account of the life-changing 1,100-mile solo hike she took along the Pacific Crest Trail in 1995.", publisher: "Vintage", weeks_on_list: 95, rank_this_week: 3)
Review.create(comment: "Spectacular. . . . A literary and human triumph.", author: "The New York Times Book Review", book_id: b3.id)
Review.create(comment: "I was on the edge of my seat. . . . It is just a wild ride of a read . . . stimulating, thought-provoking, soul-enhancing.", author: "Oprah Winfrey", book_id: b3.id)

b4 = Book.create(title: "The Boys in the Boat", author: "Daniel James", description: "A group of American rowers pursued gold at the 1936 Berlin Olympic Games.", publisher: "Penguin", weeks_on_list: 34, rank_this_week: 4)
Review.create(comment: "If you imagined a great regatta of books about rowing, then Brown's BOYS IN THE BOAT certainly makes the final heat.", author: "Boston Globe", book_id: b4.id)
Review.create(comment: "Cogent history, and a surprisingly suspenseful tale of triumph.", author: "USA Today", book_id: b4.id)

b5 = Book.create(title: "Alan Turing: The Enigma", author: "Andrew Hodges", description: "The presiding mathetmatician and decoding force at Bletchley Park, the center that cracked the German Enigma code,", publisher: "Princeton University", weeks_on_list: 2, rank_this_week: 5)
Review.create(comment: "One of the finest scientific biographies ever written.", author: "New Yorker", book_id: b5.id)
Review.create(comment: "A first-class contribution to history and an exemplary work of biography.", author: "Nature", book_id: b5.id)

b6 = Book.create(title: "Outliers", author: "Malcolm Gladwell", description: "Why some people succeed. It has to do with luck and opportunities as well as talent.", publisher: "Back Bay/Little, Brown", weeks_on_list: 185, rank_this_week: 6)
Review.create(comment: "In the vast world of nonfiction writing, Malcolm Gladwell is as close to a singular talent as exists today...Outliers is a pleasure to read and leaves you mulling over its inventive theories for days afterward.", author: "New York Times Book Review", book_id: b6.id)
Review.create(comment: "The explosively entertaining Outliers might be Gladwell's best and most useful work yet...There are both brilliant yarns and life lessons here: Outliers is riveting science, self-help, and entertainment, all in one book.", author: "Entertainment Weekly", book_id: b6.id)

b7 = Book.create(title: "The Power of Habit", author: "Charles Duhigg", description: "An examinatino of the science behind habits, how we form them and break them.", publisher: "Random House", weeks_on_list: 51, rank_this_week: 7)
Review.create(comment: "Sharp, provocative, and useful.", author: "Jim Collins", book_id: b7.id)
Review.create(comment: "A flat-out great read.", author: "David Allen", book_id: b7.id)

b8 = Book.create(title: "A Brief History of Time", author: "Stephen W. Hawking", description: "The British cosmologist reviews efforts to create a unified theory of the universe.", publisher: "Bantam", weeks_on_list: 8, rank_this_week: 8)
Review.create(comment: "Masterful", author: "The Wall Street Journal", book_id: b8.id)
Review.create(comment: "Charming and lucid . . . [A book of] sunny brilliance.", author: "The New Yorker", book_id: b8.id)

b9 = Book.create(title: "10% Happier", author: "Dan Harris", description: "A co-anchor of \"Nightline\" reports on the science and spiritual basis of meditation and how it has improved his life.", publisher: "Dey St.", weeks_on_list: 3, rank_this_week: 9)
Review.create(comment: "Revealing . . . I'd recommend this to anyone", author: "USA Today", book_id: b9.id)
Review.create(comment: "Harris' journey of discovery brought back lessons for all of us about our lives, too.", author: "Diane Sawyer", book_id: b9.id)

b10 = Book.create(title: "The New Jim Crow", author: "Michelle Alexander", description: "A law professor takes aim at the war on drugs and its impact on black men.", publisher: "New Press", weeks_on_list: 88, rank_this_week: 10)
Review.create(comment: "Devastating. . . . Alexander does a fine job of truth-telling, pointing a finger where it rightly should be pointed: at all of us, liberal and conservative, white and black.", author: "Forbes", book_id: b10.id)
Review.create(comment: "Invaluable . . . a timely and stunning guide to the labyrinth of propaganda, discrimination, and racist policies masquerading under other names that comprises what we call justice in America.", author: "Daily Kos", book_id: b10.id)

b11 = Book.create(title: "Animorphs", author: "K.A. Applegate", description: "A group of teenagers gain the ability to transform into animals and fight against a parasitic alien invasion of Earth", publisher: "Scholastic", weeks_on_list: 20, rank_this_week: 11)
Review.create(comment: "A classic from my childhood!", author: "Some Guy", book_id: b11.id)
Review.create(comment: "A 90s nostalgic gem.", author: "Bob", book_id: b11.id)

# Albums and Tracks

a1 = Album.create(cover: "https://static-assets.codecademy.com/Courses/learn-ruby-on-rails/BassMusic/my-beautiful-dark-twisted-fantasy.jpg", title: "My Beautiful Dark Twisted Fantasy", artist: "Kanye West")
Track.create(name: "Dark Fantasy", minutes: 5, album_id: a1.id)
Track.create(name: "Gorgeous", minutes: 6, album_id: a1.id)
Track.create(name: "Power", minutes: 5, album_id: a1.id)
Track.create(name: "All of the Lights", minutes: 5, album_id: a1.id)
Track.create(name: "Monster", minutes: 7, album_id: a1.id)
Track.create(name: "So Appalled", minutes: 7, album_id: a1.id)
Track.create(name: "Devil in a New Dress", minutes: 6, album_id: a1.id)
Track.create(name: "Runaway", minutes: 10, album_id: a1.id)
Track.create(name: "Hell of a Life", minutes: 6, album_id: a1.id)
Track.create(name: "Blame Game", minutes: 8, album_id: a1.id)
Track.create(name: "Lost in the World", minutes: 5, album_id: a1.id)
Track.create(name: "Who will Survive in America", minutes: 2, album_id: a1.id)

a2 = Album.create(cover: "https://static-assets.codecademy.com/Courses/learn-ruby-on-rails/BassMusic/beyonce.png", title: "Beyonce", artist: "Beyonce")
Track.create(name: "Pretty Hurts", minutes: 5, album_id: a2.id)
Track.create(name: "Haunted", minutes: 7, album_id: a2.id)
Track.create(name: "Drunk in Love", minutes: 6, album_id: a2.id)
Track.create(name: "Blow", minutes: 6, album_id: a2.id)
Track.create(name: "No Angel", minutes: 4, album_id: a2.id)
Track.create(name: "Partition", minutes: 6, album_id: a2.id)
Track.create(name: "Jealous", minutes: 4, album_id: a2.id)
Track.create(name: "Rocket", minutes: 7, album_id: a2.id)
Track.create(name: "Mine", minutes: 7, album_id: a2.id)
Track.create(name: "XO", minutes: 4, album_id: a2.id)
Track.create(name: "Flawless", minutes: 5, album_id: a2.id)
Track.create(name: "Superpower", minutes: 5, album_id: a2.id)
Track.create(name: "Heaven", minutes: 4, album_id: a2.id)
Track.create(name: "Blue", minutes: 5, album_id: a2.id)

a3 = Album.create(cover: "https://static-assets.codecademy.com/Courses/learn-ruby-on-rails/BassMusic/21.png", title: "21", artist: "Adele")
Track.create(name: "Rolling in the Deep", minutes: 4, album_id: a3.id)
Track.create(name: "Rumour Has It", minutes: 4, album_id: a3.id)
Track.create(name: "Turning Tables", minutes: 5, album_id: a3.id)
Track.create(name: "Don't You Remember", minutes: 5, album_id: a3.id)
Track.create(name: "Set Fire to the Rain", minutes: 5, album_id: a3.id)
Track.create(name: "He Won't Go", minutes: 5, album_id: a3.id)
Track.create(name: "Take it All", minutes: 4, album_id: a3.id)
Track.create(name: "I'll be Waiting", minutes: 5, album_id: a3.id)
Track.create(name: "One and Only", minutes: 6, album_id: a3.id)
Track.create(name: "Lovesong", minutes: 6, album_id: a3.id)

a4 = Album.create(cover: "https://static-assets.codecademy.com/Courses/learn-ruby-on-rails/BassMusic/channel-orange.jpg", title: "Channel Orange", artist: "Frank Ocean")
Track.create(name: "Start", minutes: 1, album_id: a4.id)
Track.create(name: "Thinkin Bout You", minutes: 4, album_id: a4.id)
Track.create(name: "Fertilizer", minutes: 1, album_id: a4.id)
Track.create(name: "Sierra Leone", minutes: 3, album_id: a4.id)
Track.create(name: "Sweet Life", minutes: 5, album_id: a4.id)
Track.create(name: "Not Just Money", minutes: 1, album_id: a4.id)
Track.create(name: "Super Rich Kids", minutes: 6, album_id: a4.id)
Track.create(name: "Pilot Jones", minutes: 4, album_id: a4.id)
Track.create(name: "Crack Rock", minutes: 4, album_id: a4.id)
Track.create(name: "Pyramids", minutes: 10, album_id: a4.id)
Track.create(name: "Lost", minutes: 4, album_id: a4.id)
Track.create(name: "White", minutes: 2, album_id: a4.id)
Track.create(name: "Monks", minutes: 4, album_id: a4.id)
Track.create(name: "Bad Religion", minutes: 3, album_id: a4.id)
Track.create(name: "Pink Matter", minutes: 5, album_id: a4.id)
Track.create(name: "Forrest Gump", minutes: 4, album_id: a4.id)
Track.create(name: "End/Golden Girl", minutes: 9, album_id: a4.id)

a5 = Album.create(cover: "https://static-assets.codecademy.com/Courses/learn-ruby-on-rails/BassMusic/good-kid-maad-city.jpg", title: "Good Kid, M.A.A.D City", artist: "Kendrick Lamar")
Track.create(name: "Sherane a.k.a. Master Splinter's Daughter", minutes: 5, album_id: a5.id)
Track.create(name: "Bitch, Don't Kill My Vibe", minutes: 6, album_id: a5.id)
Track.create(name: "Backseat Freestyle", minutes: 4, album_id: a5.id)
Track.create(name: "The Art of Peer Pressure", minutes: 6, album_id: a5.id)
Track.create(name: "Money Trees", minutes: 7, album_id: a5.id)
Track.create(name: "Poetic Justice", minutes: 5, album_id: a5.id)
Track.create(name: "good kid", minutes: 4, album_id: a5.id)
Track.create(name: "m.A.A.d city", minutes: 6, album_id: a5.id)
Track.create(name: "Swimming Pools (Drank)", minutes: 6, album_id: a5.id)
Track.create(name: "Sing About Me, I'm Dying of Thirst", minutes: 13, album_id: a5.id)
Track.create(name: "Real", minutes: 8, album_id: a5.id)
Track.create(name: "Compton", minutes: 5, album_id: a5.id)

a6 = Album.create(cover: "https://static-assets.codecademy.com/Courses/learn-ruby-on-rails/BassMusic/ram.jpg", title: "Random Access Memories", artist: "Daft Punk")
Track.create(name: "Give Life Back to Music", minutes: 5, album_id: a6.id)
Track.create(name: "The Game of Love", minutes: 6, album_id: a6.id)
Track.create(name: "Giorgio by Moroder", minutes: 10, album_id: a6.id)
Track.create(name: "Within", minutes: 4, album_id: a6.id)
Track.create(name: "Instant Crush", minutes: 6, album_id: a6.id)
Track.create(name: "Lose Yourself to Dance", minutes: 6, album_id: a6.id)
Track.create(name: "Touch", minutes: 9, album_id: a6.id)
Track.create(name: "Get Lucky", minutes: 7, album_id: a6.id)
Track.create(name: "Beyond", minutes: 5, album_id: a6.id)
Track.create(name: "Motherboard", minutes: 6, album_id: a6.id)
Track.create(name: "Fragments of Time", minutes: 5, album_id: a6.id)
Track.create(name: "Doin' It Right", minutes: 5, album_id: a6.id)
Track.create(name: "Contact", minutes: 7, album_id: a6.id)

a7 = Album.create(cover: "https://static-assets.codecademy.com/Courses/learn-ruby-on-rails/BassMusic/the-2020-experience.png", title: "The 20/20 Experience", artist: "Justin Timberlake")
Track.create(name: "Pusher Love Girl", minutes: 9, album_id: a7.id)
Track.create(name: "Suit & Tie", minutes: 6, album_id: a7.id)
Track.create(name: "Don't Hold the Wall", minutes: 8, album_id: a7.id)
Track.create(name: "Strawberry Bubblegum", minutes: 8, album_id: a7.id)
Track.create(name: "Tunnel Vision", minutes: 7, album_id: a7.id)
Track.create(name: "Spaceship Coupe", minutes: 8, album_id: a7.id)
Track.create(name: "That Girl", minutes: 5, album_id: a7.id)
Track.create(name: "Let the Groove Get In", minutes: 8, album_id: a7.id)
Track.create(name: "Mirrors", minutes: 9, album_id: a7.id)
Track.create(name: "Blue Ocean Floor", minutes: 8, album_id: a7.id)