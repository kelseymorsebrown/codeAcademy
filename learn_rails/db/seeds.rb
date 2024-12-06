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
if Tag.count == 0 && Destination.count == 0

  puts "creating tags and destinations"

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
end

# Books and Reviews
if Book.count == 0 && Review.count == 0

  puts "Creating books & reviews"

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

end

# Albums and Tracks

if Album.count == 0 && Track.count == 0
  puts "creating albums & tracks"
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

end

# Actors & Movies

if Actor.count == 0 && Movie.count == 0
  puts "creating actors & movies"

  a1 = Actor.create(first_name: "George", last_name: "Clooney", image: "https://content.codecademy.com/courses/learn-rails/img/george-clooney.jpg", bio: "George Timothy Clooney is an American actor, writer, producer, director, and activist. He has received three Golden Globe Awards for his ...")
  a2 = Actor.create(first_name: "Matt", last_name: "Damon", image: "https://content.codecademy.com/courses/learn-rails/img/matt-damon.jpg", bio: "Matthew Paige \"Matt\" Damon is an American actor, voice actor, screenwriter, producer, and philanthropist.")
  a3 = Actor.create(first_name: "Brad", last_name: "Pitt", image: "https://content.codecademy.com/courses/learn-rails/img/brad-pitt.jpg", bio: "William Bradley \"Brad\" Pitt is an American actor and producer. He has received a Golden Globe Award, a Screen Actors Guild Award, and thr...")
  a4 = Actor.create(first_name: "Elliot", last_name: "Gould", image: "https://content.codecademy.com/courses/learn-rails/img/elliot-gould.jpg", bio: "Elliott Gould is an American actor. He began acting in Hollywood films during the 1960s, and has remained prolific ever since. ")
  a5 = Actor.create(first_name: "Julia", last_name: "Roberts", image: "https://content.codecademy.com/courses/learn-rails/img/julia-roberts.jpg", bio: "Julia Fiona Roberts is an American actress and producer. She became a Hollywood star after headlining the romantic comedy Pretty Woman, w...")
  a6 = Actor.create(first_name: "Mark", last_name: "Wahlberg", image: "https://content.codecademy.com/courses/learn-rails/img/mark-wahlberg.jpg", bio: "Mark Robert Michael Wahlberg is an American actor, producer, model, and former rapper. He was known as Marky Mark in his earlier years, b...")
  a7 = Actor.create(first_name: "Marion", last_name: "Cotillard", image: "https://content.codecademy.com/courses/learn-rails/img/marion-cotillard.jpg", bio: "Marion Cotillard is a French actress, singer, songwriter, environmentalist and spokesperson for Greenpeace.")
  a8 = Actor.create(first_name: "Laurence", last_name: "Fishburne", image: "https://content.codecademy.com/courses/learn-rails/img/laurence-fishburne.jpg", bio: "Laurence John Fishburne III is an American actor, playwright, director, and producer. He is best known for his roles as Morpheus in the M...")
  a9 = Actor.create(first_name: "Jude", last_name: "Law", image: "https://content.codecademy.com/courses/learn-rails/img/jude-law.jpg", bio: "David Jude Heyworth Law, known professionally as Jude Law, is an English actor, film producer and director. He began acting with the Nati...")
  a10 = Actor.create(first_name: "Gwyneth", last_name: "Paltrow", image: "https://content.codecademy.com/courses/learn-rails/img/gwyneth-paltrow.jpg", bio: "Gwyneth Kate Paltrow is an American actress, singer, and food writer. Paltrow gained early notice for her work in films such as the psych...")
  a11 = Actor.create(first_name: "Kate", last_name: "Winslet", image: "https://content.codecademy.com/courses/learn-rails/img/kate-winslet.jpg", bio: "Kate Elizabeth Winslet, CBE, is an English actress and singer. She is the recipient of an Academy Award, an Emmy Award, three Golden Glob...")
  a12 = Actor.create(first_name: "Bryan", last_name: "Cranston", image: "https://content.codecademy.com/courses/learn-rails/img/bryan-cranston.jpg", bio: "Bryan Lee Cranston is an American actor, voice actor, screenwriter, director and producer. Cranston is best known for portraying Walter W...")
  a13 = Actor.create(first_name: "Leonardo", last_name: "DiCaprio", image: "https://content.codecademy.com/courses/learn-rails/img/leonardo-dicaprio.jpg", bio: "Leonardo Wilhelm DiCaprio is an American actor and film producer. He has been nominated for ten Golden Globe Awards, winning two, and fo...")
  a14 = Actor.create(first_name: "Jack", last_name: "Nicholson", image: "https://content.codecademy.com/courses/learn-rails/img/jack-nicholson.jpg", bio: "John Joseph \"Jack\" Nicholson is an American actor, film director, producer, and writer. Throughout his career, Nicholson has portrayed un...")
  a15 = Actor.create(first_name: "Joseph", last_name: "Gordon-Levitt", image: "https://content.codecademy.com/courses/learn-rails/img/joseph-gordon-levitt.jpg", bio: "Joseph Leonard Gordon-Levitt is an American actor and filmmaker. As a child star, he appeared in the films A River Runs Through It, Angel...")
  a16 = Actor.create(first_name: "Tom", last_name: "Hardy", image: "https://content.codecademy.com/courses/learn-rails/img/tom-hardy.jpg", bio: "Edward Thomas \"Tom\" Hardy is an English actor. Hardy's notable film roles include the science fiction film Star Trek: Nemesis, the Guy Ri...")
  a17 = Actor.create(first_name: "Cillian", last_name: "Murphy", image: "https://content.codecademy.com/courses/learn-rails/img/cillian-murphy.jpg", bio: "Cillian Murphy is an Irish actor of stage and screen. Since making his debut in his home country in the late 1990s, Murphy has also becom...")
  a18 = Actor.create(first_name: "Christian", last_name: "Bale", image: "https://content.codecademy.com/courses/learn-rails/img/christian-bale.jpg", bio: "Christian Charles Philip Bale is an English actor. He has starred in both blockbuster films and smaller projects from independent produce...")
  a19 = Actor.create(first_name: "Morgan", last_name: "Freeman", image: "https://content.codecademy.com/courses/learn-rails/img/morgan-freeman.jpg", bio: "Morgan Freeman is an American actor, film director, and narrator. Freeman has received Academy Award nominations for his performances in ...")
  a20 = Actor.create(first_name: "Robert", last_name: "Downey Jr.", image: "https://content.codecademy.com/courses/learn-rails/img/rdj.jpg", bio: "Robert John Downey Jr. is an American actor, producer, and singer. Making his screen debut at the age of five, appearing in his father Ro...")
  a21 = Actor.create(first_name: "Terrence", last_name: "Howard", image: "https://content.codecademy.com/courses/learn-rails/img/terrence-howard.jpg", bio: "Terrence Dashon Howard is an American actor and singer. Having his first major role in the 1995 film Dead Presidents, and Mr. Holland's O...")
  a22 = Actor.create(first_name: "Jeff", last_name: "Bridges", image: "https://content.codecademy.com/courses/learn-rails/img/jeff-bridges.jpg", bio: "Jeffrey Leon \"Jeff\" Bridges is an American actor, country musician, and producer. He comes from a well-known acting family and began his ...")
  a23 = Actor.create(first_name: "Rachel", last_name: "McAdams", image: "https://content.codecademy.com/courses/learn-rails/img/rachel-mcadams.jpg", bio: "Rachel Anne McAdams is a Canadian actress. After graduating from a four-year theatre program at York University in 2001, she initially wo...")
  a24 = Actor.create(first_name: "Mark", last_name: "Strong", image: "https://content.codecademy.com/courses/learn-rails/img/mark-strong.jpg", bio: "Mark Strong is an English film and television actor. He is best known for his role in the television series Our Friends in the North and ...")
  a25 = Actor.create(first_name: "Diane", last_name: "Lane", image: "https://content.codecademy.com/courses/learn-rails/img/diane-lane.jpg", bio: "Diane Lane is an American actress. Born and raised in New York City, Lane made her screen debut in George Roy Hill's 1979 film A Little R...")
  a27 = Actor.create(first_name: "Anne", last_name: "Hathaway", image: "https://content.codecademy.com/courses/learn-rails/img/anne-hathaway.jpg", bio: "Anne Jacqueline Hathaway is an American actress, singer, and producer. After several stage roles, she appeared in the 1999 television ser...")
  a28 = Actor.create(first_name: "Michael", last_name: "Caine", image: "https://content.codecademy.com/courses/learn-rails/img/michael-caine.jpg", bio: "Sir Michael Caine, CBE is an English actor and author. Renowned for his distinctive Cockney accent, Caine has appeared in over 115 films ...")
  a29 = Actor.create(first_name: "Natalie", last_name: "Portman", image: "https://content.codecademy.com/courses/learn-rails/img/natalie-portman.png", bio: "Natalie Portman is an Israeli-born American actress, producer, and director. Her first role was in the 1994 action thriller Léon: The Pr...")
  a30 = Actor.create(first_name: "Clive", last_name: "Owen", image: "https://content.codecademy.com/courses/learn-rails/img/clive-owen.jpg", bio: "Clive Owen is an English actor who first gained recognition in the United Kingdom for playing the lead role in the ITV series Chancer fro...")
  a31 = Actor.create(first_name: "Matthew", last_name: "McConaughey", image: "https://content.codecademy.com/courses/learn-rails/img/matthew-mcconaughey.jpg", bio: "Matthew David McConaughey is an American actor and producer. He first gained notice for his breakout role in the coming-of-age comedy Daz...")

  m1 = Movie.create(title: "Ocean's 11", image: "https://content.codecademy.com/courses/learn-rails/img/oceans-11.jpg", release_year: "2001", plot: "Dapper Danny Ocean (George Clooney) is a man of action. Less than 24 hours into his parole from a New Jersey penitentiary, the wry, chari...")
  m2 = Movie.create(title: "The Perfect Storm", image: "https://content.codecademy.com/courses/learn-rails/img/the-perfect-storm.jpg", release_year: "2000", plot: "Based on a true story, the film tells of the courageous men and women who risk their lives every working day, pitting their fishing boats...")
  m3 = Movie.create(title: "Contagion", image: "https://content.codecademy.com/courses/learn-rails/img/contagion.jpg", release_year: "2011", plot: "When Beth Emhoff (Gwyneth Paltrow) returns to Minnesota from a Hong Kong business trip, she attributes the malaise she feels to jet lag ...")
  m4 = Movie.create(title: "The Departed", image: "https://content.codecademy.com/courses/learn-rails/img/the-departed.jpg", release_year: "2006", plot: "South Boston cop Billy Costigan (Leonardo DiCaprio) goes under cover to infiltrate the organization of gangland chief Frank Costello (Jac...")
  m6 = Movie.create(title: "The Dark Knight Rises", image: "https://content.codecademy.com/courses/learn-rails/img/dark-knight-rises.jpg", release_year: "2012", plot: "It has been eight years since Batman (Christian Bale), in collusion with Commissioner Gordon (Gary Oldman), vanished into the night. Assu...")
  m7 = Movie.create(title: "Iron Man", image: "https://content.codecademy.com/courses/learn-rails/img/iron-man.jpg", release_year: "2008", plot: "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kid...")
  m8 = Movie.create(title: "Sherlock Holmes", image: "https://content.codecademy.com/courses/learn-rails/img/sherlock-holmes.jpg", release_year: "2009", plot: "When a string of brutal murders terrorizes London, it doesn't take long for legendary detective Sherlock Holmes (Robert Downey Jr.) and ...")
  m9 = Movie.create(title: "Closer", image: "https://content.codecademy.com/courses/learn-rails/img/closer.jpg", release_year: "2004", plot: "Alice (Natalie Portman), who has moved to London, meets Dan (Jude Law) on the street. While looking at him, a taxi hits her. After taking ...")
  m10 = Movie.create(title: "Interstellar", image: "https://content.codecademy.com/courses/learn-rails/img/interstellar.jpg", release_year: "2014", plot: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Cai...")

  m1.actors << [a1, a2, a3, a4, a5]
  m2.actors << [a1, a6, a25]
  m3.actors << [a7, a8, a9, a10, a11, a12, a4, a2]
  m4.actors << [a2, a13, a14, a6]
  m6.actors << [a18, a19, a28, a16, a7, a17, a15, a27]
  m7.actors << [a20, a21, a22, a10]
  m8.actors << [a20, a9, a23, a24]
  m9.actors << [a5, a9, a29, a30]
  m10.actors << [a31, a27, a28, a2]
end

# Articles

if Article.count == 0
  puts "Creating articles"

  Article.create(title: "Is there someone who can watch us?", author: "Matt Healy", body: "I used to have a reoccurring dream when I was younger. The narrative was loosely based, but the setting was always the surrounding areas of where my parents grew up. I think I was slightly obsessed with how certain, bleak areas of Northern England contained my history and the soul of my family, my psyche - I always felt connected and disconnected at the same time. Metaphorically and physically I would visit these places frequently as a youngster and in turn have used them as the setting to a lot of the stories in The 1975 - the North East was the visual setting to my formative years.")

  Article.create(title: "Between the stripes", author: "Leonardo San Miguel", body: 'Pantomime lore dates as far back as the eight century BC, but it was never formalized as an art—the one we know now we know now—until around the sixteenth century in Easter Europe. Although almost every record of Pantomime implies the art was primarily conceived as a form of entertainment, there have always been traces that indicate the art was a manifestation of a grander concept: that of revelation through absence. Indeed, a pantomime’s performance is, however comical or banal, a form of illusionism. As author Edward Lancaster writes in The Mysticism of Performing Arts, “There is no greater demonstration of magic than that of creating entire worlds and realities through the use of nothing but one’s body in motion and the unrelenting desire of the human mind to fill in the blanks.”
  ')

  Article.create(title: "Water", author: "Diana Storm", body: "Benjamin is laying on a field of grass and it is the middle of a windy, but warm day. He is staring at the sky. Blue looking at blue, but hidden under a pair of aviators. His hair cannot yet decide if it is a dark yellow or a light brown, and he likes that.")
end
