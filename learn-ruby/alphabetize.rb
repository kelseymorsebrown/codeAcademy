def alphabetize(arr, rev=false)
  arr.sort!
  if rev
    return arr.reverse!
  else
    return arr
  end
end

numbers = [3,6,1,34,23,100,56]

puts alphabetize(numbers)